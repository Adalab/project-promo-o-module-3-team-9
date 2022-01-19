import logoTeam from "../images/logo-team-undefined.svg";

const Header = () => {
    return(
        <header className="header">
        <div className="header__wrapper">
          <a className="header__link" href="./#" title="Team Undefined">
            <img className="header__img" src={logoTeam} alt="Team Undefined" />
          </a>
        </div>
      </header>
    )
};

export default Header;