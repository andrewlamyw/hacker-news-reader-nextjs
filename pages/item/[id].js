import React from "react";
import { useRouter } from "next/router";
import { useItem } from "../../hooks.js";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useItem(id);

  if (error) return "Something went wrong";

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-extrabold text-gray-800 py-10">
        {data?.title}
      </h1>

      <main dangerouslySetInnerHTML={{ __html: data?.text }}></main>
    </div>
  );
};

export default Item;
