import { ChangeEvent, useRef, useState } from "react";
import "./ProflieImage.scss";

const ProflieImage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>();

  const handleSelectImage = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    setImage(e.target.files?.[0]);
  };

  return (
    <div onClick={handleSelectImage} className="profileImg">
      
      {image ? (
        <img
          width="30"
          height="30"
          src={URL.createObjectURL(image)}
          alt="add-image"
          className="avatar"
        />
      ) : (
        ""
      )}


    <div className="imgWraps">
    <img
        src="https://img.icons8.com/ios-glyphs/30/camera--v1.png"
        alt="camera--v1"
        className="add"
      />
    </div>
    

      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProflieImage;
