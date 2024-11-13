import { gql } from "@apollo/client";
import Link from "next/link";
import style from "./header.module.css";

export default function Header({ siteTitle, siteDescription, menuItems }) {
  return (
    <header className={style.header}>
      <div className={style.topHeader}>
        <div className="container">
          <Link href="/" className={style.brand}>
            <h2 className={style.siteTitle}>{siteTitle}</h2>
          </Link>
          
          <div className={style.searchContainer}>
            <input 
              type="search" 
              placeholder="Search products, brands and categories..."
              className={style.searchInput}
            />
            <button className={style.searchButton}>Search</button>
          </div>

          <div className={style.userActions}>
            <Link href="/login">Login</Link>
            <Link href="/favorites">❤ Favorites</Link>
          </div>
        </div>
      </div>

      <nav className={style.categoryNav}>
        <div className="container">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.uri}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

Header.fragments = {
  entry: gql`
    fragment HeaderFragment on RootQuery {
      generalSettings {
        title
        description
      }
      primaryMenuItems: menuItems(where: { location: PRIMARY }) {
        nodes {
          id
          uri
          path
          label
          parentId
          cssClasses
        }
      }
    }
  `,
};
