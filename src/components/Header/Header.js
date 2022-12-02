//import logo from "../../styles/logo/logo.svg";
//import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__logo-container">
          {/* <Link to={`/`}> */}
            
            {/* <img className="header__logo" src={logo} alt="InStock Logo" /> */}
          {/* </Link> */}
        </div>
        <div className="header__buttons-container">
          <div className="header__button-wrapper">
            {/* <Link to={`warehouses`}> */}
              <button className="header__button" type="button" name="utton">
                click here 1
              </button>
            {/* </Link> */}
          </div>
          <div className="header__button-wrapper">
            {/* <Link to={`inventory`}> */}
              <button className="header__button" type="button" name="button">
                click here 1
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
