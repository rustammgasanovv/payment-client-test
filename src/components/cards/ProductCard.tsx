'use client';

import axios from 'axios';

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
}

export const ProductCard = ({ title, price, description }: ProductCardProps) => {
  const handlePay = async () => {
    const orderId = `ORD-${Date.now()}`;

    const res = await axios.post('https://payment-server-test-production-43f9.up.railway.app/payment/initiate', {
      orderId,
      amount: price,
    });

    const { data, signature } = res.data;

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://epoint.az/api/1/checkout';

    const dataInput = document.createElement('input');
    dataInput.name = 'data';
    dataInput.value = data;
    form.appendChild(dataInput);

    const sigInput = document.createElement('input');
    sigInput.name = 'signature';
    sigInput.value = signature;
    form.appendChild(sigInput);

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
      <p className="mb-3 font-normal text-gray-700">{description}</p>
      <p className="mb-4 text-xl font-semibold">{price} AZN</p>
      <button
        onClick={handlePay}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Купить
      </button>
    </div>
  );
};
