import { useEffect, useState } from "react";
import "./Navbar.style.css";

const Navbar = () => {
  console.log("navbar");

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
  const [navbarBackGround, setNavbarBackGround] = useState("");

  document.addEventListener("scroll", () => {
    window.scrollY > 100
      ? setNavbarBackGround("navbarScrollBackground")
      : setNavbarBackGround("");

    setDropdown({ dropdown: "", dropdownIcon: "fa-solid fa-bars" });
  });

  // Close the dropdown menu when click the document except navbar
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.clientY > 60) {
        setDropdown({ dropdown: "", dropdownIcon: "fa-solid fa-bars" });
      }
    });
  }, []);

  return (
    <header className={`${navbarBackGround}`}>
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
