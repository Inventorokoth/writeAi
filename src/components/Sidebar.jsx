import { Link } from 'react-router-dom';
import { AiOutlineFileText } from 'react-icons/Ai';
import { BsTextParagraph, BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/Bs';
import { BiCodeAlt } from 'react-icons/Bi';
import { MdTitle } from 'react-icons/Md';
import { BiHome } from 'react-icons/Bi';

import React from 'react'

function Sidebar() {
  return (
    <div className='flex flex-col h-full'>
       
    </div>
  )
}

export default Sidebar

const SidebarIcons=({icon,PopupText})=>{

    return(
        <div className='group text-white hover:text-zinc-50 cursor-pointer'>
            {icon}
            <span className='group-hover:scale-100'>
            {PopupText}
            </span>
        </div>
    )
}//add the styles for the sidebar icons and the text in the index.css