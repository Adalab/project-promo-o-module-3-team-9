import "../styles/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import ls from "../services/localStorage";

function App() {
  const [clase, setClase] = useState("--palette1");
  const [desingArrow, setDesingArrow] = useState(false);
  const [formArrow, setFormArrow] = useState(true);
  const [shareArrow, setShareArrow] = useState(true);
  const [formClass, setFormClass] = useState(true);
  const [shareClass, setShareClass] = useState(true);
  const [desingClass, setDesingClass] = useState(false);

  const [data, setData] = useState(ls.get("data",  {
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "",
    palette: "1",
  }));

  useEffect(() => {
    ls.get("data", data);
    ls.set("data", data);
  }, [data]);

  const handleCollapsable = (ev) => {
    let selection = ev.currentTarget.id;
    if (selection === "desing") {
      setDesingArrow(!desingArrow);
      setDesingClass(!desingClass);
      setShareClass(true);
      setShareArrow(true);
      setFormClass(true);
      setFormArrow(true);
    } else if (selection === "form") {
      setFormClass(!formClass);
      setFormArrow(!formArrow);
      setDesingClass(true);
      setDesingArrow(true);
      setShareClass(true);
      setShareArrow(true);
    } else if (selection === "share") {
      setShareClass(!shareClass);
      setShareArrow(!shareArrow);
      setFormClass(true);
      setFormArrow(true);
      setDesingClass(true);
      setDesingArrow(true);
    }
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
    setClase("--palette1");
  };

  return (
    <div className='App'>
      <Header />

      <Form
        handlerSubmit={handlerSubmit}
        handlerReset={handlerReset}
        clase={clase}
        name={data.name}
        job={data.job}
        phone={data.phone}
        email={data.email}
        linkedin={data.linkedin}
        github={data.github}
        handleCollapsable={handleCollapsable}
        desingArrow={desingArrow}
        desingClass={desingClass}
        handleInput={handleInput}
        handlePalette={handlePalette}
        palette={data.palette}
        formClass={formClass}
        formArrow={formArrow}
        shareArrow={shareArrow}
        shareClass={shareClass}
      />

      <Footer />
    </div>
  );
}

export default App;
