import './Nav.css'
import { useState } from "react";
import { FaBars, FaCross } from "react-icons/fa6";
import { HiOutlineLogin } from "react-icons/hi";
import { BsSignIntersectionFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import icon from "../../assets/images/icon/phnavic.png";
import { IoMdClose } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import Search from '../Search/Search';

const Nav = () => {

  const [toggle, setToggle] = useState(false);

  const menus = [
    {
      title: 'Home',
      link: '#home'
    },
    {
      title: 'Pictures',
      link: '#pictures'
    },
    {
      title: 'Category',
      link: '#category'
    },
    {
      title: 'Explore',
      link: '#explore'
    },
    {
      title: 'Uplode',
      link: '#uplode'
    },
  ]

  function showMenus() {
    setToggle(!toggle);
  }

  return (
    <section className="navContainer">
      <div className="navBlock_1">
        <div className="nav_icon">
          <img src={icon} alt="picsharbour"></img>
        </div>

        <div className="w-3/5 hidden md:flex">
         <Search />
        </div>


        <div className="navButtons">
          <div className="btnstyle login_btn">
            <span>Login</span>
            <span className="text-lg">
              <HiOutlineLogin />
            </span>
          </div>

          <div className="btnstyle join_btn">
            <span>Join</span>
            <span className="text-lg">
              <BsSignIntersectionFill />
            </span>
          </div>
        </div>
      </div>

      <div className="navBlock_2">
          <Search/>

        <div className={`text-xl flex lg:hidden justify-center items-center`} onClick={() => showMenus()} >
          { toggle ? <AiOutlineClose /> : <FaBars />}
        </div>
      </div>
      <nav className='hidden md:block'>
        <ul className="nav_menu">
          {
            menus.map((menu, index) => {
              return (
                <li className="nav_menu_items">
                  <a key={index} href={menu.link}>{menu.title}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
      {toggle ? <nav className="bgglass p-4">
        <ul className="nav_menu_mobile">
          {
            menus.map((menu, index) => {
              return (
                <li className="nav_menu_items">
                  <a key={index} href={menu.link}>{menu.title}</a>
                </li>
              )
            })
          }
        </ul>
      </nav> : <></>}
    </section>
  );
};

export default Nav;
