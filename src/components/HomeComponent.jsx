import React from 'react'

function HomeComponent() {
  return (
    <div className=' px-4 flex flex-col items-center justify-center h-screen text-white w-full'>
            <h1 className='text-black text-3xl mb-10'>WRITE AI</h1>
            <div className=' text-center  my-2 flex flex-wrap text-gray-600 md:text-2xl md:px-10 lg:text-2xl lg:px-10 '>leverage the power of AI to make your writting 
            process productive and more fun
            </div>
            <div className='flex flex-col space-y-3 '>
                <p className='infoText'>grammar correction</p>
                <p className='infoText'>Text lengthening</p>
                <p className='infoText'>Paragraph summarization</p>
                <p className='infoText'>Text shortening</p>
            </div>
        </div>
  )
}

export default HomeComponent