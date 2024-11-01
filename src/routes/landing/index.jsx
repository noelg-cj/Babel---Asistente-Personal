import React, {useState} from 'react'
import robot from "../../assets/robot.png"

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
    <div className='relative overflow-hidden font-satoshi w-screen h-screen px-16 bg-gradient-to-br from-[#CEBAA0] to-[#D6D0C8]'>
        <h1 className='font-revelia text-[9rem] leading-none pt-10'>YOUR ULTIMATE AI <br /> PERSONAL ASSISTANT</h1>
        <p className='w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique, debitis totam minima eum animi possimus sint, libero, provident excepturi voluptatibus error quod obcaecati quibusdam unde hic. Itaque, iste incidunt.</p>
        <button onMouseEnter={handleMouseEnter} className='font-semibold border hover:bg-black hover:text-white transition border-black w-[250px] py-3 rounded-full mt-6'>{buttonText} &gt;</button>
        <p className='text-[480px] pointer-events-none absolute bottom-0 left-0 text-nowrap text-transparent translate-y-[60%] font-revelia stroke-white stroke-2'
            style={{ WebkitTextStroke: '1px #000' }}
        >BABEL BABEL BABEL</p>
        <img src={robot} alt="robot" className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[550px]' />
    </div>
  )
}

export default Landing