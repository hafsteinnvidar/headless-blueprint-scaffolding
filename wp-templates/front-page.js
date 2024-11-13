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

  const categories = [
    { name: "Electronics", image: "/images/electronics.jpg", slug: "electronics" },
    { name: "Computers", image: "/images/computers.jpg", slug: "computers" },
    { name: "Phones", image: "/images/phones.jpg", slug: "phones" },
    { name: "Gaming", image: "/images/gaming.jpg", slug: "gaming" },
    { name: "Home", image: "/images/home.jpg", slug: "home" },
    { name: "Sports", image: "/images/sports.jpg", slug: "sports" },
  ];

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
            {categories.map((category) => (
              <Link 
                key={category.slug}
                href={`/category/${category.slug}`} 
                className={style.categoryCard}
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  // Fallback image if the category image doesn't exist
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200";
                  }}
                />
                <h3>{category.name}</h3>
              </Link>
            ))}
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
