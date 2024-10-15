import axios from "axios";
import { useState } from "react";

const Page2 = ()=>{
    
    const menuClick = () => {
        console.log('menuClick');
        axios.get('http://192.168.0.93:8080/getMenus').then(response => {
            
            
            if(response.status == 200){
                console.log(response.data.menus);


            }else{
                alert('error');
            }
                

        }).catch(error => {
            console.log('error : ' + error);
        }); 
    };  



    return (
        <>
            <div>
                <h2>Im page2</h2>
            </div>
            <div>
            <button onClick={menuClick}>메뉴</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>depth</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>
        </>
    )
}



export default Page2;