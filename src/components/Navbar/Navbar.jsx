import React from 'react'
import Img1 from '../../assets/Frame 2 1.png'

function Navbar() {
  return (
    <div className="container py-3">
      <div className="row align-items-center">
        <div className="col-lg-3 ">
          <img src={Img1} alt="" className='image-hover' />
        </div>
        <div className="col-lg-9">
          <ul className='d-flex justify-content-end  gap-4 fw-bold'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar