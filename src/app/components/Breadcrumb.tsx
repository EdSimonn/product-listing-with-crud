"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProducts } from '@/app/utils/localStorage';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const productId = pathSegments[pathSegments.length - 1];
  const [productName, setProductName] = useState<string | null>(null);

  useEffect(() => {
    if (productId) {
      const products = getProducts();
      const product = products.find((p) => p.id === productId);
      setProductName(product?.name || null);
    }
  }, [productId]);

  return (
    <nav className="text-sm text-gray-700 mb-4">
      <ol className="list-none p-0 inline-flex">
        <li>
          <Link href="/" className="text-gray-500 hover:text-blue-700">Home</Link>
        </li>
        {productName && (
          <>
            <li className="mx-1">
              <span className="mr-1">&gt;</span>
              <span className='mr-1'>{productName}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
