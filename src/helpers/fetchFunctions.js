export const fetchProduct = async (id) => {
  if (id === undefined) throw new Error('ID não informado');
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const dados = await response.json();
    return dados;
  } catch (error) {
    return error.message;
  }
};

export const fetchProductsList = async (search) => {
  if (search === undefined) throw new Error('Termo de busca não informado');
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`);
    const dados = await response.json();
    return dados.results;
  } catch (error) {
    return error.message;
  }
};
