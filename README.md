# hacker-news-reader-nextjs

## View deployed live website

https://hacker-news-reader-nextjs.vercel.app

## Edit on StackBlitz ⚡️

https://stackblitz.com/edit/hacker-news-reader-nextjs

## Hacker News API

https://github.com/HackerNews/API

Object fields in each item types.

| Item Type   | title | text | kids | by  | time |
| ----------- | :---: | :--: | :--: | :-: | :--: |
| Job         |   ✔   |  ✔   |  ✔   |  ✔  |  ✔   |
| Story       |   ✔   |  ❌  |  ✔   |  ✔  |  ✔   |
| Comment     |  ❌   |  ✔   |  ✔   |  ✔  |  ✔   |
| Poll        |   ✔   |  ✔   |  ✔   |  ✔  |  ✔   |
| Poll Option |  ❌   |  ❌  |  ✔   |  ✔  |  ✔   |

✔ means the value **_might_** exist

## Tech Stack

- React Framework: [Next.js](https://nextjs.org/)
- CSS Framework: [tailwindcss](https://tailwindcss.com/)
- Deployment: [Vercel](https://nextjs.org/docs/deployment#managed-nextjs-with-vercel)
- Libraries
  - [react-time-ago](https://www.npmjs.com/package/react-time-ago) display relative date/time of posted date _(e.g. just now, 15 minutes ago, 3 hours ago, etc.)_
  - [psl](https://github.com/lupomontero/psl#readme) domain name parser _(e.g. www.google.com -> google.com)_
