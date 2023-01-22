import React from 'react'
import phone from '../icons/phone.svg'
import envelope from '../icons/envelope.svg'
import geoalt from '../icons/geo-alt.svg'
function Contact() {
  return (
    <>
      <div className='d-flex justify-content-evenly  flex-md-row flex-column p-4 w-100'>
        <div className="shadow-lg w-100 d-flex align-self-center my-md-0 my-3 mx-md-3 mx-0 py-3">
          <img src={phone} alt="" width={"40px"} />
          <div className='d-flex flex-column ms-3'>
            <p className="poppins m-0">Phone</p>
            <p className="poppins m-0">+92 3347552159</p>
          </div>
        </div>
        <div className="shadow-lg w-100 d-flex align-self-center my-md-0 my-3 mx-md-3 mx-0 py-3">
          <img src={envelope} className='ms-2' alt="" width={"40px"} />
          <div className='d-flex flex-column ms-3'>
            <p className="poppins m-0">Email</p>
            <p className="poppins m-0">mokshprithiani@gmail.com</p>
          </div>
        </div>
        <div className="shadow-lg w-100 d-flex align-self-center my-md-0 my-3 mx-md-3 mx-0 py-3">
          <img src={geoalt} alt="" width={"40px"} />
          <div className='d-flex flex-column ms-3'>
            <p className="poppins m-0">Location</p>
            <p className="poppins m-0">Parsa Citi Karachi</p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className="w-50 border shadow-lg rounded position-relative" style={{top:"50px"}}>
          <h1 className="pacifico text-center">Get in touch</h1>
          <div className="d-flex flex-md-row flex-column  justify-content-evenly px-5 py-3 mt-5">
            <input type="text" className='form-control me-md-3 mx-0 my-md-0 my-3 poppins' value={"Name"} />
            <input type="text" className='form-control mx-md-3 mx-0 my-md-0 my-3 poppins' value={"Email"} />
            <input type="text" className='form-control ms-md-3 mx-0 my-md-0 my-3 poppins' value={"Phone"} />
          </div>
          <div className='mt-3 px-5 pb-4'>
          <label for="floatingTextarea" className='poppins'>Message</label>
            <textarea class="form-control poppins" placeholder="Leave a message here" id="floatingTextarea" rows={"6"}></textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact