import React from 'react'
import Card from './Card.jsx';
import React1, { useRef } from 'react';
function Foreground() {
  const ref=useRef(null);
  const data =[

{desc:"description",
  filesize:"8.5 mb", 
  close:true,
  tag:{isOPen:false,tagTitle: "Download Now",tagColor:"sky"}},
  {desc:"description",
  filesize:"1.5 mb", 
  close:true,
  tag:{isOPen:true,tagTitle: "Download Now",tagColor:"green"}},
  
  {desc:"description",
  filesize:"7.9 mb", 
  close:true,
  tag:{isOPen:true,tagTitle: "Upload New",tagColor:"sky", }
  },
{desc:"description",
  filesize:"5.6 mb", 
  close:true,
  tag:{isOPen:true,tagTitle: "Delete",tagColor:"sky"}}
  
  ]

  
  return (<>
    <div ref={ref} className='w-full p-10 fixed top-0 left-0 z-[3] h-full flex gap-10 '> 
  {data.map((item,index)=>(
 <Card data={item} reference={ref}/>  
  ))}
    </div>
   
    </> 
  )
}

export default Foreground