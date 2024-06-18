import { Product } from '../../types/types';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }: { product: Product | undefined }) => {
  const navigate = useNavigate();

  return (
    <div className=" h-[28rem]  w-full p-2 my-4 md:w-1/3 xl:w-1/4 rounded-md">
      <div
        className="h-full cursor-pointer rounded-lg border border-gray-200 border-opacity-60 py-2 shadow-lg transition duration-500 ease-in-out hover:shadow-2xl"
        onClick={() => navigate('/products/' + product?.id)}
      >
        <div className="h-3/5">
          <img
            src={product?.thumbnail}
            className="h-full w-full rounded-t-md object-contain object-center"
          />
        </div>
        <div className="px-6 pt-5 text-center">
          <p className="text-2xl font-bold line-clamp-1">{product?.title}</p>
          <p className="font-thin  text-sm line-clamp-3 text-slate-500 ">
            {product?.description}
          </p>
          <p className="text-2xl font-bold">{product?.price}</p>
        </div>
      </div>
    </div>
  );
};
