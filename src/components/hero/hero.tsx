'use client';

import Image from 'next/image';
import image from '../../public/hero-image.jpg';

const Hero: React.FC = () => {

  return <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
            <Image
              src={image}
              alt="Vietnamese craftswomen working with green fishing nets"
              priority
              fill
              className="object-cover"
              sizes="100vw"
            />
        </section>
 
};
export default Hero;


