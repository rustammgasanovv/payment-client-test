'use client'

import React from 'react'

export default function Success() {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-green-50">
        <h1 className="text-4xl font-bold text-green-700">Оплата прошла успешно!</h1>
        <p className="mt-4 text-gray-700">Спасибо за покупку.</p>
      </div>
    );
  }
  
