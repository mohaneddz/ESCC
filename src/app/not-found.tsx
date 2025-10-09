"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='screen center col gap-8'>
      <h2>Not Found</h2>
      <p className='text-2xl'>Could not find requested resource :(</p>

    <Button variant="primary">  
        <Link href="/">Return Home</Link>
    </Button>

    </div>
  );
}
