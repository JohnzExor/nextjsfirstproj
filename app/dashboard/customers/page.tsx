import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Customers',
};

const page = () => {
  return <CustomersTable />;
};

export default page;
