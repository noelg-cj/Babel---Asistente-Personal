import React, {useState} from 'react'
import robot from "../../assets/robot.png"
import logo from "../../assets/Logo.png"
import graphic from "../../assets/Graphic.svg"
import { Link } from 'react-router-dom'

const buttonTexts = [
    "Get Started",
    "Empezar",
    "Commencer",
    "Legen Sie los",
    "Inizia",
    "Começar",
    "Начать",
]

const Landing = () => {
    const [buttonText, setButtonText] = useState('Get Started');

    const handleMouseEnter = () => {
        setButtonText(buttonTexts[Math.floor(Math.random() * buttonTexts.length)]);
    }
  return (
    <div className='relative overflow-hidden font-satoshi w-screen h-screen bg-gradient-to-br from-[#CEBAA0] to-[#D6D0C8]'>
        <div className='flex items-center justify-end w-screen px-8'>
            <img src={logo} alt="logo" className='w-[50px] absolute left-1/2 -translate-x-1/2 mt-6' />
            <Link to={"/login"} className='font-semibold text-center border bg-black text-white hover:bg-transparent hover:text-black transition border-black w-[200px] py-3 rounded-full mt-6'>Login</Link>
        </div>
        <div className='px-16'>
            <h1 className='font-revelia text-[9rem] leading-none pt-7'>LANAUAGE-FREE <br /> PERSONAL ASSISTANT</h1>
            <p className='w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique, debitis totam minima eum animi possimus sint, libero, provident excepturi voluptatibus error quod obcaecati quibusdam unde hic. Itaque, iste incidunt.</p>
            <button onMouseEnter={handleMouseEnter} className='font-semibold border hover:bg-black hover:text-white transition border-black w-[250px] py-3 rounded-full mt-6'>{buttonText} &gt;</button>
            <p className='text-[480px] pointer-events-none absolute bottom-0 left-0 text-nowrap text-transparent translate-y-[70%] font-revelia stroke-white stroke-2'
                style={{ WebkitTextStroke: '1px #000' }}
            >BABEL BABEL BABEL</p>
            <img src={robot} alt="robot" className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[550px]' />
            <img src={graphic} alt="graphic" className='absolute bottom-1/2 translate-y-1/2 right-10 h-[450px]' />
            <h4 className='font-revelia text-7xl absolute right-16 bottom-28'>04</h4>
        </div>
    </div>
  )
}

export default Landing