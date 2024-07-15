import React from "react";
import styles from "./productList.module.css";
import Link from "@docusaurus/Link";

type ProductItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string; // Add href attribute
};

type ProductListProps = {
  items: ProductItem[];
};

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className={styles.productList}>
      {items.map((item, index) => (
        <Link key={index} href={item.href} className={styles.productItem}>
          {item.icon && <div className={styles.icon}>{item.icon}</div>}
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export function SimpleCard({ children, ...props }) {
  return (
    <a href={props.href} className={styles.productItem}>
      {props.icon ? <div className={styles.icon}>{props.icon}</div> : ""}
      <div>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
    </a>
  );
}

export default ProductList;
