import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {

    return (
        <div className='border border-slate-300 shadow flex-1 mb-2 overflow-hidden bg-slate-50
         md:sticky md:self-start lg:col-span-4 xl:col-span-6 md:overflow-hidden lg:overflow-hidden '>
            <div className='site-content bg-white overflow-hidden lg:overflow-hidden' data-testid='site-content'>
                <section className='pt-8 overflow-hidden sm:pt-12
                    lg:relative lg:py-48 '>
                    {/* first div here */}
                    <div className='max-w-md px-4 mx-auto sm:max-w-3xl
                        sm:px-6xl lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2
                        lg:gap-24'>
                        <div>
                            <div className='flex items-center space-x-2'>

                                <img className="w-auto h-8" src="https://storage.googleapis.com/mixo-files/logos/writeAi-1678693376842.svg" alt="WriteAI logo"></img>
                                <p className="font-sans font-bold text-gray-900 text-2xl">WriteAI</p>
                            </div>
                            {/* another */}
                            <div className='mt-14'>

                                <div className='mt-6 sm:max-w-xl'>
                                    <h1 className='text-4xl font-black tracking-tight text-gray-900 sm:text-6xl md:text-7xl'>
                                        Elevate Your writing
                                        <span className='text-primary'>.</span>
                                    </h1>

                                    <h2 className='mt-6 text-lg text-gray-500 sm:text-xl'>
                                        Use our AI-powered writing assistant to enhance your writing and productivity.
                                    </h2>
                                </div>
                                {/*  */}
                                <div className='mt-10 space-y-4'>
                                    <form className='grid gap-2 grid-cols-1 sm:w-full sm:flex sm:items-center sm:flex-wrap mt-4 sm:max-w-lg'>
                                        {/* <label htmlFor="hero-email" className='sr-only'>Email Address</label>
                                        <input type={'email'} className='block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500
                                             border-gray-300 rounded-md shadow-md border-opacity-100 focus:ring-primary focus-visible:ring-primary flex-1'
                                            required placeholder='Enter your email...'></input> */}

                                        <div className='flex items-center justify-center md:w-screen md:flex md:justify-center md:items-center lg:w-screen lg:flex lg:items-center lg:justify-center '>
                                            <Link to={'/register'}>
                                                <button className="bg-purple-600 hover:bg-purple-700
                                             text-white font-semibold py-2 px-4
                                              w-48
                                             border border-purple-600  rounded-full shadow-md">
                                                    Start now
                                                </button>
                                            </Link>

                                        </div>
                                    </form>
                                </div>
                                {/*  */}
                                <div className='mt-6'>
                                    <div className='inline-flex items-center'>
                                        <img src="https://storage.googleapis.com/mixo-files/public/img/avatars/female-15.png" alt="Gloria King" className="object-cover inline-block mr-3 border-2 border-primary rounded-full sm:mr-2 h-14 w-14"></img>

                                        <div>
                                            <p className='sm:pl-2.5 text-base font-black tracking-tight text-gray-800 sm:text-lg'>
                                                “I've never been more productive as a writer. WriteAI has completely transformed my writing process.”
                                            </p>
                                            <p className='sm:pl-2.5 text-sm sm:text-base font-bold text-gray-500'>Ian Otieno</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                        </div>

                    </div>
                    {/* second div starts here */}
                    <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>

                        <div className='py-12 sm:relative sm:mt-12 sm:py-6 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
                            <div className='hidden sm:block'>
                                <div className='absolute inset-y-0 w-screen left-1/2 bg-gray rounded-l-3xl lg:left-80 lg:right-0  lg:w-full'>
                                    <svg className='absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0' width={'404'} height={'392'} fill={'none'} viewBox={'0 0 404 392'}></svg>
                                </div>
                            </div>
                            <div className='relative pl-4 -mr:20 sm:-mr-32 md:-mr-16 sm:mx-auto sm:mx-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:flex lg:items-center xl:pl-12'>
                                <img className="w-full rounded-l-3xl lg:w-auto 2xl:h-full 2xl:max-w-none" src="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?crop=entro…YXJjaHw4fHx3cml0aW5nfGVufDB8MHx8fDE2Nzg2ODMxNjk&ixlib=rb-4.0.3&q=80&w=1080" alt="WriteAI"></img>
                            </div>
                        </div>
                    </div>
                    {/* second div starts here */}
                </section>


                {/* second section goes here */}
                <section className='relative pt-16 pb-32 overflow-hidden bg-white space-y24' sortorder='1'>
                    {/* first div */}
                    <div>
                        <div className='lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24'>

                            <div className='max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 lg:col-start-2 lg:mx-0 lg:px-0'>

                                <div >
                                    <h2 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                                        Improve your writing
                                        <span className='text-primary'>.</span>
                                    </h2>
                                    <p className='mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl'>
                                        WriteAI provides suggestions for grammar,
                                        syntax, and style to help you improve your writing.
                                        Our app's intelligent algorithms give you personalized
                                        suggestions
                                        to make your writing more effective and engaging.
                                    </p>
                                </div>

                                <div>
                                    {/* no content here */}
                                </div>
                            </div>

                            <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
                                <div className="lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center pr-4 -sm:ml-48 sm:pr-6 md:-ml-16">
                                    <img className="w-full lg:right-0 rounded-r-xl" src="https://images.unsplash.com/photo-1580584126903-c17d41830450?crop=entro…JTIwaW50ZWxsaWdlbmNlfGVufDB8MHx8fDE2Nzg1Mjk0MDE&ixlib=rb-4.0.3&q=80&w=1080"
                                        alt="Improve your writing">
                                    </img> {/*check on the image tag correct format*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second div */}
                    <div>
                        <div className='lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24'>
                            <div className='max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 lg:mx-auto lg:max-w-3xl xl:pl-12 2xl:pl-20'>
                                <div>
                                    <h2 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                                        Save time and increase productivity
                                        <span className="text-primary">.</span>
                                    </h2>
                                    <p className='mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl'>
                                        WriteAI saves you time by providing easy to access and use functionalities that you use regulary
                                        allowing you to spend time on what ideas to work on and not how to bring them to life.WriteAI is here to make you even
                                        more productive as you do your work
                                    </p>
                                </div>
                                <div>
                                    {/* no content here */}
                                </div>
                            </div>

                            <div className='mt-12 sm:mt-16 lg:mt-0'>
                                <div className="lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center pl-4 lg:-mr-48 sm:-mr-6 sm:pl-6 md:-mr-16">
                                    <img className="w-full rounded-l-xl lg:left-0" src="https://images.unsplash.com/photo-1496942299866-9e7ab403e614?crop=entro…JTIwaW50ZWxsaWdlbmNlfGVufDB8MHx8fDE2Nzg1Mjk0MDE&ixlib=rb-4.0.3&q=80&w=1080" alt="Save time and increase productivity">
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third div */}

                    <div>
                        <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
                            <div className="max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 lg:col-start-2 lg:mx-0 lg:px-0">
                                <div>
                                    <h2 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                                        Access your work from anywhere
                                        <span className="text-primary">.</span>
                                    </h2>
                                    <p className='mt-4 text-lg leading-relaxed text-gray-500 sm:text-xl'>
                                        Our React-based app is cloud-based,
                                        meaning you can access your writing projects from anywhere
                                        , at any time. Whether you're working from home, on-the-go, or at a coffee shop,
                                        WriteAI lets you take your work with you.
                                    </p>
                                </div>
                                <div>
                                    {/* no content here */}
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center pr-4 -sm:ml-48 sm:pr-6 md:-ml-16">
                                    <img className="w-full lg:right-0 rounded-r-xl"
                                        src="https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?crop=entro…JTIwaW50ZWxsaWdlbmNlfGVufDB8MHx8fDE2Nzg1Mjk0MDE&ixlib=rb-4.0.3&q=80&w=1080"
                                        alt="Access your work from anywhere">
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                </section>


                <section className="py-12 overflow-hidden bg-dark1 bg-opacity-80 md:py-20"
                    id="v2msmhrtk2" sortorder="2" sectioncomponent="Testimonials"
                    site-name="WriteAI" site-id="unknown" site-logo-url="https://storage.googleapis.com/mixo-files/logos/writeAi-1678611099875.svg">

                    <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <svg className="absolute transform top-full right-full translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2 rotate-3" width="404" height="404" fill="none"
                            viewBox="0 0 404 404" role="img" aria-labelledby="svg-squares"></svg> {/*might comment this */}
                        <div className="relative">
                            <blockquote>
                                <div className="max-w-3xl mx-auto text-xl font-bold leading-7 
                        text-center text-black md:leading-10 md:text-3xl 
                        text-shadow-sm">
                                    <p > "As someone who struggles with grammar,
                                        WriteAI has been a gamechanger.
                                        It's like having a personal editor on-call 24/7."</p>
                                </div>
                                <footer className="mt-8">
                                    <div className="md:flex md:items-center md:justify-center">
                                        <div className="md:flex-shrink-0">
                                            <img src="https://storage.googleapis.com/mixo-files/public/img/avatars/male-5.png" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" alt="Testimonial"></img>
                                        </div>
                                        <div className="mt-3 text-center md:mt-0 md:ml-3 md:flex md:items-center text-shadow-sm">
                                            <div className="text-lg font-medium text-gray-500">Lloyd Murago</div>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </section>


                <section className="relative py-12 sm:py-20 md:py-24 lg:py-32" id="lt94cx89gh" sortorder="4"
                    sectioncomponent="Cta" site-name="WriteAI" site-logo-url="https://storage.googleapis.com/mixo-files/logos/writeAi-1678611099875.svg"
                    data-v-79ccdc36>

                    <div aria-hidden="true" className="block" data-v-79ccdc36>
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl mb-12" data-v-79ccdc36></div>
                        <svg className="absolute -ml-3 top-8 left-1/2" width="404" height="392" fill="none" viewBox="0 0 404 392" data-v-79ccdc36>
                            {/*data for svg here */}
                        </svg>
                    </div>

                    <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8" data-v-79ccdc36>
                        <div className="relative px-6 py-10 overflow-hidden bg-white border-primary border-2 shadow-xl rounded-2xl sm:px-12 sm:py-20" data-v-79ccdc36>
                            <div className="relative" data-v-79ccdc36>
                                <div className="flex flex-wrap justify-center w-full mx-auto sm:max-w-3xl px-6" data-v-79ccdc36>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="User ben" className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" data-v-79ccdc36></img>
                                    {/* add more images here */}
                                </div>

                                <div className="mt-6 sm:mt-12 sm:text-center" data-v-79ccdc36>
                                    <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:leading-tight md:max-w-4xl md:mx-auto text-center" data-v-79ccdc36>
                                        Elevate your writing with WriteAI now
                                    </h2>
                                    <span className="text-primary" data-v-79ccdc36>.</span>
                                </div>

                                <div className="mt-6 sm:mt-12 sm:mx-auto sm:max-w-lg flex flex-col items-center" data-v-79ccdc36>
                                    {/* no content here */}
                                </div>

                                <form className="grid gap-2 grid-cols-1 sm:w-full sm:flex sm:items-center sm:flex-wrap mt-6 sm:mt-12 sm:mx-auto sm:max-w-lg" client:load data-v-79ccdc36>
                                    {/* <label htmlFor="cta-email" className="sr-only">Email address</label>
                                    <input id="cta-email" type="email" className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border 
                                    border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1" required placeholder="Enter your email..."></input> */}

                                    <div className='flex items-center justify-center md:w-screen md:flex md:justify-center md:items-center lg:w-screen lg:flex lg:items-center lg:justify-center '>
                                        <Link to={'/login'}>
                                            <button className="bg-purple-600 hover:bg-purple-700
                                             text-white font-semibold py-2 px-4
                                              w-48
                                             border border-purple-600  rounded-full shadow-md">
                                                Start now
                                            </button>
                                        </Link>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )
}

export default LandingPage