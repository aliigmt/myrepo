import React,{useContext, useEffect} from 'react'
import noteContext from '../Contex/notes/noteContext'
const Abouts = () => {
 const a = useContext(noteContext);
 useEffect(()=>{
  a.update(); 
  // eslint-disable-next-line 
 },[])
  return (
    <div>
       This is  {a.state.name} and {a.state.class}
    </div>
  )
}

export default Abouts
