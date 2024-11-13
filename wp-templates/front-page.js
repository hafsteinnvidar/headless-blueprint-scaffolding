import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Component(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <section className={style.hero}>
          <h1>Compare prices and find the best deals</h1>
          <p>Discover millions of products from thousands of stores</p>
        </section>

        <section className={style.featuredCategories}>
          <h2>Popular Categories</h2>
          <div className={style.categoryGrid}>
            <Link href="/electronics" className={style.categoryCard}>
              <img src="/electronics.jpg" alt="Electronics" />
              <h3>Electronics</h3>
            </Link>
          </div>
        </section>

        <section className={style.todaysDeals}>
          <h2>Today's Best Deals</h2>
          <div className={style.productGrid}>
            {/* Add your product cards here */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;
