import logo from "../../assets/logo/logo.svg";
// import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <svg className="header__top-icon">
            <path
              className="header__top-icon-inside"
              d="M7.5,9A4.5,4.5,0,1,0,3,4.5,4.5,4.5,0,0,0,7.5,9Zm0-7A2.5,2.5,0,1,1,5,4.5,2.5,2.5,0,0,1,7.5,2Z”></path>
        <path d=“M8,10.028s-0.254-.007-0.506-0.007S7,10.023,7,10.028c-7.033.283-7,3.558-7,6.972H15C15,13.586,14.985,10.312,8,10.028ZM8,15H2.056c0.2-1.946,1.077-2.815,5.024-2.974l0.1,0H7.494l0.326,0,0.1,0c3.928,0.16,4.819,1.03,5.022,2.974H8Z"
            ></path>
            <path
              className="header__top-icon-inside"
              d="M8,10.028s-0.254-.007-0.506-0.007S7,10.023,7,10.028c-7.033.283-7,3.558-7,6.972H15C15,13.586,14.985,10.312,8,10.028ZM8,15H2.056c0.2-1.946,1.077-2.815,5.024-2.974l0.1,0H7.494l0.326,0,0.1,0c3.928,0.16,4.819,1.03,5.022,2.974H8Z"
            ></path>
          </svg>
          <svg className="header__top-icon">
            <path
              className="header__top-icon-inside"
              d="M5.193,0C0.538,0,0,2.673,0,4.684a0.978,0.978,0,0,0,1.955,0c0-1.648.225-2.729,3.238-2.729,2.852,0,2.852,1.45,2.852,2.729a1.951,1.951,0,0,1-1.29,1.675l-0.216.083C4.8,7.108,3.809,7.531,3.809,8.472v3.5a0.978,0.978,0,1,0,1.955,0V8.887c0.4-.209,1.152-0.5,1.474-0.62l0.224-.085A3.831,3.831,0,0,0,10,4.684C10,3.526,10,0,5.193,0Z”></path>
        <path d=“M5.366,14.943H3.982a1.029,1.029,0,0,0,0,2.057H5.366A1.029,1.029,0,1,0,5.366,14.943Z"
            ></path>
            <path
              className="header__top-icon-inside"
              d="M5.366,14.943H3.982a1.029,1.029,0,0,0,0,2.057H5.366A1.029,1.029,0,1,0,5.366,14.943Z"
            ></path>
          </svg>
          <svg className="header__top-icon-three">
            <path
              className="header__top-icon-inside header__top-icon-three"
              d="M19.766,8.372L6.927,8.392l-2.093,3.337l12.818-0.004L19.766,8.372 M14.221,20.518c-0.151,0-7.604,0.016-8.114,0.016 c0.249-0.393,1.665-2.611,1.738-2.733c0.163,0,5.014,0,5.271,0l2.122-3.354L3.117,14.467l-2.114,3.342l2.827-0.005L0,23.874h16.151 c0.286-0.453,5.654-9.017,5.904-9.412c0.219,0.334,1.664,2.623,1.9,3.002c-0.363,0-1.682,0-1.682,0l-2.101,3.337 c0,0,0.009,0,0.029,0c0.428,0,5.719,0,5.875,0c0.085,0.135,1.827,2.876,1.921,3.023H32L22.038,8.127 C21.646,8.738,14.311,20.374,14.221,20.518"
            ></path>
          </svg>
        </div>
        <div className="header__bottom">
          {/* <div className="header__bottom-wrap"> */}
          {/* <Link to="/"> */}
          <div className="header__bottom-logo-container">
            <img className="header__bottom-logo-img" src={logo} alt=" Logo" />
          </div>
          {/* </Link> */}
          <div className="header__bottom-links">
            <div className="header__bottom-links-right">
              {/* <Link to={``}> */}
              <div className="header__bottom-link">Games</div>
              {/* </Link> */}
              {/* <Link to={``}> */}
              <div className="header__bottom-link">About</div>
              {/* </Link> */}
              {/* </Link> */} {/* <Link to={``}> */}
              <div className="header__bottom-link">More Experiences</div>
              {/* </Link> */}
              {/* </Link> */} {/* <Link to={``}> */}
              <div className="header__bottom-link">Commitments</div>
              {/* </Link> */}
              {/* </Link> */} {/* <Link to={``}> */}
              <div className="header__bottom-link">Resourses</div>
              {/* </Link> */}
            </div>
            {/* </div> */}
            {/* <Link to={`inventory`}> */}
            <button className="header__button" type="button" name="button">
              Download the EA App
            </button>
            {/* </Link> */}
          </div>
        </div>
      </header>
    </>
  );
}
