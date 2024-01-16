import React from 'react'
import Logo from "../../assets/logo/trello.png"
import DarkModeSwitcher from '../../components/darkModeSwitcher'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className=' fixed top-0 left-0 min-h-[54px] max-h-[54px] w-full flex justify-between gap-[8px] border-b-[1px] border-[#32383D] z-30 shadow-md bg-[#1D2125]'>
            <div className='flex items-center min-w-[50%] min-h-full gap-[20px]'>
                <Link to={"/"}>
                    <div>
                        <img className=' ml-[15px] max-w-[90px]'  src={Logo} alt="Logo_img" />
                    </div>
                </Link>

                <button className="bg-[#05699D] hover:bg-[#05689dd5] text-white font-[600] text-[15px] py-1 px-4 rounded">
                    Criar
                </button>
            </div>
            <div className='flex items-center min-h-full gap-[20px]'>
                <DarkModeSwitcher></DarkModeSwitcher>
                <div className='w-[35px] h-[35px] mr-[15px] rounded-full bg-[#A8B5C4]'></div>
            </div>
        </div>
    </>
  )
}

export default Header