import "../styles/App.scss";
import logoTeam from "../images/logo-team-undefined.svg";
import logoAdalab from "../images/logo-adalab.png";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "",
    palette: 1,
  });

  const handleInput = (ev) => {
    const inputChange = ev.currentTarget.name;
<<<<<<< Updated upstream
    if (inputChange === "name") {
      setData({
        ...data,
        name: ev.currentTarget.value,
      });
    } else if (inputChange === "job") {
      setData({
        ...data,
        job: ev.currentTarget.value,
      });
    } else if (inputChange === "email") {
      setData({
        ...data,
        email: ev.currentTarget.value,
      });
    } else if (inputChange === "phone") {
      setData({
        ...data,
        phone: ev.currentTarget.value,
      });
    } else if (inputChange === "linkedin") {
      setData({
        ...data,
        linkedin: ev.currentTarget.value,
      });
    } else if (inputChange === "github") {
      setData({
        ...data,
        github: ev.currentTarget.value,
      });
    }
=======
    setData({
      ...data,
      [inputChange]: ev.currentTarget.value,
    });
  };

  const handlerSubmit = (ev) => {
    ev.preventDefault();
  };

  // const changeColorPalettes = () => {

  // }

  const handlerReset = () => {
    setData({
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: "1",
    });
>>>>>>> Stashed changes
  };
  return (
    <div className="App">
      <header className="header">
        <div className="header__wrapper">
          <a className="header__link" href="./#" title="Team Undefined">
            <img className="header__img" src={logoTeam} alt="Team Undefined" />
          </a>
        </div>
      </header>
      <section className="profile-cards">
        <form className="form" action="">
          <section className="cards">
            <div className="cards__container">
              <button className="cards__button--reset js-resetBtn" type="reset">
                <i className="far fa-trash-alt"></i>Reset
              </button>
              <article className="cards__article">
                <div className="js-borderPalette cards__wrapper--palette1">
                  <h1 className="cards__title js-cardName cards__title--palette1">
                    {data.name || "Nombre Apellidos"}
                  </h1>
                  <h2 className="cards__subtitle js-cardOccupation">
                    {data.job || "Front End Developer"}
                  </h2>
                </div>
                <div className="cards__image js__profile-image"></div>
                <ul className="cards__contact">
                  <li className="cards__item">
                    <a
                      className="cards__link cards__link--phone js-phonePreview js-linksIcons cards__link--palette1"
                      title="Teléfono"
                      href="./#"
                    >
                      <i className="fas fa-mobile-alt"></i>
                    </a>
                  </li>
                  <li className="cards__item">
                    <a
                      className="cards__link cards__link--email js-previewEmail js-linksIcons cards__link--palette1"
                      title="Email"
                      href="./#"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                  </li>
                  <li className="cards__item">
                    <a
                      className="cards__link cards__link--linkedin js-cardLinkedin js-linksIcons cards__link--palette1"
                      href="./#"
                      title="LinkedIn"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="cards__item">
                    <a
                      className="cards__link cards__link--github js-cardGitHub js-linksIcons cards__link--palette1"
                      title="GitHub"
                      href="./#"
                      target="_blank"
                    >
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </section>
          <div className="form__fieldsets">
            <fieldset className="box design">
              <legend className="js-legendDesign box__header">
                <div className="box__wrapper">
                  <i className="far fa-object-ungroup box__icon"></i>
                  <h2 className="box__title">Diseña</h2>
                </div>
                <i className="js-iconDesign fas fa-chevron-up box__arrow"></i>
              </legend>

              <section className="js-sectionDesign box__main design__section">
                <p className="design__text">Colores</p>

                <div className="design__wrapper">
                  <div className="design__option">
                    <input
                      type="radio"
                      id="palette1"
                      name="palette"
                      className="js-labelPalette design__input"
                      defaultChecked
                    />

                    <label htmlFor="palette1" className="design__label">
                      <ul className="design__list">
                        <li className="design__color palette1--color1"></li>
                        <li className="design__color palette1--color2"></li>
                        <li className="design__color palette1--color3"></li>
                      </ul>
                    </label>
                  </div>

                  <div className="design__option">
                    <input
                      type="radio"
                      id="palette2"
                      name="palette"
                      className="js-labelPalette design__input"
                    />

                    <label htmlFor="palette2" className="design__label">
                      <ul className="design__list">
                        <li className="design__color palette2--color1"></li>
                        <li className="design__color palette2--color2"></li>
                        <li className="design__color palette2--color3"></li>
                      </ul>
                    </label>
                  </div>

                  <div className="design__option">
                    <input
                      type="radio"
                      id="palette3"
                      name="palette"
                      className="js-labelPalette design__input"
                    />

                    <label htmlFor="palette3" className="design__label">
                      <ul className="design__list">
                        <li className="design__color palette3--color1"></li>
                        <li className="design__color palette3--color2"></li>
                        <li className="design__color palette3--color3"></li>
                      </ul>
                    </label>
                  </div>
                </div>
              </section>
            </fieldset>
            <fieldset className="box fill">
              <legend className="box__header js-legendFill">
                <div className="box__wrapper">
                  <i className="far fa-keyboard box__icon"></i>
                  <h2 className="box__title">Rellena</h2>
                </div>
                <i className="fas fa-chevron-down box__arrow js-iconFill"></i>
              </legend>

              <section
                className="box__main fill__section js-sectionFill" /*hidden*/
              >
                <label className="fill__label" htmlFor="name">
                  Nombre completo
                </label>
                <input
                  className="fill__input js-name"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ej: Sally Jill"
                  maxLength="16"
                  onChange={handleInput}
                />

                <label className="fill__label" htmlFor="job">
                  Puesto
                </label>
                <input
                  className="fill__input js-occupation"
                  type="text"
                  name="job"
                  id="job"
                  placeholder="Ej: Front-end unicorn"
                  maxLength="24"
                  onChange={handleInput}
                />

                <label className="fill__label">Imagen de perfil</label>
                <div className="fill__container">
                  <label
                    className="fill__button js__profile-trigger"
                    htmlFor="img-selector"
                    type="button"
                  >
                    Añadir imagen
                  </label>
                  <input
                    type="file"
                    name="img-selector"
                    id="img-selector"
                    className="js__profile-upload-btn hidden"
                  />
                  <div className="fill__image js__profile-preview"></div>
                </div>

                <label className="fill__label" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  className="js-fill_phone fill__input"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Ej: 555-55-55-55"
                  onChange={handleInput}
                />

                <label className="fill__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="fill__input js-inputEmail"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ej: sally-hill@gmail.com"
                  onChange={handleInput}
                />

                <label className="fill__label" htmlFor="linkedin">
                  LinkedIn
                </label>
                <input
                  className="fill__input js-inputLinkedin"
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  placeholder="Ej: linkedin.com/in/sally.hill"
                  onChange={handleInput}
                />

                <label className="fill__label" htmlFor="github">
                  GitHub
                </label>
                <input
                  className="fill__input js-inputGitHub"
                  type="text"
                  name="github"
                  id="github"
                  placeholder="Ej: github.com/sally-hill"
                  onChange={handleInput}
                />
              </section>
            </fieldset>
            <fieldset className="box share">
              <legend className="box__header js-legendShare">
                <div className="box__wrapper">
                  <i className="fas fa-share-alt box__icon"></i>
                  <h2 className="box__title">Comparte</h2>
                </div>
                <i className="fas fa-chevron-down box__arrow js-iconShare"></i>
              </legend>

              <section className="box__main share__section js-sectionShare hidden">
                <div className="share__main">
                  <button
                    className="js-shareBtn share__button share__button--disabled"
                    type="submit"
                    disabled
                  >
                    <i className="far fa-address-card"></i>Crear tarjeta
                  </button>
                </div>

                <div className="js-shareDone share__done hidden">
                  <p className="share__text">La tarjeta ha sido creada:</p>
                  <a
                    className="js-shareLink share__link"
                    href="./#"
                    target="_blank"
                  >
                    Your URL will be placed here!
                  </a>
                  <a
                    className="share__button share__button--twitter js-shareTwitter"
                    href="./#"
                  >
                    <i className="fab fa-twitter"></i>Compartir en twitter
                  </a>
                </div>

                <div className="js-shareError share__done hidden">
                  <p className="share__error">
                    ERROR, te faltan campos por rellenar
                  </p>
                </div>
              </section>
            </fieldset>
          </div>
        </form>
      </section>
      <footer className="footer">
        <div className="footer__wrapper">
          <p className="footer__text">Team Undefined &copy; 2021</p>
          <a
            className="footer__link"
            href="https://adalab.es/"
            target="_blank"
            rel="noreferrer"
            title="Adalab"
          >
            <img className="footer__img" src={logoAdalab} alt="Logo Adalab" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
