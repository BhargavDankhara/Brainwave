import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className='tagline mb-6 text-center text-n-1/50'>HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</h5>
            <ul className='flex'>
                {companyLogos.map((logo, index) => (
                    <li className='flex items-center justify-center flex-1 h-[8.5rem]'>
                        <img src={logo} alt="logo" width={134} height={28} />
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default CompanyLogos