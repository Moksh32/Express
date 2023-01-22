import React from 'react'
import '../App.css'
import logo from "../logo.png";

function About() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>

                <form method="post" className='w-50 h-50 shadow-lg d-flex justify-content-evenly border-bottom p-5 mt-3'>
                    <div className='d-flex flex-column p-3'>
                        <img src={logo} className="" alt="" width={"150px"} />
                        <p className='poppins'>Youtube</p>
                        <p className='poppins'>Mern Development</p>
                        <p className='poppins'>Contact me</p>
                        <p className='poppins'>Messi</p>
                    </div>
                    <div>
                        <p className='poppins m-0'>Rana Moksh Kumar</p>
                        <p className="poppins text-info">Web Developer</p>
                        <p className="poppins">Ranking 1/10</p>
                        <br />
                        <div className='d-flex flex-column'>
                            <h5 className=''><span className='text-decoration-underline text-dark poppins'>About</span> &nbsp;  &nbsp; <span className='text-info poppins'>Timeline</span></h5>
                            <p className='playfair'>User id</p>
                            <p className="playfair">Name</p>
                            <p className="playfair">Email</p>
                            <p className="playfair">Phone</p>
                            <p className="playfair">Profession</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between flex-column'>
                        <button className="btn btn-dark">Edit Profile</button>
                        <div>
                            <p className='poppins'>User id</p>
                            <p className="poppins">Name</p>
                            <p className="poppins">Email</p>
                            <p className="poppins">Phone</p>
                            <p className="poppins">Profession</p>
                        </div>

                    </div></form>
            </div>


        </>

    )
}

export default About