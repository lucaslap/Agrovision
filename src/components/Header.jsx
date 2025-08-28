import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import NavLinks from "./Layout/Header/NavLinks";
import BotaoMenuHamburguer from "./BotaoMenuHamburguer/BotaoMenuHamburguer";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Logo />

          <BotaoMenuHamburguer />

          <div className="collapse navbar-collapse" id="nav-principal">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavLinks />

              <li className="nav-item d-flex align-items-center">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="btn btn-outline-success d-flex align-items-center gap-2">
                      <i className="bi bi-person-circle"></i>
                      Fazer Login
                    </button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        rootBox: "cl-userButton",
                        userButtonAvatarBox: "cl-userButtonAvatarBox",
                      },
                    }}
                  />
                </SignedIn>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
