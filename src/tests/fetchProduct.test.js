import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Se fetch foi chamada quando a função fetchProduct é chamada com produto MLB1405519561', async() => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });
  it('Se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto', async() => {
   const retorno = await fetchProduct('MLB1405519561')
    expect(Object.keys(retorno)).toEqual(Object.keys(product));
  });
  it('chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: ID não informado', async() => {
    await expect(fetchProduct()).rejects.toThrow('ID não informado');
   });
   it('Erro catch test', async () => {
    await expect(fetchProduct('any')).resolves.toBe('URL não mapeadahttps://api.mercadolibre.com/items/any');
  });
});
