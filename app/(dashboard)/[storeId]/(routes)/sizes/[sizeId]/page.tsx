import prismadb from "@/lib/prismadb";
import React from "react";
import { BillboardForm } from "./components/size-form";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const size =
    (await prisma?.size.findUnique({
      where: {
        id: params.sizeId,
      },
    })) ?? null;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <BillboardForm initialData={size} />
      </div>
    </div>
  );
};
export default SizePage;
