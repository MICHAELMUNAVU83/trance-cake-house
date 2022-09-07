
import React  from 'react';
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function About() {
  const notify=()=>{
    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
 
 
  return (
    <div>
      <button onClick={notify}>notify</button>
      <ToastContainer/>
    
    </div>
   
  )
}

export default About

