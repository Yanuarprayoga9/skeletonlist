import api from '.';

interface GetProductProps {
  search?: string;
  order?: string;
  limit?: number;
  skip?: number;
  page?: number;
}

export const getProducts = async (query: GetProductProps) => {
  try {
    const { search, order, limit, skip, page } = query;
    // Calculate start index
    let startIndex: number = 0;
    if (page && limit) {
      startIndex = (page - 1) * limit;
    } else if (skip) {
      startIndex = skip;
    }

    // Construct query parameters
    const searchParam = search ? `/search?q=${encodeURIComponent(search)}` : '';
    let limitParam;
    if (search != '') {
      limitParam = limit ? `&limit=${limit}` : '';
    } else {
      limitParam = limit ? `?limit=${limit}` : '?';
    }
    const skipParam = `&skip=${startIndex}`;
    const orderParam = order ? `&order=${order}` : '';

    const url = `https://dummyjson.com/products${searchParam}${limitParam}${skipParam}&sortBy=title${orderParam}&select=title,price,thumbnail,price,description`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
