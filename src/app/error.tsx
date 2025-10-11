'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='screen center col gap-8'>
      <h2>Not Found</h2>
      <p className='text-2xl'>Could not find requested resource :(</p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="secondary" onClick={reset}>
          Try again
        </Button>
        <Button variant="primary" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
