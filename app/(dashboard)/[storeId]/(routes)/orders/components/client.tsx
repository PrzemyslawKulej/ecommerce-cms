"use client";

import { Heading } from "@/components/ui/heading";

import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/date-table";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`"Orders (${data.length})"`}
        description="Manage orders for your store"
      />

      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};
