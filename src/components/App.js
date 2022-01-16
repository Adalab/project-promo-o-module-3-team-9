import "../styles/App.scss";
import logoTeam from "../images/logo-team-undefined.svg";
import logoAdalab from "../images/logo-adalab.png";
import { useState } from "react";

function App() {
  const [clase, setClase] = useState("--palette1");
  //const [classLegend, setClassLegend] = useState(null);
  const classLegend = "hidden";

  const [data, setData] = useState({
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "",
    palette: "1",
  });

  const handleCollapsable = (ev) => {
    const selectedCollapsable = ev.currentTarget;
    console.log(selectedCollapsable);
  };

  const handlePalette = (ev) => {
    if (ev.currentTarget.value === "1") {
      setClase("--palette1");
    } else if (ev.currentTarget.value === "2") {
      setClase("--palette2");
    } else if (ev.currentTarget.value === "3") {
      setClase("--palette3");
    }
  };

  const handleInput = (ev) => {
    const inputChange = ev.currentTarget.name;
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
        <form className="form" action="" onSubmit={handlerSubmit}>
          <section className="cards">
            <div className="cards__container">
              <button
                onClick={handlerReset}
                className="cards__button--reset js-resetBtn"
                type="reset"
              >
                <i className="far fa-trash-alt"></i>Reset
              </button>
              <article className="cards__article">
                <div className={`js-borderPalette cards__wrapper${clase}`}>
                  <h1
                    className={`cards__title js-cardName cards__title${clase}`}
                  >
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
                      className={`cards__link cards__link--phone js-phonePreview js-linksIcons cards__link${clase}`}
                      title="Teléfono"
                      href={`tel:${data.phone}`}
                    >
                      <i className="fas fa-mobile-alt"></i>
                    </a>
                  </li>
                  <li className="cards__item">
                    <a
                      className={`cards__link cards__link--email js-previewEmail js-linksIcons cards__link${clase}`}
                      title="Email"
                      href={`mailto:${data.email}`}
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                  </li>
                  <li className="cards__item">
                    <a
                      className={`cards__link cards__link--linkedin js-cardLinkedin js-linksIcons cards__link${clase}`}
                      href={`https://www.linkedin.com/in/${data.linkedin}`}
                      title="LinkedIn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="cards__item">
                    <a
                      className={`cards__link cards__link--github js-cardGitHub js-linksIcons cards__link${clase}`}
                      title="GitHub"
                      href={`https://github.com/${data.github}`}
                      target="_blank"
                      rel="noreferrer"
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
              <legend
                className="js-legendDesign box__header"
                onClick={handleCollapsable}
              >
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
                      onChange={handleInput}
                      onClick={handlePalette}
                      type="radio"
                      id="palette1"
                      name="palette"
                      checked={data.palette === "1"}
                      value="1"
                      className="js-labelPalette design__input"
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
                      onChange={handleInput}
                      onClick={handlePalette}
                      type="radio"
                      id="palette2"
                      name="palette"
                      value="2"
                      className="js-labelPalette design__input"
                      checked={data.palette === "2"}
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
                      onChange={handleInput}
                      onClick={handlePalette}
                      type="radio"
                      id="palette3"
                      name="palette"
                      className="js-labelPalette design__input"
                      value="3"
                      checked={data.palette === "3"}
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
              <legend
                className="box__header js-legendFill"
                onClick={handleCollapsable}
              >
                <div className="box__wrapper">
                  <i className="far fa-keyboard box__icon"></i>
                  <h2 className="box__title">Rellena</h2>
                </div>
                <i className="fas fa-chevron-down box__arrow js-iconFill"></i>
              </legend>

              <section
                className={`box__main fill__section js-sectionFill ${classLegend}`}
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
                  value={data.name}
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
                  value={data.job}
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
                  value={data.phone}
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
                  value={data.email}
                />

                <label className="fill__label" htmlFor="linkedin">
                  LinkedIn
                </label>
                <input
                  className="fill__input js-inputLinkedin"
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  placeholder="Ej: sally.hill"
                  onChange={handleInput}
                  value={data.linkedin}
                />

                <label className="fill__label" htmlFor="github">
                  GitHub
                </label>
                <input
                  className="fill__input js-inputGitHub"
                  type="text"
                  name="github"
                  id="github"
                  placeholder="Ej: sally-hill"
                  onChange={handleInput}
                  value={data.github}
                />
              </section>
            </fieldset>
            <fieldset className="box share">
              <legend
                className="box__header js-legendShare"
                onClick={handleCollapsable}
              >
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
