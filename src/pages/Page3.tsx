import axios from 'axios';
import { useState, useEffect } from 'react';

interface menuData {
    menu_seq : number;
    p_menu_seq : number;
    title : String;
    url  : String;
    auth_level : number;
    depth : number;
}

const Page3 = ()=>{
    const [menuDatas, setData] = useState<menuData[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/getMenus');
                let data :menuData[] = response.data.menus;
                setData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
        {menuDatas && menuDatas.map((item: menuData, index) => (
            <div key={index}>
                <p>메뉴 seq: {item.menu_seq}</p>
                <p>메뉴 이름: {item.title}</p>
                <p>부모 메뉴: {item.p_menu_seq}</p>
                <p>URL    :   {item.url}</p>
                <p>접근 권한: {item.auth_level}</p>
                <p>메뉴 이름: {item.depth}</p>
            </div>
        ))}
            
        </>
    )
}

export default Page3;