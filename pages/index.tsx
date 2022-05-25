import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import DateEl from "../components/date";
import { GetStaticProps } from 'next'

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Ut euismod metus at turpis elementum, nec egestas lectus commodo.
          Donec ullamcorper aliquam lorem non vehicula. Pellentesque euismod
          nulla vitae laoreet facilisis. Ut bibendum ut ipsum ut consequat.
          Curabitur mollis mi dapibus ligula ultricies faucibus. Aliquam rutrum
          tellus in eleifend tincidunt. Sed pulvinar purus mauris, in
          sollicitudin dolor rhoncus quis. Cras dignissim, leo ut dapibus
          pharetra, lorem magna placerat nunc, vitae tempus quam purus venenatis
          sem. Etiam ullamcorper quam sed turpis tincidunt malesuada.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateEl dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
