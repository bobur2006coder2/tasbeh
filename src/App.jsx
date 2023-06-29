import React from 'react'
import { useState } from 'react'
import img from "./components/unnamed.png"

export default function App() {
  const [num,count]=useState(0)
  
  function myfunc() {
    let sp=document.querySelector("span")
    
    if (num===100) {
      count("Alloh qo'llasin")
      
    }else if(num=="Alloh qo'llasin"){
      count(0) 

    }
  }


  return (
    <div >
      <center>
        
      <img src={img} alt="" className='img'/>
      <span className='btntwo'>{num}</span>
      <button className='btnthree' onClick={()=>{count(0)}}>restart</button>
      <button className='btnone' onClick={()=>{ count(num+1) || myfunc() }}>start</button>
      </center>
    </div>
  )
}
