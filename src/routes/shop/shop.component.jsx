import { useContext } from 'react';
import { ProductCard } from '../../components/product-card/product-card.components';
import { ProductsContext } from '../../contexts/products.context';

import './shop.styles.scss';

export function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
