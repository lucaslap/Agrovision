import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix para ícones do Leaflet no Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Componente para controlar a visualização do mapa
const MapController = ({ currentView }) => {
  const map = useMap();
  
  useEffect(() => {
    // Simular mudança de camada baseada na visualização
    if (currentView === 'ndvi') {
      map.getContainer().style.filter = 'hue-rotate(120deg) saturate(1.5)';
    } else if (currentView === 'thermal') {
      map.getContainer().style.filter = 'hue-rotate(300deg) saturate(2) contrast(1.2)';
    } else {
      map.getContainer().style.filter = 'none';
    }
  }, [currentView, map]);

  return null;
};

const SatelliteDemo = () => {
  const [currentView, setCurrentView] = useState('rgb');
  const [scanProgress, setScanProgress] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Coordenadas de uma fazenda real em Primavera do Leste, MT
  const farmCenter = [-14.2350, -50.5945];
  const mapBounds = [
    [-15.5461, -54.3052], // Southwest
    [-15.5661, -54.2852]  // Northeast
  ];

  // Polígonos representando diferentes talhões da fazenda
  const farmFields = [
    {
      id: 'talhao-1',
      name: 'Talhão 1 - Soja',
      coordinates: [
        [-15.5500, -54.3000],
        [-15.5500, -54.2950],
        [-15.5530, -54.2950],
        [-15.5530, -54.3000]
      ],
      ndvi: 0.85,
      status: 'excellent',
      area: '45.2 ha'
    },
    {
      id: 'talhao-2',
      name: 'Talhão 2 - Milho',
      coordinates: [
        [-15.5530, -54.3000],
        [-15.5530, -54.2950],
        [-15.5570, -54.2950],
        [-15.5570, -54.3000]
      ],
      ndvi: 0.72,
      status: 'good',
      area: '38.7 ha'
    },
    {
      id: 'talhao-3',
      name: 'Talhão 3 - Soja',
      coordinates: [
        [-15.5570, -54.3000],
        [-15.5570, -54.2950],
        [-15.5600, -54.2950],
        [-15.5600, -54.3000]
      ],
      ndvi: 0.45,
      status: 'attention',
      area: '42.1 ha'
    },
    {
      id: 'talhao-4',
      name: 'Talhão 4 - Algodão',
      coordinates: [
        [-15.5500, -54.2950],
        [-15.5500, -54.2900],
        [-15.5560, -54.2900],
        [-15.5560, -54.2950]
      ],
      ndvi: 0.78,
      status: 'good',
      area: '52.3 ha'
    }
  ];

  // Função para determinar a cor baseada no NDVI e visualização atual
  const getFieldColor = (field) => {
    if (currentView === 'rgb') {
      return '#90EE90'; // Verde claro para visualização RGB
    } else if (currentView === 'ndvi') {
      if (field.ndvi >= 0.8) return '#006400'; // Verde escuro - excelente
      if (field.ndvi >= 0.6) return '#32CD32'; // Verde médio - bom
      if (field.ndvi >= 0.4) return '#FFFF00'; // Amarelo - atenção
      return '#FF4500'; // Vermelho - crítico
    } else if (currentView === 'thermal') {
      if (field.ndvi >= 0.8) return '#0000FF'; // Azul - baixa temperatura
      if (field.ndvi >= 0.6) return '#00FFFF'; // Ciano - média
      if (field.ndvi >= 0.4) return '#FFFF00'; // Amarelo - alta
      return '#FF0000'; // Vermelho - muito alta
    }
    return '#90EE90';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const views = {
    rgb: {
      name: 'Visão RGB',
      description: 'Imagem natural da propriedade',
      color: '#007bff'
    },
    ndvi: {
      name: 'Índice NDVI',
      description: 'Análise de vigor vegetativo',
      color: '#28a745'
    },
    thermal: {
      name: 'Termal',
      description: 'Detecção de stress hídrico',
      color: '#dc3545'
    }
  };

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Área com baixo NDVI detectada no Talhão 3',
      time: '2 min atrás',
      icon: 'bi-exclamation-triangle',
      coordinates: [-15.5585, -54.2975]
    },
    {
      id: 2,
      type: 'success',
      message: 'Irrigação otimizada no Talhão 1 - economia de 15%',
      time: '5 min atrás',
      icon: 'bi-check-circle',
      coordinates: [-15.5515, -54.2975]
    },
    {
      id: 3,
      type: 'info',
      message: 'Nova imagem de satélite processada',
      time: '10 min atrás',
      icon: 'bi-satellite',
      coordinates: farmCenter
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <motion.h2
              className="fw-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <i className="bi bi-satellite me-2 text-primary"></i>
              Monitoramento por Satélite
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Acompanhe sua propriedade com imagens de satélite atualizadas a cada 3 dias
            </motion.p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <motion.div
              className="satellite-map-container position-relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Mapa Real com Leaflet */}
              <div className="real-map" style={{ height: '500px', borderRadius: '12px', overflow: 'hidden' }}>
                <MapContainer
                  center={farmCenter}
                  zoom={15}
                  style={{ height: '100%', width: '100%' }}
                  whenCreated={() => setMapLoaded(true)}
                  scrollWheelZoom={false}
                  dragging={true}
                  zoomControl={true}
                >
                  {/* Camada base do mapa satelital */}
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  />
                  
                  {/* Controlador de visualização */}
                  <MapController currentView={currentView} />
                  
                  {/* Polígonos dos talhões */}
                  {farmFields.map((field) => (
                    <Polygon
                      key={field.id}
                      positions={field.coordinates}
                      pathOptions={{
                        fillColor: getFieldColor(field),
                        fillOpacity: 0.6,
                        color: '#333',
                        weight: 2,
                        opacity: 0.8
                      }}
                    >
                      <Popup>
                        <div className="p-2">
                          <h6 className="mb-2">{field.name}</h6>
                          <p className="mb-1"><strong>Área:</strong> {field.area}</p>
                          <p className="mb-1"><strong>NDVI:</strong> {field.ndvi.toFixed(2)}</p>
                          <p className="mb-0">
                            <span className={`badge bg-${field.status === 'excellent' ? 'success' : 
                                                      field.status === 'good' ? 'warning' : 'danger'}`}>
                              {field.status === 'excellent' ? 'Excelente' :
                               field.status === 'good' ? 'Bom' : 'Atenção'}
                            </span>
                          </p>
                        </div>
                      </Popup>
                    </Polygon>
                  ))}
                  
                  {/* Marcadores para alertas */}
                  {alerts.filter(alert => alert.coordinates).map((alert) => (
                    <Marker key={alert.id} position={alert.coordinates}>
                      <Popup>
                        <div className="p-2">
                          <div className="d-flex align-items-center mb-2">
                            <i className={`${alert.icon} me-2 text-${alert.type === 'warning' ? 'warning' : 
                                                                    alert.type === 'success' ? 'success' : 'info'}`}></i>
                            <strong>Alerta</strong>
                          </div>
                          <p className="mb-1">{alert.message}</p>
                          <small className="text-muted">{alert.time}</small>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
              
              {/* Overlay com informações */}
              <div className="position-absolute top-0 start-0 p-3" style={{ zIndex: 1000 }}>
                <div className="bg-white rounded shadow-sm p-2 mb-2" style={{ backdropFilter: 'blur(10px)' }}>
                  <small className="text-muted d-block">Coordenadas</small>
                  <strong>-15.5561°S, -54.2952°W</strong>
                </div>
                <div className="bg-white rounded shadow-sm p-2" style={{ backdropFilter: 'blur(10px)' }}>
                  <small className="text-muted d-block">Última atualização</small>
                  <strong>Hoje, 14:30</strong>
                </div>
              </div>

              {/* Legenda NDVI */}
              {currentView === 'ndvi' && (
                <div className="position-absolute top-0 end-0 p-3" style={{ zIndex: 1000 }}>
                  <div className="bg-white rounded shadow-sm p-3" style={{ backdropFilter: 'blur(10px)' }}>
                    <h6 className="mb-2">Legenda NDVI</h6>
                    <div className="ndvi-legend-items">
                      <div className="d-flex align-items-center mb-1">
                        <div className="legend-color" style={{ backgroundColor: '#006400', width: '20px', height: '15px', marginRight: '8px' }}></div>
                        <small>0.8-1.0 Excelente</small>
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <div className="legend-color" style={{ backgroundColor: '#32CD32', width: '20px', height: '15px', marginRight: '8px' }}></div>
                        <small>0.6-0.8 Bom</small>
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <div className="legend-color" style={{ backgroundColor: '#FFFF00', width: '20px', height: '15px', marginRight: '8px' }}></div>
                        <small>0.4-0.6 Atenção</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="legend-color" style={{ backgroundColor: '#FF4500', width: '20px', height: '15px', marginRight: '8px' }}></div>
                        <small>0.0-0.4 Crítico</small>
                      </div>
                    </div>
                    <div className="mt-2">
                      <small className="text-success">
                        <i className="bi bi-circle-fill me-1"></i>
                        78% da área em boa condição
                      </small>
                    </div>
                  </div>
                </div>
              )}

              {/* Barra de progresso de processamento */}
              <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ zIndex: 1000 }}>
                <div className="bg-white rounded shadow-sm p-2" style={{ backdropFilter: 'blur(10px)' }}>
                  <div className="progress mb-2" style={{ height: '6px' }}>
                    <div 
                      className="progress-bar bg-primary" 
                      style={{ width: `${scanProgress}%` }}
                    ></div>
                  </div>
                  <small className="text-muted">
                    <i className="loading-spinner bi bi-arrow-clockwise me-1"></i>
                    Processando imagens... {scanProgress}%
                  </small>
                </div>
              </div>
            </motion.div>

            <div className="mt-3">
              <div className="btn-group w-100" role="group">
                {Object.entries(views).map(([key, view]) => (
                  <button
                    key={key}
                    type="button"
                    className={`btn ${currentView === key ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setCurrentView(key)}
                  >
                    {view.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="h-100">
              <h5 className="fw-bold mb-3">Alertas em Tempo Real</h5>
              
              <div className="d-flex flex-column gap-3">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    className={`demo-alert alert-${alert.type}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="d-flex">
                      <i className={`${alert.icon} me-2 mt-1`}></i>
                      <div className="flex-grow-1">
                        <div className="fw-medium">{alert.message}</div>
                        <small className="text-muted">{alert.time}</small>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-white rounded shadow-sm">
                <h6 className="fw-bold mb-3">Estatísticas da Fazenda</h6>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="text-center">
                      <div className="h4 text-primary mb-1">{farmFields.length}</div>
                      <small className="text-muted">Talhões</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <div className="h4 text-success mb-1">
                        {farmFields.reduce((sum, field) => sum + parseFloat(field.area), 0).toFixed(1)}
                      </div>
                      <small className="text-muted">Hectares</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <div className="h4 text-warning mb-1">
                        {(farmFields.reduce((sum, field) => sum + field.ndvi, 0) / farmFields.length).toFixed(2)}
                      </div>
                      <small className="text-muted">NDVI médio</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center">
                      <div className="h4 text-info mb-1">
                        {Math.round((farmFields.filter(field => field.ndvi >= 0.6).length / farmFields.length) * 100)}%
                      </div>
                      <small className="text-muted">Área saudável</small>
                    </div>
                  </div>
                </div>
                
                {/* Lista dos talhões */}
                <div className="mt-3 pt-3 border-top">
                  <h6 className="fw-bold mb-2">Status dos Talhões</h6>
                  {farmFields.map((field) => (
                    <div key={field.id} className="d-flex justify-content-between align-items-center py-1">
                      <div>
                        <small className="fw-medium">{field.name}</small>
                        <br />
                        <small className="text-muted">{field.area}</small>
                      </div>
                      <div className="text-end">
                        <span className={`badge bg-${field.status === 'excellent' ? 'success' : 
                                                  field.status === 'good' ? 'warning' : 'danger'}`}>
                          NDVI {field.ndvi.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteDemo;
