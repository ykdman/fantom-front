import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";
import SearchIcon from "../assets/search_MainNavigation.svg";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function toggleSearchHandler() {
    setIsSearchOpen((prevState) => !prevState);
  }

  return (
    <header className={classes.header}>
      <section className={classes.logo}>
        <Link to="/">
          <div className={classes.logo_image}>
            <img src={Logo} alt="fantom-logo" />
          </div>
          <div className={classes.logo_text}>
            <h1>Fantom</h1>
          </div>
        </Link>
      </section>

      <section className={classes.search}>
        <div
          className={`${classes.search_icon} ${
            isSearchOpen ? classes.open : ""
          }`}
          onClick={toggleSearchHandler}
        >
          <img src={SearchIcon} alt="searchIcon" />
        </div>
        <input
          type="text"
          className={`${classes.search_input} ${
            isSearchOpen ? classes.open : ""
          }`}
          placeholder="Search..."
        />
      </section>
      <section className={classes.user}>
        <div className={classes.user_picture}></div>
      </section>
    </header>
  );
}

export default MainNavigation;
