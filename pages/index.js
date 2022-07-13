import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import chunk from "lodash/chunk";
import psl from "psl";
import Link from "next/link";
import { useItem } from "../hooks.js";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ListItem = ({ id }) => {
  const { data } = useItem(id);

  return (
    <li className="py-4">
      <div>
        <Link href={data?.url || `/item/${id}`}>
          <a className="mr-1">{data?.title}</a>
        </Link>

        <a className="inline-block text-slate-500 text-sm">
          {data?.url && `(${psl.parse(new URL(data?.url).hostname).domain})`}
        </a>
      </div>

      <div>
        <span></span>
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
    <div className={styles.container}>
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

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
