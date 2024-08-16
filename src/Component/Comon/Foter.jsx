import { faEnvelope, faIndustry, faLocationCrosshairs, faMagnet, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Foter = () => {
  return (
    <div className='bg-gray-200 mt-20'>
        <div className='flex justify-center items-center '>
      <img src="/images/taxilogo.png" className='flex justify-center items-center size-44'/>
      </div>
      <div className='flex mx-48 justify-evenly'>
        <div className='flex flex-col text-center w-1/3'>
            <p className='font-bold text-xl'>UseFull Links</p>
            <Link to = {'/'}>Home</Link>
            <Link to = {'/About'}>About</Link>
            <Link to = {'/Contact'}>Contact</Link>
        </div>
        <div className='flex flex-col text-center w-1/3 '>
            <p>Contact Us</p>
            <div className='pl-24'>
            <div className='flex gap-3 mt-3'>
                <FontAwesomeIcon icon={faEnvelope} className='text-green-500'/>
                <p>Info@anniecab.com</p>
            </div>
            <div className='flex gap-3 mt-3'>
                <FontAwesomeIcon icon={faPhone} className='text-green-500'/>
                <p>+91 9510203204
                </p>
            </div>
            <div className='flex gap-3 mt-3'>
                <FontAwesomeIcon icon={faPhone} className='text-green-500'/>
                <p>+91 7778885892</p>
            </div>
          <div className='flex gap-6 text-green-500 ml-5 mt-5'>
          <FontAwesomeIcon icon={faMessage} />
          <FontAwesomeIcon icon={faIndustry} />
          <FontAwesomeIcon icon={faMagnet} />
          </div>
            </div>
          <div className='mt-5'>
            <p className='font-semibold text-sm'>Term And Condition | Privacy Policy</p>
            <p className='text-sm'>Allright reserve</p>
          </div>
        </div>
        <div className='w-1/3'>
            <p className='font-bold text-xl'>Address</p>
            <div className='flex gap-4'>
                <FontAwesomeIcon icon={faLocationCrosshairs}/>
                <p>406 Akshat Tower, Nr. Pakwan Hotel, Opp. Rajpath Club, Sarkhej - Gandhinagar Highway, Ahmedabad - 380054</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Foter
