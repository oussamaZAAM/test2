"use client";

import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer';
 
export const metadata: Metadata = {
  title: 'Welcome to AleeConseil',
  description: 'Homepage',
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 bg-ac-gray w-full">
      {/* Navbar  */}
      <Navbar />

      {/* Hero  */}

      {/* Nos Services */}

      {/* Contact Us */}

      {/* Footer  */}
      <Footer />
    </div>
    )
}
