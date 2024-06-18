import { useEffect, useState } from 'react';
import { getProducts } from '../../api/services';
import { Product } from '../../types/types';
import ProductList from '../../components/product/ProductList';
import { Filter } from '../../components/product/Filter';
import { Pagination } from '../../components/product/Pagination';
import Container from '../../components/Container';
import { Banner } from '../../components/product/Banner';
import { Search } from '../../components/product/Search';

const Products = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState(urlParams.get('search') || '');
  const [order, setOrder] = useState(urlParams.get('order') || 'desc');
  const [limit, setLimit] = useState<number>(
    Number(urlParams.get('limit')) || 20
  );
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(Number(urlParams.get('page')) || 1);
  const [total, setTotal] = useState(0);

  // REFETCHING
  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      const res = await getProducts({ search, order, limit, skip, page });
      setProducts(res.products);
      setTotal(res.total);
      setIsLoading(false);
    };
    window.history.pushState(
      {},
      '',
      `?search=${search}&page=${page}&limit=${limit}&order=${order}&skip=${skip}
      `
    );
    fetchProducts();
  }, [search, order, limit, skip, page]);

  return (
    <div className="">
      <Banner />

      <Container className="py-2">
        <Search search={search} setSearch={setSearch} />
      </Container>
      <Filter
        limit={limit}
        setLimit={setLimit}
        order={order}
        setOrder={setOrder}
      />
      <ProductList products={products} isLoading={isLoading} />
      <Container className="">
        <Pagination
          className="py-4"
          total={total}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </Container>
    </div>
  );
};

export default Products;
