import { Badge } from '@mui/material';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section
      aria-label="hero section"
      className=" mt-8  w-full h-full md:mt-16"
    >
      <div className="relative md:mt-24 mx-auto w-full max-w-4xl pt-4 text-center">
        <h1 className="md:text-7xl my-4 font-extrabold text-4xl md:leading-tight">
          Your favorite content. All in one place
        </h1>
        <p className="mx-auto my-4 text-sm w-full max-w-xl text-center font-medium leading-relaxed tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et elit
          eget lectus finibus faucibus. Cras risus nunc, gravida ac blandit sed,
          iaculis in odio. Quisque hendrerit urna in luctus lobortis. Nunc
          interdum tristique tristique. Nunc at lectus in augue consectetur
          pellentesque vel et enim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas aliquam ac justo nec fermentum.
        </p>
        <div className="flex flex-row justify-center items-center space-x-4 my-8">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>

        <div className="absolute top-0 -z-10 max-h-full max-w-screen-lg w-full h-full blur-2xl">
          <div className="absolute top-24 left-24 w-56 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl"></div>
          <div className="absolute hidden md:block bottom-2 right-1/4 w-56 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
          <div className="absolute hidden md:block bottom-1/4 left-1/3 w-56 h-56 bg-pink-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-500 filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
