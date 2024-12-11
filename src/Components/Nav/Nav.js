import "../../css/Style.css";
import "../../css/Nav.css";
import { FaBars } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { BsSignIntersectionFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
// import pink from '../../images/pink.png'
// import icon from "../../images/ph-des2.png";
import icon from "../../images/phfull (2).png";

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const Nav = () => {
  return (
    <section className="section nav-sec">
      <div className="icon">
        <img src={icon}></img>
      </div>
      <ul className="nav-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#picture">Pictures</a>
        </li>
        <li>
          <a href="#category">Category</a>
        </li>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#">Uplode</a>
        </li>
      </ul>

      <span className="bar">
        <FaBars />
      </span>

      <span className="search-sec">
        {/* <span><CiSearch /></span> */}
        <input type="text" placeholder="search" className="search"></input>
        <span>
          <FiSearch />
        </span>
      </span>

      <span className="user">
        <FaRegCircleUser />
      </span>
      <div className="user-block">
        <span className="login design">
          <span>Login</span>
          <span className="login-icon">
            <HiOutlineLogin />
          </span>
        </span>

        <span className="signin design">
          <span>Join</span>
          <span className="sign-icon">
            <BsSignIntersectionFill />
          </span>
        </span>
      </div>
    </section>
  );
  // return(
  //     <div className='pink'>
  //         <img src={pink} alt='img'></img>
  //     </div>
  // )
};

export default Nav;
