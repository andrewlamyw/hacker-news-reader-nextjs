import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import chunk from "lodash/chunk";
import Head from "next/head";
import Link from "next/link";
import psl from "psl";
import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import useSWR from "swr";
import { useItem } from "../hooks.js";
import styles from "../styles/Home.module.css";

TimeAgo.addDefaultLocale(en);

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ListItem = ({ id }) => {
  const { item } = useItem(id);

  return (
    <li className="py-4">
      <div>
        <Link href={item?.url || `/item/${id}`}>
          <a className="mr-1">{item?.title}</a>
        </Link>

        <a className="inline-block text-slate-500 text-sm">
          {item?.url && `(${psl.parse(new URL(item?.url).hostname).domain})`}
        </a>
      </div>

      <div className="opacity-50">
        <span>
          {item?.score} points by {item?.by}{" "}
          {Number.isInteger(item?.time) && (
            <ReactTimeAgo date={item?.time * 1000} />
          )}
        </span>
      </div>
    </li>
  );
};

export default function Home() {
  const { data: topStoriesId } = useSWR(
    "https://hacker-news.firebaseio.com/v0/topstories.json",
    fetcher
  );
  const [page, setPage] = useState(1);
  const topStoriesIdChunck = chunk(topStoriesId, 30);

  return (
    <>
      <Head>
        <title>Hacker News Reader - Next.js</title>
      </Head>

      <main className={styles.main}>
        <ul className="divide-y divide-gray-200">
          {topStoriesIdChunck &&
            topStoriesIdChunck[page - 1]?.map((id) => (
              <ListItem id={id} key={id}></ListItem>
            ))}
        </ul>
      </main>
    </>
  );
}
