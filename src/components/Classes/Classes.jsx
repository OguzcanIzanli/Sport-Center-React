import { useState } from "react";
import "./Classes.style.css";
import data from "./classesData.json";

const Classes = () => {
  const [selected, setSelected] = useState("yoga");

  const handleButton = (e) => {
    e.preventDefault();
    setSelected(e.target.id);
  };

  return (
    <div id="classes">
      <div className="classesBackgroundClip"></div>
      <div className="container">
        <div className="sectionHeader">
          <h3>OUR CLASSES</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At harum
            minus rem doloremque tempore delectus.
          </p>
        </div>

        <div className="classesBtns">
          <a
            id="yoga"
            className={`classesBtn ${selected == "yoga" ? "selected" : ""}`}
            onClick={handleButton}
            href=""
          >
            Yoga
            <span className={`caret ${selected == "yoga" ? "" : "hidden"}`}>
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </a>
          <a
            id="group"
            className={`classesBtn ${selected == "group" ? "selected" : ""}`}
            onClick={handleButton}
            href=""
          >
            Group
            <span className={`caret ${selected == "group" ? "" : "hidden"}`}>
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </a>
          <a
            id="solo"
            className={`classesBtn ${selected == "solo" ? "selected" : ""}`}
            onClick={handleButton}
            href=""
          >
            Solo
            <span className={`caret ${selected == "solo" ? "" : "hidden"}`}>
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </a>
          <a
            id="stretching"
            className={`classesBtn ${
              selected == "stretching" ? "selected" : ""
            }`}
            onClick={handleButton}
            href=""
          >
            Stretching
            <span
              className={`caret ${selected == "stretching" ? "" : "hidden"}`}
            >
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </a>
        </div>

        <div id={data[selected].id} className="classes">
          <div className="information">
            <h4>{data[selected].firstQuestion}</h4>
            <p>{data[selected].information}</p>
            <h4>{data[selected].secondQuestion}</h4>
            <p>{data[selected].firstProgram}</p>
            <p>{data[selected].secondProgram}</p>
            <p>{data[selected].thirdrogram}</p>
          </div>
          <img src={data[selected].image} />
        </div>
      </div>
    </div>
  );
};

export default Classes;
