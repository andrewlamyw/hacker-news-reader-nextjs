import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useItem = (id) => {
  const { data, error } = useSWR(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    fetcher
  );

  return {
    item: data,
    isLoading: !error && !data,
    isError: error,
  };
};
