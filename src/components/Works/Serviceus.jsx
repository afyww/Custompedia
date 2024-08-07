import React from 'react';
import eleganImage from '../../assets/new image/people-working-elegant-cozy-office-space 1.jpg';

function Serviceus() {
    return (
        <div className="relative bg-black min-h-screen flex items-center justify-center">
            <img 
                src={eleganImage} 
                alt="Custompedia Team" 
                className="w-full h-full object-cover opacity-50 absolute inset-0" 
            />
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8 lg:p-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 mb-4 sm:mb-6">OUR WORK</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
                    While many marketing agencies specialize in certain parts of the process, such as branding, analytics, or advertising, CUSTOMPEDIA offers a full range of digital services. This is a tremendous advantage of our partners. Housing all these functions under one roof fosters cross-functional collaboration and cost efficiency, giving you the opportunity to view your entire digital strategy in full picture.
                </p>
            </div>
        </div>
    )
}

export default Serviceus