import React from 'react'

export default function ErrorPage() {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-red-50">
        <h1 className="text-4xl font-bold text-red-600">Произошла ошибка оплаты</h1>
        <p className="mt-4 text-gray-700">Пожалуйста, попробуйте еще раз или выберите другой способ оплаты.</p>
      </div>
    );
  }
  
