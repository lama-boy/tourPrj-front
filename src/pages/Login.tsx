import axios from "axios";
import { useState } from "react";
import logo from '../assets/img/logo.png';

const Login = () => {
  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');

  const loginClick = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 form 제출 방지
    const fd = new FormData();
    fd.append('user_id', userId);
    fd.append('password', userPw);

    axios.post('http://localhost:8080/login.do', fd).then(response => {
      console.log('response here');
      console.log(response, response.data);
    }).catch(error => {
      console.log('axios error');
      console.log(error);
    });
  };

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleUserPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPw(e.target.value);
  };

  return (
    <>
        <main className="form-signin w-100 m-auto border rounded-4 bg-white">
          <form onSubmit={loginClick} className="text-center">
            <img src={logo} alt="Logo" height="40" />
            <h1 className="h3 fw-normal text-secondary my-4 fs-7">도시의 불빛 속에서, 자연의 품에서,<br/>당신만의 여행을 시작해 보세요.</h1>

            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={userId}
                onChange={handleUserIdChange}
              />
            </div>
            <div className="">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={userPw}
                onChange={handleUserPwChange}
              />
            </div>

            {/* <div className="form-check text-start my-3 d-flex align-items-center">
              <input className="form-check-input me-1" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label pt-1" htmlFor="flexCheckDefault">
                아이디 저장
              </label>
            </div> */}
            <div className="d-flex justify-content-between mt-2 pt-1 mb-4 fs-7">
              <a href="/">아이디/비밀번호 찾기</a>
              <a href="/">회원가입</a>
            </div>
            <button className="btn btn-main w-100 py-2" type="submit">로그인</button>
          </form>
        </main>
        {/*
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <div>id : </div>
              <input value={userId} onChange={handleUserIdChange} />
            </div>
            <div style={{ display: "flex", marginTop: "1em" }}>
              <div>pw : </div>
              <input type="password" value={userPw} onChange={handleUserPwChange} />
            </div>
          </div>
        </div>
        <button onClick={loginClick}>로그인</button> */}
    </>
  );
};

export default Login;