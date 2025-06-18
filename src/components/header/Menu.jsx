import React from "react";

// import { CiBaseball } from "react-icons/ci";
// import { CiCoins1 } from "react-icons/ci";
// import { CiBoxes } from "react-icons/ci";
// import { CiBullhorn } from "react-icons/ci";
// import { CiCoffeeCup } from "react-icons/ci";
// import { CiDumbbell } from "react-icons/ci";
// import { CiFries } from "react-icons/ci";
// import { CiMoneyBill } from "react-icons/ci";

// import { AiFillGithub } from "react-icons/ai";
// import { AiOutlineCodepen } from "react-icons/ai";
// import { AiFillYoutube } from "react-icons/ai";
// import { AiOutlineInstagram } from "react-icons/ai";



import { headerMenus, searchKeyword } from "../../data/header";
import { Link, useLocation } from "react-router-dom";



const Menu = () => {

    const location = useLocation();


    return (
        <div className="header__menu">
            <ul className="menu">
                {headerMenus.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active':''}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="keyword">
                {searchKeyword.map((keyword,key) => (
                    <li key={key} className={location.pathname === keyword.src ? 'active':''}>
                        <Link to={keyword.src}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu