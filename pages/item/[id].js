import React from "react";
import { useRouter } from "next/router";
import { useItem } from "../../hooks.js";
import Head from "next/head";

const ERROR_MESSAGE = "Something went wrong";

const Comment = ({ id }) => {
  const { item, isError, isLoading } = useItem(id);

  if (isError) return <>{ERROR_MESSAGE}</>;
  if (isLoading) return <>...</>;

  // time is multiplied by 1000 so that the argument is in
  // milliseconds, not seconds.
  return (
    <li className="mb-10">
      <div className="text-slate-500">{`${item?.by} on ${new Date(
        item?.time * 1000
      ).toDateString()}`}</div>

      <div dangerouslySetInnerHTML={{ __html: item?.text }} />
    </li>
  );
};

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  const { item, isError } = useItem(id);

  if (isError) return ERROR_MESSAGE;

  return (
    <>
      <Head>
        <title>{item?.title}</title>
      </Head>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-gray-800 py-10">
          {item?.title}
        </h1>

        <main dangerouslySetInnerHTML={{ __html: item?.text }} />

        <hr className="my-10" />

        <ul>
          {item?.kids?.map((id) => (
            <Comment id={id} key={id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Item;
