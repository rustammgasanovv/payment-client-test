'use client'
import React from 'react';
import { ProductCard } from '@/components/cards/ProductCard';

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProductCard
        title="Наушники XYZ"
        description="Беспроводные наушники с шумоподавлением"
        price={1.99}
      />
    </main>
  );
}
