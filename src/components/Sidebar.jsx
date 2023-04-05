import { Link } from 'react-router-dom';
import { AiOutlineFileText } from 'react-icons/Ai';
import { BsTextParagraph, BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/Bs';
import { BiCodeAlt } from 'react-icons/Bi';
import { MdTitle } from 'react-icons/Md';
import { BiHome } from 'react-icons/Bi';
import React from 'react'
import { useAuth } from '../contexts/AuthContext';

function Sidebar() {

  const { Currentuser } = useAuth();
  const userName=Currentuser.username
  const profile_pic=Currentuser.profileUrl //check these currentuser.username and currentuser.profile url 

  return (

    <div className='flex  flex-col  w-1/6  h-screen py-4 bg-gray-800 md:flex md:h-screen'> {/*later on check on the percentages of these widths so on md: the width is a bit smaller and the outlet also changes on md: so it covers for the shrinking of the sidebar */}
      <div className='m m-6 py-4 space-y-4 ml-0'>

        <Link to={'grammar-correction'} >
          <SidebarIcon icon={<AiOutlineFileText />} PopupText='Grammar Correction' />
        </Link>
        <Link to={'paragraph-summarization'} >
          <SidebarIcon icon={<BsTextParagraph />} PopupText='Paragraph Summarization' />
        </Link>
        <Link to={'code-explanation'} >
          <SidebarIcon icon={<BiCodeAlt />} PopupText='Code Explanation' />
        </Link>
        <Link to={'title-generation'} >
          <SidebarIcon icon={<MdTitle />} PopupText='Title Generation' />
        </Link>
        <Link to={'text-shortening'}>
          <SidebarIcon icon={<BsArrowsAngleContract />} PopupText='Text Shortening' />
        </Link>
        <Link to={'text-lengthening'}>
          <SidebarIcon icon={<BsArrowsAngleExpand />} PopupText='Text Lengthening' />
        </Link>
        <Link to={'/'}>
          <SidebarIcon icon={<BiHome />} PopupText='home' />
        </Link> {/*check the to url to make sure it redirects to the home page ie /writeAI or any appropriate */}

      </div>

      <div className='absolute bottom-0 w-1/6 md:w-1/6  flex justify-center  py-5 lg:flex lg:justify-center'>
        <div className=' border rounded-full w-10 h-10 cursor-pointer lg:flex lg:justify-center'>
          <img src='/src/assets/img.png' /> {/*this image is just for test,replace the src with the profile url from the currently signed in user */}
        </div>
        {/* this div is for the image of the signed in user so that if clicked it logs out the user */}
      </div>

    </div>


  )
}

export default Sidebar

const SidebarIcon = ({ icon, PopupText }) => {

  return (
    <div className='SidebarIcon group text-white hover:text-zinc-50 cursor-pointer'>
      {icon}
      <span className='sidebarTooltip group-hover:scale-100 '> {/*here check for the tooltip coz it does not show on top, check maybe z-index */}
        {PopupText}
      </span>
    </div>
  )
}//add the styles for the sidebar icons and the text in the index.css