import React,{useState,} from "react";

const SignUp = () => {
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    passwordConfirm:"",
  });
  const handleFormFieldChange = (fieldName,e)=>{
    setUser({...user,[fieldName]:e.target.value});
  };
  const createAccount=(e)=>{
    e.preventDefault();
    if(user.name || user.email || user.password || user.passwordConfirm){
      const jsonObj = JSON.stringify(user);
      localStorage.setItem("userDetail",jsonObj)
      window.location.reload();
    }
  };

  return (
    <div className="tab-pane fade" 
    id="signup-tab-pane" role="tabpanel" 
    aria-labelledby="signup-tab"
    tabindex="0"
    >
    <div className="auth-form">
    
        <div className="mb-3 form-group">
        <i className="iconsax" data-icon="mail"></i>
        <label for="name" className="form-label">
        Name
        </label>
        <input type="name" placeholder="Enter your name"
        onChange={(e)=>handleFormFieldChange("name",e)}
        className="form-control" 
        id="name"/>
        </div>
        <div className="mb-3 form-group">
        <i className="iconsax" data-icon="lock-2"></i>
        <label for="emailid" className="form-label">
        Email ID
        </label>
        <input type="email" placeholder="Enter your password"
        className="form-control" 
        onChange={(e)=>handleFormFieldChange("email",e)}
        id="emailid"/>
        </div>
        <div className="mb-3 form-group">
        <i className="iconsax" data-icon="lock-2"></i>
        <label for="password" className="form-label">
        Password
        </label>
        <input type="password" placeholder="Enter your password"
        className="form-control" 
        onChange={(e)=>handleFormFieldChange("password",e)}
        id="password"/>
        </div>
        <div className="mb-3 form-group">
        <i className="iconsax" data-icon="lock-2"></i>
        <label for="password1" className="form-label">
        Confirm Password
        </label>
        <input type="password" placeholder="Enter your Confirm Password"
        className="form-control" 
        onChange={(e)=>handleFormFieldChange("passwordConfirm",e)}
        id="password1"/>
        </div>

    
      <a data-cursor="pointer" 
      className="btn-solid w-100 
      text-center mt-4" 
      onClick={(e)=>createAccount(e)}
      >
      SignUp
      </a>

     
      <h4 className="text-title text-center mt-2">
      Already have an account
      <a data-cursor="pointer">Sign in </a>
      </h4>
    
    </div>
    </div>
  );
};

export default SignUp;