import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Se o retorno da função fetchProductsList com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const retorno = await fetchProductsList('computador');
    expect(Object.keys(retorno[0])).toEqual(Object.keys(computadorSearch[0]));
  });

  it('Se a função fetchProductsList for passada sem argumento, retorna um erro com a mensagem', async () => {
  await expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });
  it('Erro catch test1', async () => {
    await expect(fetchProductsList('any')).resolves.toBe('URL não mapeadahttps://api.mercadolibre.com/sites/MLB/search?q=any');
  });
});
