import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './pages/Login';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  axios.get('http://localhost:8080/getGichoBaseData', { 
  }).then(response => {
    console.log('connection success');
  }).catch(error => {
    console.log('error : ' + error);
  });
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
