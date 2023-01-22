import React, { useState } from 'react'
import laptop from '../icons/manwithlap.png'

function Signin() {
  // const history = useHistory();
  const [user, setUser] = useState({
   email: "", password: ""
  });
  let email, value;
  const handleInputs = (e) => {
    console.log(e);
    email = e.target.name;
    value = e.target.value;

    setUser({ ...user, [email]: value });
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
         email, password
      })
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Registeration");
      console.log("Invalid Registeration");
    } else {
      window.alert("Registeration");
      console.log("Registeration");

    }
  }
  return (
    <div className='d-flex justify-content-center'>
      <div className='bg-light shadow-lg row w-50'>
        <div className="col-12 pt-5">
          <h1 className='playfair text-center'>Sign In</h1>
        </div>
        <div class="col-lg-6 col-12 p-sm-5 p-3 my-3 d-flex flex-column justify-content-center">
          <label for="exampleFormControlInput1" class="form-label mb-0 poppins">Email address</label>
          <input type="email" class="form-control shadow-none mb-4" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={user.email} onChange={handleInputs} />
          <label for="exampleFormControlInput1" class="form-label mb-0 poppins">Password</label>
          <input type="password" class="form-control shadow-none" id="exampleFormControlInput1" placeholder="********" name='password' value={user.password} onChange={handleInputs} />
          <button className='btn btn-info' value='login' onClick={PostData}>Login</button>
        </div>
        <div className="col-lg-6 col-12 py-lg-5 d-none d-sm-block">
          <img src={laptop} width="300px" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Signin