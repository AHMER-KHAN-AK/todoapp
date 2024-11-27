"use client"
import { useState } from "react";


export default function Home() {
  //define state
 const [ todos,setTodos] = useState([
  {movie:"predator" ,id:1},
  {movie:"avatar",id:2},
]) 
const[inputVal,setinput] = useState("");
const[id,setid] = useState(0);
//////functions
const additem = ()=>{
  let obj: any = todos.find((item) => item.id == id)
  if(obj){
    let newArray = todos.filter(item => item.id !== obj.id)
    setTodos([...newArray,{movie:inputVal,id:id}]) 
    setinput("");
    setid(0);
    return
  }



 setTodos([...todos,{movie:inputVal,id:id}])
 setinput("");
 setid(0);
 };
 const editItem = (id:any)=>{
  let obj: any = todos.find((item) => item.id ==id)
  setinput(obj.movie)
  setid(obj.id)
 }
 const delItem =(id:any)=>{
  
  let newArray = todos.filter(item => item.id !== id)
 
   setTodos([...newArray]) 
 }

    return(
    <div className="max-w-4xl  mx-auto p-4  ">
    <h1 className="text-center text-[40px] underline ">My First Todo App</h1>
    {/*start input div */}
    <div className="flex  justify-between gap-4 mt-5">
      <input 
      type="text"
      value={inputVal}
      onChange={(e)=>setinput(e.target.value)}
      className="w-[60%] p-2 ml-3 text-lg border-bottom focus:outline-none" placeholder="write movie name"/>

      <input
      type="number" 
      value={id}
      onChange={(e:any)=>setid(e.target.value)}
      className="w-[20%] p-2 ml-3 text-lg border-bottom focus:outline-none" 
      placeholder="write id name"/>
      <button onClick={additem} className="bg-blue-500 w[20%] text-white p-2 rounded hover:bg-slate-300">Add movie</button>
    </div>
     {/*End input div */}
    <h1 className="text-center text-[40px] underline mt-5">Movies List</h1>
    <div className="grid grid-cols-2 gap-5 mt-5">
      {/*grid items */}
      {
        todos.map((items:any,index:any)=>{
          return(
            <div className="shadow p-4  " key={index} >
        <div className="flex justify-between text-lg ">
          <span className="shadow rounded-full h-8 w-8  text-center my-auto ">
            {index+1}
            </span>
          <span onClick={()=>delItem(items.id)} className="shadow rounded-full h-8 w-8 text-center my-auto cursor-pointer text-red-600">X</span>
        </div>
        {/*data div */}
        <div className="mt-5 text-[30px] text-gray-500">{items.movie}</div>
        <div>
          <h2 onClick={()=>editItem(items.id)} className="text-right cursor-pointer">Edit</h2>
         
        </div>

      </div>
          )
        })
      }
      

      
    </div>

</div>

    
  )
}
