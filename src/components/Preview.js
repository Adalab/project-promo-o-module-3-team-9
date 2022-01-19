



const Preview = (props) => {
    return(
        <div className="cards__container">
        <button
          onClick={props.handlerReset}
          className="cards__button--reset js-resetBtn"
          type="reset"
        >
          <i className="far fa-trash-alt"></i>Reset
        </button>
        <article className="cards__article">
          <div className={`js-borderPalette cards__wrapper${props.clase}`}>
            <h1
              className={`cards__title js-cardName cards__title${props.clase}`}
            >
              {props.name || "Nombre Apellidos"}
            </h1>
            <h2 className="cards__subtitle js-cardOccupation">
              {props.job || "Front End Developer"}
            </h2>
          </div>
          <div className="cards__image js__profile-image"></div>
          <ul className="cards__contact">
            <li className="cards__item">
              <a
                className={`cards__link cards__link--phone js-phonePreview js-linksIcons cards__link${props.clase}`}
                title="Teléfono"
                href={`tel:${props.phone}`}
              >
                <i className="fas fa-mobile-alt"></i>
              </a>
            </li>
            <li className="cards__item">
              <a
                className={`cards__link cards__link--email js-previewEmail js-linksIcons cards__link${props.clase}`}
                title="Email"
                href={`mailto:${props.email}`}
              >
                <i className="far fa-envelope"></i>
              </a>
            </li>
            <li className="cards__item">
              <a
                className={`cards__link cards__link--linkedin js-cardLinkedin js-linksIcons cards__link${props.clase}`}
                href={`https://www.linkedin.com/in/${props.linkedin}`}
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="cards__item">
              <a
                className={`cards__link cards__link--github js-cardGitHub js-linksIcons cards__link${props.clase}`}
                title="GitHub"
                href={`https://github.com/${props.github}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </li>
          </ul>
        </article>
      </div>
    )
};

export default Preview;