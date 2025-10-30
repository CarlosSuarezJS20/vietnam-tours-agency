'use client';

import Image from 'next/image';
import image from '../../public/hero-image.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[96vh] min-w-[500px]">
      <Image
        src={image}
        alt="Vietnamese craftswomen working with green fishing nets"
        priority
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-xl font-semibold drop-shadow">Coming soon</div>
      </div>
    </section>
  );
};

export default Hero;


