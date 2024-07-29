import React,{useState,useEffect} from "react";

const Login = () => {

  const[user,setUser]=useState();
  useEffect(()=>{
    const str = localStorage.getItem("userDetail");
const parsedObj = JSON.parse(str);
if(parsedObj?.name){
  setUser(parsedObj);
}
  },[]);
  return (
    <div className="tab-pane fade show active" 
    id="login-tab-pane" role="tabpanel" 
    aria-labelledby="login-tab"
    tabindex="0"
    >
    <div className="auth-form">
    {
      user ? "":(
        <>
        <div className="mb-3 form-group">
        <i className="iconsax" data-icon="mail"></i>
        <label for="emailid" className="form-label">
        Email ID
        </label>
        <input type="email" placeholder="Enter your mail id"
        className="form-control" 
        id="emailid"/>
        </div>
        <div className="mb-2 form-group">
        <i className="iconsax" data-icon="lock-2"></i>
        <label for="password" className="form-label">
        Password
        </label>
        <input type="email" placeholder="Enter your password"
        className="form-control" 
        id="password"/>
        </div>
        </>
      )
    }
      <a 
      href={user ?"/chat":""}
      data-cursor="pointer" 
      className="btn-solid w-100 text-center mt-3">
      {user?"Start Chatting":"Login me in"}
      </a>
      {
      user ? (
      ""
      ):(
      <h4 className="text-title text-center mt-2">
      Dom't have an account?<a data-cursor="pointer">
      Sign up
      </a>
      </h4>
      )
      }
    
    </div>
    
    </div>
  );
};

export default Login