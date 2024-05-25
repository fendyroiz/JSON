import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <section style={{ minHeight: '20vh', display: 'flex', flexDirection: 'column' }}>
      <div className='bg-[#ff85a1] p-4 text-white flex flex-col flex-grow'>

        <div className='flex flex-col items-center'>
          <div className='flex items-center space-x-2'>
            <p className='text-white font-bold'></p>
          </div>

          <div className='flex items-center mt-3'>
            <p className='text-white font-bold m-3'>PARA MÁS INFORMACIÓN</p>
            <p className='text-white'>Síguenos: </p>

            <div className='flex'>
              <FacebookIcon className='text-white hover:text-sky-600' />
              <InstagramIcon className='text-white hover:text-pink-500' />
              <TwitterIcon className='text-white hover:text-blue-200' />
            </div>

            <div className='flex m-3'>
              <WhatsAppIcon className='text-white hover:text-green-300' /> 646-239-68-07
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
