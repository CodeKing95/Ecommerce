import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#",
    },
    {
        title: "Contact",
        link: "/#",
    },
    {
        title: "Blog",
        link: "/#",
    },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'> 
    <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
            {/* company details */}
        <div className='py-8 px-4'>
            <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">Tech Stars</a>
            <p className='text-gray-600 lg:pr-24 pt-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam vitae qui consectetur numquam et.
            </p>
            <p className='text-gray-500'>
                Developed by Sunny @ 2025.
            </p>
        </div>
        {/* Footer link */}
        <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
                <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                <ul className='spce-y-3'>
                    {FooterLinks.map((data, index) => (
                                <li key={index}>
                                <a
                                href={data.link}
                                className='text-gray-600 hover:text-blue-400 duration-300'>
                                    {data.title}</a>
                                </li>
                            ))}
                </ul>
            </div>
            {/* second col link */}
             <div className='py-8 px-4'>
                <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                <ul className='spce-y-3'>
                    {FooterLinks.map((data, index) => (
                                <li key={index}>
                                <a
                                href={data.link}
                                className='text-gray-600 hover:text-blue-400 duration-300'>
                                    {data.title}</a>
                                </li>
                            ))}
                </ul>
            </div>
        
        {/* Company Address */}
        <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
            <div>
                <div className='flex items-center gap-3'>
                    <FaLocationArrow />
                    <p>Sunny, London</p> 
                </div>
                <div className='flex items-center gap-3 mt-6'>
                    <FaMobileAlt />
                    <p>+0123456789</p>
                </div>

                {/* Social Links */}
                <div className='flex items-center gap-3 mt-6'>
                    <a href="#">
                        <FaInstagram className='text-3xl 
                        hover:text-primary duration-300'/>
                    </a>
                    <a href="#">
                        <FaFacebook className='text-3xl 
                        hover:text-primary duration-300'/>
                    </a>
                    <a href="#">
                        <FaLinkedin className='text-3xl 
                        hover:text-primary duration-300'/>
                    </a>
                </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;