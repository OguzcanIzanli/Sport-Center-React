import { useState } from "react";
import "./Navbar.style.css";

const Navbar = () => {
  // Navbar Dropdown Menu Actions
  const [dropdownMenu, setDropdown] = useState({
    dropdown: "",
    dropdownIcon: "fa-solid fa-bars",
  });

  const dropdownBtn = () => {
    dropdownMenu.dropdown == ""
      ? setDropdown({
          dropdown: "navbarOpen",
          dropdownIcon: "fa-solid fa-xmark",
        })
      : setDropdown({ dropdown: "", dropdownIcon: "fa-solid fa-bars" });
  };

  // Navbar Page Scroll Event
  const [headerBackGround, setHeaderBackGround] = useState("");

  document.addEventListener("scroll", () => {
    window.scrollY > 100
      ? (header.style.backgroundColor = "#355592")
      : (header.style.backgroundColor = "");

    // navbarButtons.classList.remove("navbarOpen"); // Close the navbar when scrolling
    // navbarDropdownBtnIcon.classList = "fa-solid fa-bars";
  });

  //   // Smooth transition between sections on the page
  //   document.querySelectorAll('a[href^="#"]').forEach((navBtn) => {
  //     navBtn.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       let sectionId = this.getAttribute("href");

  //       navbarButtons.classList.remove("navbarOpen");
  //       navbarDropdownBtnIcon.classList = "fa-solid fa-bars";

  //       document.querySelector(`${sectionId}`).scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     });
  //   });

  //   const navbarDropdownBtn = document.querySelector(".navbarDropdownBtn"); // Navbar Dropdown Menu Button
  //   const navbarDropdownBtnIcon = document.querySelector(".navbarDropdownBtn i"); // Dropdown Menu Button Icon
  //   const navbarButtons = document.querySelector(".navbarBtns"); // Navbar Buttons
  //   const header = document.querySelector("header"); // Header

  //   // Close the dropdown menu when click the document except navbar
  //   document.addEventListener("click", (e) => {
  //     if (e.clientY > 60) {
  //       navbarButtons.classList.remove("navbarOpen");
  //       navbarDropdownBtnIcon.classList = "fa-solid fa-bars";
  //     }
  //   });

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <a href="#hero">
            <img src="./images/logo.png" alt="Logo" />
          </a>

          <div className={`navbarBtns ${dropdownMenu.dropdown}`}>
            <a href="#hero">Home</a>
            <a href="#classes">Classes</a>
            <a href="#trainers">Trainer</a>
            <a href="#purchase">Products</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a href="">JOIN US</a>
          </div>
          <div className="navbarDropdownBtn" onClick={dropdownBtn}>
            <i className={`${dropdownMenu.dropdownIcon}`}></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
