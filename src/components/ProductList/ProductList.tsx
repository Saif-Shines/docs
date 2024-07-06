import React from 'react';
import styles from './productList.module.css';
import { ChartBarIcon, ToggleOnIcon } from '../Icons/Icons';

type ProductItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ProductListProps = {
  items: ProductItem[];
};

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className={styles.productList}>
      {items.map((item, index) => (
        <div key={index} className={styles.productItem}>
          <div className={styles.icon}>{item.icon}</div>
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;