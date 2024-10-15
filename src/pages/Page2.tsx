import axios from "axios";
import { useState } from "react";

const Page2 = ()=>{
    return (
    <div>
        <h2>Im page2</h2>
    </div>
    )
}

const Menus = () => {
    
    const menuClick = () => {
        axios.get('http://192.168.0.93:8080/test123').then(response => {
            const menus = response.data;
            console.log(menus);
      });
      return (
        <div>
            <button onClick={menuClick}>메뉴console log</button>
        </div>
    )};
}

export default Page2;