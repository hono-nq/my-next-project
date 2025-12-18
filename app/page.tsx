import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "./_components/NewsList";


export default async function Home() {

  const newsList = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
        <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={newsList.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </main>
  );
}