import React from "react";
import { ColorForm } from "./components/color-form";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const size =
    (await prisma?.color.findUnique({
      where: {
        id: params.colorId,
      },
    })) ?? null;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};
export default ColorPage;
