import axios from "axios";
import { useState } from "react";

const Login = () => {
  const loginClick = () => {
    const fd = new FormData();
    fd.append('user_id',userId);
    fd.append('password',userPw);

    axios.post('http://localhost:8080/login.do',fd).then(response => {
      console.log('response here');
      console.log(response,response.data);
    }).catch(error => {
      console.log('axios error');
      console.log(error);
    })
  };

  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');

const handleUserIdChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
  setUserId(e.target.value);
  console.log(userId);
}

const handleUserPwChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
  setUserPw(e.target.value);
  console.log(userPw);
}

  return (
    <div>
      <h2>IM LOGIN</h2>
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
            <input value={userId} onChange={handleUserIdChange}/>
          </div>
          <div style={{ display: "flex", marginTop: "1em" }}>
            <div>pw : </div>
            <input type="password" value={userPw} onChange={handleUserPwChange}/>
          </div>
        </div>
      </div>
      <button onClick={loginClick}>로그인</button>
    </div>
  );
};

export default Login;
