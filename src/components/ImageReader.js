import { useRef, useState } from "react";

const ImageReader = (props) => {
  const [fileSize, setFileSize] = useState(0);
  const [fileType, setFileType] = useState("desconocida");

  const fileElement = useRef();
  const fileReader = new FileReader();

  const handleFile = () => {
    const selectedFile = fileElement.current.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      setFileSize(selectedFile.size);
      setFileType(selectedFile.type);
      fileReader.readAsDataURL(selectedFile);
    }
  };
  const getImage = () => {
    props.handleImage(fileReader.result);
  };
  fileReader.addEventListener("load", getImage);

  return (
    <>
    <label
      className="fill__button js__profile-trigger"
      htmlFor="img-selector"
      type="button"
    >
      Añadir imagen
      <input
        ref={fileElement}
        type="file"
        name="image-reader"
        onChange={handleFile}
        className="fill__button"
      />{" "}
    </label>
     <div className="fill__image js__profile-preview">{fileReader.result}</div> </>
  );
};

export default ImageReader;
