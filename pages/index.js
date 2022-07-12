import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';
import chunk from 'lodash/chunk';
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Item = ({ id }) => {
  const { data } = useSWR(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    fetcher
  );

  return <li>{data?.title}</li>;
};

export default function Home() {
  const { data: topStoriesId } = useSWR(
    'https://hacker-news.firebaseio.com/v0/topstories.json',
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
        {topStoriesIdChunck &&
          topStoriesIdChunck[page - 1]?.map((id) => (
            <Item id={id} key={id}></Item>
          ))}
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
