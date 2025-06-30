// import React from 'react'

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

// const Header = () => {
//     return (
//         <header id='header' role='banner'>
//             <h1 className='header__logo'>
//                 <a href='/'>
//                     <em aria-hidden='true'></em>
//                     <span>webs<br />youtube</span>
//                 </a>
//             </h1>

//             <nav className='header__menu'>
//                 <ul className='menu'>
//                     <li className='active'>
//                         <a href='/'>
//                             <CiBaseball /> 웹스토리보이
//                         </a>
//                     </li>
//                     <li>
//                         <a href='/today'>
//                             <CiMoneyBill /> 추천 영상
//                         </a>
//                     </li>
//                     <li>
//                         <a href='/developer'>
//                             <CiCoins1 /> 추천 개발자
//                         </a>
//                     </li>
//                     <li>
//                         <a href='/webd'>
//                             <CiBoxes /> 웹디자인기능사
//                         </a>
//                     </li>
//                     <li>
//                         <a href='/website'>
//                             <CiBullhorn /> 웹표준 사이트
//                         </a>
//                     </li>
//                     <li>
//                         <a href='/gsap'>
//                             <CiCoffeeCup /> GSAP Parallax
//                         </a>
//                     </li>
//                     <li>
//                         <a href='/port'>
//                             <CiDumbbell /> 포트폴리오 사이트
//                         </a>
//                     </li>
//                     <li>
//                         <a href='/youtube'>
//                             <CiFries /> 유튜브 클론 사이트
//                         </a>
//                     </li>
//                 </ul>
//                 <ul className='keyword'>
//                     <li>
//                         <a href='/search/webstoryboy'>webstoryboy</a>
//                     </li>
//                     <li>
//                         <a href='/search/html'>HTML</a>
//                     </li>
//                     <li>
//                         <a href='/search/css'>CSS</a>
//                     </li>
//                     <li>
//                         <a href='/search/javascript'>JavaScript</a>
//                     </li>
//                     <li>
//                         <a href='/search/react.js'>React.js</a>
//                     </li>
//                     <li>
//                         <a href='/search/vue.js'>Vue.js</a>
//                     </li>
//                     <li>
//                         <a href='/search/next.js'>Next.js</a>
//                     </li>
//                     <li>
//                         <a href='/search/node.js'>Node.js</a>
//                     </li>
//                     <li>
//                         <a href='/search/sql'>SQL</a>
//                     </li>
//                     <li>
//                         <a href='/search/React Portfolio'>portfolio</a>
//                     </li>
//                     <li>
//                         <a href='/search/NewJeans'>music</a>
//                     </li>
//                 </ul>
//             </nav>
            
//             <div className='header__sns'>
//                 <ul>
//                     <li>
//                         <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
//                             <AiFillGithub />
//                         </a>
//                     </li>
//                     <li>
//                         <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
//                             <AiFillYoutube />
//                         </a>
//                     </li>
//                     <li>
//                         <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
//                             <AiOutlineCodepen />
//                         </a>
//                     </li>
//                     <li>
//                         <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
//                             <AiOutlineInstagram />
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </header>
//     )
// }

// export default Header









import React from 'react'

import { headerMenus, searchKeyword, snsLink } from "../../data/header";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();


    return (
        <header id="header" role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em></em>
                    <span>webs</span>
                </a>
            </h1>
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
                <ul>
                    {searchKeyword.map((keyword, key) => (
                        <li key={key} className={location.pathname === keyword.src ? 'active':''}>
                            <Link to={keyword.src}>
                                {keyword.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='header__sns'>
                <ul>
                    {snsLink.map((sns,key) => (
                        <li key={key}>
                            <a href={sns.url} target='_blank' rel='noopener noreferrer' aria-label={sns.title}>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}



export default Header