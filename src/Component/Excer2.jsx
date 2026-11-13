import React, { useEffect, useImperativeHandle, useRef, useState } from "react"
import Withauth from "./Withauth";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const Excer2 = (props) =>{

  const {data,name} = props

    return (
        <>
          <h3>Excer Data - {name}</h3>
           {
              data && data.map((item,index) => {
                  return <div key={index}>{item.title}</div>
              })
           }
        </>
    )
}

export default Withauth(Excer2,apiUrl)