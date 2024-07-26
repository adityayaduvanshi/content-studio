import HeroSection from '@/components/sections/hero-section';
import { Button } from '@/components/ui/button';
import Badge from '@mui/material/Badge';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" h-full">
      <HeroSection />
      {/* <main className="container mx-auto h-full"></main> */}
    </main>
  );
}
