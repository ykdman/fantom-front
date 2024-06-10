import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";
import SearchIcon from "../assets/search_MainNavigation.svg";

function MainNavigation() {
  return (
    <header className="flex justify-around items-center">
      <section>
        <Link to="/">
          <div>
            <img src={Logo} alt="fantom-logo" />
          </div>
          <div>
            <h1>Fantom</h1>
          </div>
        </Link>
      </section>

      <section>
        <div>
          <img src={SearchIcon} alt="searchIcon" />
        </div>
        <input type="text" placeholder="Search..." />
      </section>
      <section>
        <div className="w-[40px] h-[40px] bg-[#ff7f50] rounded"></div>
      </section>
    </header>
  );
}

export default MainNavigation;
