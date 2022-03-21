import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{ 

      }}>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        <Link to={"/"}> <button className="Home">Home</button> </Link>
        <Link to={"/section/mystry"}> <button className="Mystry">Mystery</button> </Link>
        <Link to={"/section/technology"}> <button className="Technology">Technology</button> </Link>
        <Link to={"/section/mythology"}> <button className="Mythology">Mythology</button> </Link>
        <Link to={"/section/history"}> <button className="History">History</button> </Link>
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
