import React from 'react'
import { MdMessage } from "react-icons/md";

function Button(props) {

  let {icon,text,outline,} = props
  return (
   <button className={`${outline?'btn btn-outline-dark w-100 fw-bold d-flex justify-content-center gap-4':'btn btn-dark justify-content-center text-white w-50 d-flex px-5 gap-4'}`}
  >
    {icon}
    {text}
   </button>
  )
}

export default Button