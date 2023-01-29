import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Banner from '@/components/banner';

export default function Home() {
  const handleBannerClick = () => {
    console.log('click')
  }

  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Coffee Connoisseur" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          onClick={handleBannerClick}
        />
      </main>
    </>
  );
}
