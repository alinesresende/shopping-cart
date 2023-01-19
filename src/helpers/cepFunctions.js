const address = document.querySelector('.cart__address');
const typedCep = document.querySelector('.cep-input');

export const getAddress = async (cep) => {
  const response = await Promise.any([
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`),
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`),
  ]);
  const dados = await response.json();
  const errorStatus = 404;
  if (response.status === errorStatus) {
    throw new Error('CEP não encontrado');
  }
  return `${dados.address} - ${dados.district} - ${dados.city} - ${dados.state}`;
};

export const searchCep = async () => {
  try {
    const zipCodeEntered = typedCep.value;
    const numberCep = 8;
    if (zipCodeEntered.length < numberCep) {
      return;
    }
    const cepScreen = await getAddress(zipCodeEntered);
    address.innerHTML = cepScreen;
  } catch (error) {
    address.innerHTML = 'CEP não encontrado';
  }
};
