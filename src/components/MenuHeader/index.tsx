import React from 'react'
import Logo from "../../images/logo.png";

const MenuHeader = () => {
  return (
    <div className='tw-py-1 tw-px-3 tw-bg-yellow-500 tw-w-full tw-flex tw-justify-between tw-items-center'>
        <div>
        <img src={Logo} className="tw-w-24 " alt="" />
        </div>
        <div>a</div>
    </div>
  )
}

export default MenuHeader