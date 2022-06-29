import React, { useState } from 'react';
import './style.css';

import Menu from '../menuApi';
import  Menucard  from './Menucard';
import Navbar from './Navbar';
const uniqueList = [
  "All",
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  
];

export const Dhabaa = () => {
  const [Menudata,setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return <>
  <Navbar filterItem={filterItem} menuList={menuList} />
  <Menucard Menudata = {Menudata}/>
  </>;
};
