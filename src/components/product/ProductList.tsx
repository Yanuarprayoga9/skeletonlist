import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Product } from '../../types/types';
import { ProductSkeleton } from './ProductSkeleton';
import { ProductCard } from './ProductCard';

const ProductList = (props: {
  products: Product[] | undefined;
  isLoading: boolean;
}) => {
  return (
    <div>
      <SkeletonTheme baseColor="#DEDEDE" highlightColor="#ffffff">
        <div className="flex flex-wrap space-y-4">
          {props.isLoading && <ProductSkeleton cards={12} />}
          {props.products && !props.isLoading ? (
            props?.products.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))
          ) : (
            <h1>Product Is Empty</h1>
          )}
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default ProductList;
