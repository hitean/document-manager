import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "motion/react"
function Card({data,reference}) {

  const bgColorClass = data.tag.tagColor === "sky" ? "bg-sky-200" : "bg-green-900";
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.3}} dragTransition={{bounceStiffness:100,bounceDamping:23}} className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
     
      <FaRegFileAlt />
  
      <p className='text-sm leading-tight mt-10 font-semibold'>
       {data.desc}
      </p>

      <div className='footer absolute bottom-0 w-full    px-8 left-0'>
        <div className='flex items-center justify-between py-3 mb-5'>
          <h5 className='p-2'>{data.filesize}</h5>
          <span className='w-5 h-5 bg-sky-200 text-zinc-900 rounded-full flex items-center justify-center'>
           {data.close ?  <LuDownload size=".8em" /> :<IoIosCloseCircleOutline  /> }
           
          </span>
        </div>
        {data.tag.isOPen && (
<div className={`tag absolute p-2 bottom-0 left-0 ${bgColorClass} w-full  h-10`}>
            <h4 className={`text-center font-semibold  text-${data.tag.tagColor== "green" ? "white":"zinc"}-900 `}>{data.tag.tagTitle}</h4>
          </div>)}
     
      </div>  
    </motion.div>
  );
}

export default Card;
