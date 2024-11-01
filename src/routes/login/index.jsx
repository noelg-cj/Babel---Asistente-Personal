import React from 'react'

const Login = () => {
  return (
    <div className='bg-[#060606] w-screen h-screen font-satoshi'>
        <h1 className='font-revelia text-[9rem] text-[#CEBAA0] text-center'>WELCOME BACK!</h1>
        <p className='text-[#DDD2D2] text-center text-xl -mt-7'>Lorem ipsum dolor sit amet consectetur. Non eget quis semper mattis <br /> adipiscing ultricies. Pellentesque dolor quis amet tellus massa. </p>
        <h6 className='text-white text-3xl text-center mt-8'>Let’s get you set back up!</h6>
        <form className='w-1/2 mx-auto flex items-center flex-col'>
            <blockquote className='mt-10'>
                <label htmlFor="email" className='text-[#DDD2D2] block'>Email</label>
                <input type="text" placeholder='cooluser@domain.com' className='block w-[400px] text-white p-3 bg-transparent border-b ' />
            </blockquote>
            <blockquote className='mt-5'>
                <label htmlFor="password" className='text-[#DDD2D2] block'>Password</label>
                <input type="password" placeholder='Your secret code' className='block w-[400px] text-white p-3 bg-transparent border-b ' />
            </blockquote>
            <button type='submit' className='mt-10 bg-[#CEBAA0] text-black font-semibold py-3 px-14 rounded-full hover:bg-black hover:text-white transition'>Login</button>
        </form>
    </div>
  )
}

export default Login