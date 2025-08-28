import React, { useState } from 'react';

/**
 * Componente: ContactInfo
 * Descrição: Exibe as informações de contato estáticas, como endereço e telefone.
 */
const ContactInfo = () => {
    // Dados podem ser extraídos para um objeto para facilitar a manutenção
    const contactDetails = [
        { icon: 'bi-geo-alt', title: 'Endereço', lines: ['Av. Tecnologia Verde, 123', 'São Paulo, SP - CEP 04000-000', 'Brasil'] },
        { icon: 'bi-telephone', title: 'Telefone', lines: ['(11) 9876-5432', '(11) 1234-5678'] },
        { icon: 'bi-envelope', title: 'Email', lines: ['contato@agrovision.com.br', 'suporte@agrovision.com.br'] },
        { icon: 'bi-clock', title: 'Horário de Atendimento', lines: ['Segunda a Sexta: 8h às 18h', 'Sábados: 9h às 13h'] }
    ];

    return (
        <div className="bg-light p-4 rounded shadow-sm d-flex flex-column justify-content-between h-100">
            <h2 className="mb-4">Informações de Contato</h2>
            {contactDetails.map(detail => (
                <div key={detail.title} className="d-flex align-items-start mb-4">
                    <div className="bg-success rounded-circle p-2 text-white me-3">
                        <i className={`bi ${detail.icon}`}></i>
                    </div>
                    <div>
                        <h5 className="fw-bold">{detail.title}</h5>
                        <p className="mb-0" dangerouslySetInnerHTML={{ __html: detail.lines.join('<br />') }} />
                    </div>
                </div>
            ))}
            <div className="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975895363844!2d-46.65339388502166!3d-23.563244384682613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1619541534707!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Localização no Google Maps"
                ></iframe>
            </div>
        </div>
    );
};
