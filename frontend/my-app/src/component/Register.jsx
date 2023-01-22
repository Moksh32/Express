import React, { useState } from 'react'
import laptop from '../icons/manwithlap.png'

function Register() {
  // const history = useHistory();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value

    setUser({ ...user, [name]: value });
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registeration");
      console.log("Invalid Registeration");
    } else {
      window.alert("Registeration");
      console.log("Registeration");

    }
  }
  return (
    <>
      <div className='d-sm-flex d-block justify-content-evenly p-5 row w-100 m-0'>
        <h1 className='pacifico text-center'>Register</h1>
        <form className='col-sm-6 col-12 shadow-lg py-5 row m-0 d-flex align-self-center rounded'>
          <div class=" col-lg-6 col-12 m-0 px-3">
            <label for="exampleFormControlInput1" class="form-label mb-0 poppins">Name</label>
            <input type="text" class="form-control shadow-none mb-4" id="exampleFormControlInput1" placeholder="John Doe" name='name' value={user.name} onChange={handleInputs} />
            <label for="exampleFormControlInput1" class="form-label mb-0 poppins">Phone</label>
            <input type="Phone" class="form-control shadow-none mb-4" id="exampleFormControlInput1" placeholder="03347552159" name='phone' value={user.phone} onChange={handleInputs} />
            <label for="exampleFormControlInput1" class="form-label mb-0 poppins">Password</label>
            <input type="password" class="form-control shadow-none" id="exampleFormControlInput1" placeholder="********" name='password' value={user.password} onChange={handleInputs} />
          </div>
          <div class="col-lg-6 col-12 m-0 px-3">
            {/* <h1 className='text-start'>Register</h1> */}
            <label for="exampleFormControlInput1" class="form-label mb-0 poppins">Email address</label>
            <input type="email" class="form-control shadow-none mb-4" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={user.email} onChange={handleInputs} />
            <label for="exampleFormControlInput1" class="form-label mb-0 poppins">Work</label>
            <input type="text" class="form-control shadow-none mb-4" id="exampleFormControlInput1" placeholder="Web Developer or etc" name='work' value={user.work} onChange={handleInputs} />
            <label for="exampleFormControlInput1" class="form-label mb-0 poppins">Confirm Password</label>
            <input type="password" class="form-control shadow-none" id="exampleFormControlInput1" placeholder="********" name='cpassword' value={user.cpassword} onChange={handleInputs} />
          </div>
          <button className='btn btn-info rounded mt-4' value='register' onClick={PostData}>Register</button>
        </form>
        <div className="col-sm-6 col-12 mt-sm-0 mt-4 text-center">
          <img src={laptop} alt="" style={{ width: "390px" }} />
        </div>
      </div></>
  )
}

export default Register