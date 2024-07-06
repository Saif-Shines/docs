import React from 'react';
import styles from './productList.module.css';

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
        <a key={index} href={item.href} className={styles.productItem}>
          <div className={styles.icon}>{item.icon}</div>
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProductList;