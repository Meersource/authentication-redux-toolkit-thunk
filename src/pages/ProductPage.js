import React from 'react'
import { useRef, useState } from "react";
import Meal from '../components/Meal/Meal';




const ProductPage = () => {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const [product, setProduct] = useState([{
      title: '',
      description: ''
    }])
  
    const handleProduct = (event) => {
      event.preventDefault();
  
      const enteredTitle = titleRef.current.value
      const enteredDescription = descriptionRef.current.value
      setProduct((pre) => {
        return [...pre, { title: enteredTitle, description: enteredDescription }]
      })

    //   setProduct({
    //     title:'',
    //     description:''
    //   })
    }
  return (
    <section style={{ backgroundColor: "rgb(15,15,15)"}}>
      {/* <form onSubmit={handleProduct}>
        <h1>Products List</h1>
        <input type='text' ref={titleRef} placeholder="Enter Titile" /><br />
        <input type='textarea' ref={descriptionRef} placeholder="Enter Description" /><br />
        <input type='submit' />
      </form> */}


      {/* <div style={{ width: '80vw', background: "yellow", padding: '20px', margin: "20px auto" }}>
        {
          product?.map?.((p, index) => {
            return (
              <div style={{ display: " flex", justifyContent: "space-around", background: "#728FCE", color: "white", margin: "10px" }} key={index}>

                <p>{p?.title}</p>
                <p>{p?.description}</p>

              </div>
            )
          })

        }

      </div> */}

<Meal/>
    </section>
  )
}

export default ProductPage