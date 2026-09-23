import React, { useState } from 'react'
import NoteCard from './components/NoteCard';
import axios from 'axios'
import { useEffect } from 'react';
const App = () => {
  const [formvalues,setformvalues]=useState({
    title:"",
    description:"",
  });
  const [allNotes,setallNotes]=useState([]);
  const handlechange=(e)=>{
      setformvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }))};
      const handleSubmit=async (e)=>{
        e.preventDefault();
        let res=await axios.post('http://localhost:3000/notes/create',formvalues);
        console.log(res.data);
      
        setformvalues({
      title: "",
      description: "",
    });
   
  };

     let getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      // console.log(res);
      setallNotes(res.data.data);
    } catch (error) {
      console.log("error in get all notes api", error);
    }

      }
      useEffect(()=>{
        getAllNotes()},[]);

        const deleteNote=async(id)=>{
          try {
            let res =await axios.delete(`http://localhost:3000/notes/${id}`);
            console.log(res);
            getAllNotes();
          } catch (error) {
            console.log("errror in deleted button",error);
            
          }
        }
      
        
  return (
    <div className='flex flex-col gap-5 '>
      <form onSubmit={handleSubmit} className="w-70 border gap-5 border-black p-4 rounded-xl flex  flex-col">
        <input  className="p-2 outline-none text-xl rounded border border-black"  type='text' placeholder='title' name='title'
        onChange={
          handlechange}
          value={formvalues.title}
          />

            <input  className="p-2 outline-none text-xl rounded border border-black" type='text' placeholder='description' name='description'
        onChange={
          handlechange}
          value={formvalues.description}
          minLength={20}
          required
          />
         <button className='border border-black text-xl bg-blue-600 text-white'type="submit">Submit</button>  
      </form>
      <div className="flex gap-4 flex-wrap">
        {allNotes.map((val) => (
          <NoteCard
            key={val._id}
            note={val}
            deleteNote={deleteNote}
           
          />
        ))}
      </div>

    </div>
  )
}



export default App;