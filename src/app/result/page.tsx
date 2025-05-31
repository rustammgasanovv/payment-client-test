// pages/result.tsx

'use client';

import { useEffect, useState, Suspense } from 'react'; // Импортируем Suspense
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

// Перенесите основную логику в отдельный клиентский компонент
function ResultContent() {
  const [status, setStatus] = useState<'loading' | 'success' | 'failed' | 'not_found'>('loading');
  const [orderId, setOrderId] = useState<string | null>(null);
  const params = useSearchParams();

  useEffect(() => {
    const ordId = params.get('orderId');
    if (!ordId) {
      setStatus('not_found');
      return;
    }

    setOrderId(ordId);

    axios
      .get(`https://payment-server-test-production.up.railway.app/payment/status?orderId=${ordId}`)
      .then((res) => {
        const stat = res.data.status;
        if (stat === 'success') setStatus('success');
        else if (stat === 'failed') setStatus('failed');
        else setStatus('not_found');
      })
      .catch(() => setStatus('not_found'));
  }, [params]);

  if (status === 'loading') return <p className="text-center p-10">Загрузка статуса...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Результат оплаты</h1>
      <p className="mb-2">Номер заказа: <strong>{orderId}</strong></p>

      {status === 'success' && <p className="text-green-600">✅ Оплата прошла успешно!</p>}
      {status === 'failed' && <p className="text-red-600">❌ Оплата не удалась.</p>}
      {status === 'not_found' && <p className="text-gray-500">Информация о платеже не найдена.</p>}
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<p className="text-center p-10">Загрузка...</p>}>
      <ResultContent />
    </Suspense>
  );
}