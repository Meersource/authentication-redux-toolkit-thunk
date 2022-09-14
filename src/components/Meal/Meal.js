import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Mealitem from "./Mealitem";
import './style.css';
import { FetchMeal, GetMealByName } from "../../store/slices/mealSlice";


const Meal = () => {
    const {meals, status, mealList} = useSelector((state) => state?.meal)
    console.log("mealList", mealList)
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const [randomMeal, setRandomMeal]= useState()

const dispatch = useDispatch()

    const searchMeal=(evt)=>{
        if(evt.key=="Enter")
        {
            dispatch(GetMealByName({search}))
            setSearch("")
            // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
        }
    }

    useEffect(()=>{ 
        dispatch(FetchMeal());
        // const getMeal = async() => {
        //     try {
        //         const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=p`)
        //         const data = await res.json()
        //         console.log("ffff",data)
        //         setRandomMeal(data.meals)
        //     } catch (error) {
        //         console.log(error)
        //     }
           
        // }
        // getMeal();
    },[])


    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                  
                    (mealList==null)? <p className="notSearch">Not found</p> : 
                    mealList.map((res)=>{
                             return(
                            <Mealitem data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>

                <div className="container">
                   {   
                 
                 meals?.map((res)=>{
                    // console.log("mlist", res)
                             return(
                            <Mealitem data={res}/>)} 
                    ) 
                   
                   }
                </div>


            </div>
        </>
    )
}
export default Meal;