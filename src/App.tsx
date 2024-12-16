import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import './styles/App.css';
import './styles/main.scss'

import Login from './pages/Login';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';


function App() {

  const [token, setToken] = useState<string | null>(null);

  // Axios 인스턴스 생성
  const api = axios.create({
    baseURL: 'http://localhost:8085', // API 서버 주소
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);

    api.interceptors.request.use(config => {
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    });
  }, [token]);

  const loginChk = ()=>{
    console.log(token);
    if (token) {
      // User is logged in, redirect or show specific content
      console.log('User is logged in');
      // Example: Redirect to a protected page
      // useNavigate().push('/protected-page');
    } else {
      // User is not logged in, redirect to login page
      console.log('User is not logged in');
      // Example: Redirect to login page
      // useNavigate().push('/login');
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
  }
  /*
  axios.get('http://localhost:8080/getGichoBaseData', { 
  }).then(response => {
    console.log('connection success');
  }).catch(error => {
    console.log('error : ' + error);
  });
  */
  return (
    <BrowserRouter>
    <div className="App">
        <nav className="black-nav">
          <h2 className='logo'>react test</h2>
          <div className='links'>
            <Link className='navLinks' to="/login">로그인</Link>
            <Link className='navLinks' to="/page1">프로젝트</Link>
            <Link className='navLinks' to="/page2">학원</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/page1" element={<Page2 />} />
          <Route path="/page2" element={<Page3 />} />
          <Route path="/page3" element={<Page4 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
