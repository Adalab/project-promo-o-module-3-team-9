import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="header__wrapper">
          <a class="header__link" href="./" title="Team Undefined"><img class="header__img" src="./assets/images/logo-team-undefined.svg" alt="Team Undefined"/></a>
        </div>
      </header>
      <section class="profile-cards">
        <form class="form" action="">
          <section class="cards">
            <div class="cards__container">
              <button class="cards__button--reset js-resetBtn" type="reset"><i class="far fa-trash-alt"></i>Reset</button>
              <article class="cards__article">
                <div class="js-borderPalette cards__wrapper--palette1">
                  <h1 class="cards__title js-cardName cards__title--palette1">Nombre Apellido</h1>
                  <h2 class="cards__subtitle js-cardOccupation">Front-end developer</h2>
                </div>
                <div class="cards__image js__profile-image"></div>
                <ul class="cards__contact">
                  <li class="cards__item">
                    <a class="cards__link cards__link--phone js-phonePreview js-linksIcons cards__link--palette1"
                      title="Teléfono"><i class="fas fa-mobile-alt"></i></a>
                  </li>
                  <li class="cards__item">
                    <a class="cards__link cards__link--email js-previewEmail js-linksIcons cards__link--palette1"
                      title="Email"><i class="far fa-envelope"></i></a>
                  </li>
                  <li class="cards__item">
                    <a class="cards__link cards__link--linkedin js-cardLinkedin js-linksIcons cards__link--palette1"
                      title="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                  </li>
                  <li class="cards__item">
                    <a class="cards__link cards__link--github js-cardGitHub js-linksIcons cards__link--palette1"
                      title="GitHub" target="_blank"><i class="fab fa-github-alt"></i></a>
                  </li>
                </ul>
              </article>
            </div>
          </section>
          <div class="form__fieldsets">
            <fieldset class="box design">
              <legend class="js-legendDesign box__header">
                <div class="box__wrapper">
                  <i class="far fa-object-ungroup box__icon"></i>
                  <h2 class="box__title">Diseña</h2>
                </div>
                <i class="js-iconDesign fas fa-chevron-up box__arrow"></i>
              </legend>

              <section class="js-sectionDesign box__main design__section">
                <p class="design__text">Colores</p>

                <div class="design__wrapper">
                  <div class="design__option">
                    <input
                      type="radio"
                      id="palette1"
                      name="palette"
                      class="js-labelPalette design__input"
                      checked
                    />

                    <label for="palette1" class="design__label">
                      <ul class="design__list">
                        <li class="design__color palette1--color1"></li>
                        <li class="design__color palette1--color2"></li>
                        <li class="design__color palette1--color3"></li>
                      </ul>
                    </label>
                  </div>

                  <div class="design__option">
                    <input
                      type="radio"
                      id="palette2"
                      name="palette"
                      class="js-labelPalette design__input"
                    />

                    <label for="palette2" class="design__label">
                      <ul class="design__list">
                        <li class="design__color palette2--color1"></li>
                        <li class="design__color palette2--color2"></li>
                        <li class="design__color palette2--color3"></li>
                      </ul>
                    </label>
                  </div>

                  <div class="design__option">
                    <input
                      type="radio"
                      id="palette3"
                      name="palette"
                      class="js-labelPalette design__input"
                    />

                    <label for="palette3" class="design__label">
                      <ul class="design__list">
                        <li class="design__color palette3--color1"></li>
                        <li class="design__color palette3--color2"></li>
                        <li class="design__color palette3--color3"></li>
                      </ul>
                    </label>
                  </div>
                </div>
              </section>
            </fieldset>
            <fieldset class="box fill">
              <legend class="box__header js-legendFill">
                <div class="box__wrapper">
                  <i class="far fa-keyboard box__icon"></i>
                  <h2 class="box__title">Rellena</h2>
                </div>
                <i class="fas fa-chevron-down box__arrow js-iconFill"></i>
              </legend>

              <section class="box__main fill__section js-sectionFill hidden">
                <label class="fill__label" for="name">Nombre completo</label>
                <input class="fill__input js-name" type="text" name="name" id="name" placeholder="Ej: Sally Jill"
                  maxlength="16" />

                <label class="fill__label" for="job">Puesto</label>
                <input class="fill__input js-occupation" type="text" name="job" id="job" placeholder="Ej: Front-end unicorn"
                  maxlength="24" />

                <label class="fill__label">Imagen de perfil</label>
                <div class="fill__container">
                  <label class="fill__button js__profile-trigger" for="img-selector" type="button">Añadir imagen</label>
                  <input type="file" name="img-selector" id="img-selector" class="js__profile-upload-btn hidden"/>
                    <div class="fill__image js__profile-preview"></div>
                </div>

                <label class="fill__label" for="phone">Teléfono</label>
                <input class="js-fill_phone fill__input" type="tel" name="phone" id="phone" placeholder="Ej: 555-55-55-55" />

                <label class="fill__label" for="email">Email</label>
                <input class="fill__input js-inputEmail" type="email" name="email" id="email"
                  placeholder="Ej: sally-hill@gmail.com" />

                <label class="fill__label" for="linkedin">LinkedIn</label>
                <input class="fill__input js-inputLinkedin" type="text" name="linkedin" id="linkedin"
                  placeholder="Ej: linkedin.com/in/sally.hill" />

                <label class="fill__label" for="github">GitHub</label>
                <input class="fill__input js-inputGitHub" type="text" name="github" id="github"
                  placeholder="Ej: github.com/sally-hill" />
              </section>
            </fieldset>
            <fieldset class="box share">
              <legend class="box__header js-legendShare">
                <div class="box__wrapper">
                  <i class="fas fa-share-alt box__icon"></i>
                  <h2 class="box__title">Comparte</h2>
                </div>
                <i class="fas fa-chevron-down box__arrow js-iconShare"></i>
              </legend>

              <section class="box__main share__section js-sectionShare hidden">
                <div class="share__main">
                  <button
                    class="js-shareBtn share__button share__button--disabled"
                    type="submit"
                    disabled
                  >
                    <i class="far fa-address-card"></i>Crear tarjeta
                  </button>
                </div>

                <div class="js-shareDone share__done hidden">
                  <p class="share__text">La tarjeta ha sido creada:</p>
                  <a class="js-shareLink share__link" href="#" target="_blank"
                  >Your URL will be placed here!</a
                  >
                  <a class="share__button share__button--twitter js-shareTwitter"
                  ><i class="fab fa-twitter"></i>Compartir en twitter</a
                  >
                </div>

                <div class="js-shareError share__done hidden">
                  <p class="share__error">ERROR, te faltan campos por rellenar</p>
                </div>
              </section>
            </fieldset>

          </div>
        </form>
      </section>
      <footer class="footer">
        <div class="footer__wrapper">
          <p class="footer__text">Team Undefined &copy; 2021</p>
          <a class="footer__link" href="https://adalab.es/" target="_blank" title="Adalab"><img class="footer__img" src="./assets/images/logo-adalab.png" alt="Logo Adalab"/></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
