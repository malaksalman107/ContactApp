import React, { useState } from 'react'
import Button from '../Button/Button'
import { MdMessage,MdCall,MdEmail} from "react-icons/md";
import img2 from '../../assets/Service 24_7-pana 1.svg'

function ContactForm() {
  let [detial,setDetial] = useState([{
    name:'salman',
    email:'salman@gmail.com',
    text:'I m React Developer'
  }])
  
  let [name,setName] = useState('')
  let [email,setEmail] = useState('')
  let [text,setText] = useState('')

  let handlesubmit = (e)=>{
    e.preventDefault()
    setDetial(
      [
      ...detial,
      {
      name,
      email,
      text,
    }
  ])
  }

  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
        <div className="d-flex gap-3">
          <Button 
          text={'VIA SUPPORT CHAT'} 
          icon={<MdMessage fontSize="24px"/>}
          
          />
          <Button
           text={'VIA CALL'}
           icon={<MdCall  fontSize="24px"/>}
          />
        </div>
        <div className="form-container my-4">
        <Button 
           outline={true}
           text={'VIA EMAIL FORM'}
           icon={<MdEmail   fontSize="24px"/>}
          />
        </div>
         <form className=' d-flex flex-column gap-4'onSubmit={(e) => handlesubmit(e)} >
          <div className="position-relative">
          <label htmlFor="name" className='fw-bold inner-label'>Name</label>
          <input className='w-100 p-2' type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="position-relative">
          <label htmlFor="Email" className='fw-bold inner-label'>Email</label>
          <input className='w-100 p-2' type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="position-relative">
          <label  className='fw-bold inner-label'>Text</label>
          <textarea className='w-100 p-2' rows='10' type="text" value={text} onChange={(e)=>setText(e.target.value)}>  </textarea>
          </div>
          <Button text={'Submit'}/>
         </form>
        </div>
        <div className="col-lg-6">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
            {detial.map(item => <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.text}</td>
            </tr> )}
           
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactForm