# Boas-vindas ao repositório do projeto Carrinho de Compras

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀
Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/learn/student-manual/codigo-de-conduta-da-pessoa-estudante).

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/876a615b-f578-4d65-a820-de9f3e5e57db/lesson/be8632bf-7bb7-4c01-a5d9-7aadac3a58f0) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Você vai desenvolver **carrinho de compras** totalmente dinâmico! 🛒

Para isso, vai consumir dados diretamente de uma **API!** 🤩

Isso mesmo! Da sigla em inglês _Application Programming Interface_, uma API é um ponto de contato na internet com determinado serviço e nesse projeto você vai utilizar a API do Mercado Livre para buscar produtos à venda. 🏷

E não para por aí! 🤩

Você já aprendeu sobre a importância de ter uma mentalidade orientada a testes, não é mesmo? E também já sabe como a implementação de testes contribui para a escrita de códigos mais confiáveis e com boa performance.

Nesse projeto você vai ter a experiência de pôr em prática o desenvolvimento orientado a testes, o famoso TDD (Test Driven Development)! Que te ajuda a garantir um código de qualidade, percebendo os casos de uso da sua aplicação e garantindo que ela está funcionando da maneira correta! 🚀

Ao finalizar o projeto, ele deve ter o comportamento parecido com o gif abaixo:

![Project Gif](/images/prototipo.gif)

</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />

# Data de entrega

- Projeto individual;
- Serão `4` dias de projeto;
- Data de entrega para avaliação final do projeto: `26/01/2023 14:00`.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- `git clone git@github.com:tryber/sd-028-a-project-shopping-cart.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-028-a-project-shopping-cart`

2. Instale as dependências e inicialize o projeto

- Instale as dependências:
  - `npm install`

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`
  - Exemplo: `git checkout -b maria-silva-shopping-cart`

4. Quando fizer mudanças, adicione-as ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer as alterações realizadas em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado os arquivos em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin maria-silva-shopping-cart`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-028-a-project-shopping-cart/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-028-a-project-shopping-cart/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente;

- Lembre-se de sempre atualizar o repositório remoto após um (ou alguns) `commits`;

- Os comandos que você utilizará com mais frequência são:

    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

    2. `git add` _(para adicionar arquivos ao stage do Git)_;

    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque quem você deseja que realize o _code review_, por exemplo, as pessoas da sua tribo:

- No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

- No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

- No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-028-a`.

  Caso tenha alguma dúvida, [aqui tem um vídeo explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

### ESLint e Stylelint

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `Stylelint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção!

Para poder rodar o `ESLint` e o `Stylelint` certifique-se de ter executado o comando `npm install` dentro do projeto.

Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

Se a análise do `ESLint` e do `Stylelint` encontrarem problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no VSCode. Para isso, basta fazer o download do plugin `ESLint` e instalá-lo.

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/3b1546b5-f7bc-40f7-a674-77b16c408756/lesson/0c9e8c0e-24c3-4526-ba6b-60d95913e022).

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

Nesse projeto você vai implementar o TDD (Test Driven Development) também conhecido como _desenvolvimento orientado a testes_, que é uma prática muito utilizada no mercado de trabalho para garantir que o código será implementado da maneira correta. Ou seja, primeiro você vai escrever o teste para uma função e depois vai implementar a lógica para que a função execute.

Você vai ser responsável por implementar testes para as funções: `fetchProductsList` e `fetchProduct`.

### Cobertura de testes

Para avaliar se seus testes estão cobrindo toda a função, será utilizado a **cobertura de testes**, que avalia a eficácia dos testes implementados de acordo com os requisitos, determinando se cobrem o que foi pedido ou não.

⚠️ **Será testado apenas as funções pedidas e não toda a aplicação!**

Conforme você for realizando os testes do projeto, a porcentagem da cobertura total irá aumentar. Para a cobertura total será avaliado 25%, 50%, 75%, e, por fim, 100% dos testes. Para cada função solicitada a cobertura de testes irá avaliar a cobertura das linhas da sua função.

Para executar seus testes, execute o comando abaixo:

```bash
npm test
```

Para executar e acompanhar a implementação da sua cobertura de testes, rode o comando abaixo:

```bash
npm run test:coverage
```

Ao realizar o comando de cobertura de testes terá um resultado similar a este:

![Cobertura de Testes](/images/cobertura.png)

Verifique com o comando `npm test` se todos os itens da cobertura dos testes estão passando corretamente.

⚠️ **Atenção:** cuidado com eventuais falso-positivos!

### Pontos importantes para a implementação dos testes

Disponibilizamos a API simulada (mockada) para você implementar seus testes. Isso significa que será possível simular o consumo de todos os dados da API dentro do seu ambiente de testes, de forma segura e independente de fatores externos que possam ocorrer.

- As funções `fetchProductsList` e `fetchProduct` devem ser implementadas por você;

- Os retornos esperados das funções já estão importados nos arquivos de teste e vão estar especificados nos requisitos;

- O `window.fetch` está definido em todos os testes, ou seja, será possível usar a função `fetch` dentro do seu ambiente de testes sem precisar importar ou instalar bibliotecas;

- Para nosso ambiente de testes, o `fetch` está limitado a atender somente a configuração da API referente ao projeto;

- Deseja checar se uma função foi chamada? Ou se foi chamada com um argumento específico? Que tal dar uma olhada nos matchers da [documentação](https://jestjs.io/pt-BR/docs/expect#tohavebeencalled).

### Cypress

Para avaliar o seu projeto como um todo, será utilizado o _Cypress_.

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.

Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do projeto.

Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute um dos seguintes comandos:

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cy:open
```

ou para executar os testes apenas no terminal:

```bash
npm run cy
```

Após executar o comando acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js).

⚠️ **Atenção:** Para que o cypress funcione você precisa estar com a aplicação rodando localmente. Para isso, execute o comando `npm run dev` no terminal.

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

⚠️ **Atente-se para os nomes de classes que alguns elementos de seu projeto devem possuir**. O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

</details>

<details>
<summary><strong>🏗 Estrutura do projeto</strong></summary><br />

O seu _Pull Request_ deverá conter os arquivos `index.html`, `src/style.css` e `src/main.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente.

O arquivo `src/helpers/cartFunctions.js` contém uma estrutura de código inicial, que cria alguns elementos HTML. Leia cada função atentamente para entender o que o código está fazendo.

É no `main.js` que você vai implementar a lógica para desenvolver o projeto. Fique à vontade para criar novas funções e/ou arquivos! 😉

Não se preocupe! O requisito vai informar quando for necessário utilizar as funções já existentes.

<details>
  <summary>
    Clique aqui para saber um pouco mais sobre o que cada função faz
  </summary> <br />

- `createProductImageElement`: Cria um elemento de imagem;
- `createCustomElement`: Estrutura para criar um elemento;
- `createProductElement`: Cria a lista de produtos;
- `getIdFromProduct`: Pega o `id` de um produto;
- `createCartProductElement`: Cria os elementos do carrinho.

</details>

A pasta `helpers` contém os arquivos `cartFunctions.js`, `fetchFunctions.js` e `shopFunctions.js` e cada um possui funções que serão utilizadas no seu código JavaScript.

A pasta `tests`, contém os arquivos `fetchProduct.test.js` e `fetchProductsList.test.js`, onde você vai implementar os testes para cada uma das funções de mesmo nome.

⚠️ É importante que você não modifique o nome desses arquivos! ⚠️

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, poste no _Slack_.

</details>

<details>
<summary><strong>⚙️ API do Mercado Livre</strong></summary><br />

O [manual da API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) contém todas as informações acerca da API (retorno, estrutura). Nesse projeto você vai precisar apenas de alguns dos _endpoints_, sendo eles:

- `https://api.mercadolibre.com/sites/MLB/search?q=$QUERY`: traz uma lista de produtos, onde `$QUERY` é o termo a ser buscado. Por exemplo, se o termo for `computador`, o retorno será parecido com esse:

  <details>
    <summary>Retorno da requisição de listagem de produtos</summary>

    Esse retorno possui várias informações acerca da lista de produtos. Dento do array `results` é onde você vai encontrar a lista de produtos.

  ```json
  {
      "site_id": "MLB",
      "query": "computador",
      "paging": {
          "total": 406861,
          "offset": 0,
          "limit": 50,
          "primary_results": 1001
      },
      "results": [
          {
              "id": "MLB1341925291",
              "site_id": "MLB",
              "title": "Processador Intel Core I5-9400f 6 Núcleos 128 Gb",
              "seller": {
                  "id": 385471334,
                  "permalink": null,
                  "power_seller_status": null,
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "tags": []
              },
              "price": 899,
              "currency_id": "BRL",
              "available_quantity": 1,
              "sold_quantity": 0,
              "buying_mode": "buy_it_now",
              "listing_type_id": "gold_pro",
              "stop_time": "2039-10-10T04:00:00.000Z",
              "condition": "new",
              "permalink": "https://www.mercadolivre.com.br/processador-intel-core-i5-9400f-6-nucleos-128-gb/p/MLB13953199",
              "thumbnail": "http://mlb-s2-p.mlstatic.com/813265-MLA32241773956_092019-I.jpg",
              "accepts_mercadopago": true,
              "installments": {
                  "quantity": 12,
                  "amount": 74.92,
                  "rate": 0,
                  "currency_id": "BRL"
              },
              "address": {
                  "state_id": "BR-SP",
                  "state_name": "São Paulo",
                  "city_id": "BR-SP-27",
                  "city_name": "São José dos Campos"
              },
              "shipping": {
                  "free_shipping": true,
                  "mode": "me2",
                  "tags": [
                      "fulfillment",
                      "mandatory_free_shipping"
                  ],
                  "logistic_type": "fulfillment",
                  "store_pick_up": false
              },
              "seller_address": {
                  "id": "",
                  "comment": "",
                  "address_line": "",
                  "zip_code": "",
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-SP",
                      "name": "São Paulo"
                  },
                  "city": {
                      "id": "BR-SP-27",
                      "name": "São José dos Campos"
                  },
                  "latitude": "",
                  "longitude": ""
              },
              "attributes": [
                  {
                      "source": 1,
                      "id": "ALPHANUMERIC_MODEL",
                      "value_id": "6382478",
                      "value_struct": null,
                      "values": [
                          {
                              "name": "BX80684I59400F",
                              "struct": null,
                              "source": 1,
                              "id": "6382478"
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "name": "Modelo alfanumérico",
                      "value_name": "BX80684I59400F",
                      "attribute_group_name": "Outros"
                  },
                  {
                      "id": "BRAND",
                      "value_struct": null,
                      "attribute_group_name": "Outros",
                      "attribute_group_id": "OTHERS",
                      "source": 1,
                      "name": "Marca",
                      "value_id": "15617",
                      "value_name": "Intel",
                      "values": [
                          {
                              "id": "15617",
                              "name": "Intel",
                              "struct": null,
                              "source": 1
                          }
                      ]
                  },
                  {
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "source": 1,
                      "id": "ITEM_CONDITION",
                      "value_name": "Novo",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 1
                          }
                      ]
                  },
                  {
                      "id": "LINE",
                      "value_name": "Core i5",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "name": "Linha",
                      "value_id": "7769178",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "7769178",
                              "name": "Core i5",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1
                  },
                  {
                      "id": "MODEL",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "6637008",
                              "name": "i5-9400F",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "name": "Modelo",
                      "value_id": "6637008",
                      "value_name": "i5-9400F",
                      "attribute_group_name": "Outros",
                      "source": 1
                  }
              ],
              "differential_pricing": {
                  "id": 33580182
              },
              "original_price": null,
              "category_id": "MLB1693",
              "official_store_id": null,
              "catalog_product_id": "MLB13953199",
              "tags": [
                  "brand_verified",
                  "good_quality_picture",
                  "good_quality_thumbnail",
                  "immediate_payment",
                  "cart_eligible"
              ],
              "catalog_listing": true
          },
      ]
  }
  ```

  </details>

- `https://api.mercadolibre.com/items/$ProductID`: traz detalhes de um determinado produto, onde `$ProductID` é o `id` do produto a ser buscado. Por exemplo, se o `id` do produto for `MLB1341706310`, o retorno será parecido com esse:

  <details>
    <summary>Retorno da requisição de detalhes de um produto</summary>

    Esse retorno traz informações detalhadas sobre cada um dos produtos. Por exemplo, o `id` desse produto, o `title`, que o título do produto, `price`, que é o preço e assim por diante.

  ```json
  {
    "id": "MLB1341706310",
    "site_id": "MLB",
    "title": "Processador Gamer Amd Ryzen 5 2600 Yd2600bbafbox De 6 Núcleos E 3.9ghz De Frequência",
    "subtitle": null,
    "seller_id": 245718870,
    "category_id": "MLB1693",
    "official_store_id": 1929,
    "price": 1068,
    "base_price": 1068,
    "original_price": null,
    "currency_id": "BRL",
    "initial_quantity": 93,
    "available_quantity": 0,
    "sold_quantity": 50,
    "sale_terms": [],
    "buying_mode": "buy_it_now",
    "listing_type_id": "gold_special",
    "start_time": "2019-10-15T18:13:00.000Z",
    "stop_time": "2040-01-27T00:26:51.000Z",
    "condition": "new",
    "permalink": "https://produto.mercadolivre.com.br/MLB-1341706310-processador-gamer-amd-ryzen-5-2600-yd2600bbafbox-de-6-nucleos-e-39ghz-de-frequncia-_JM",
    "thumbnail_id": "852106-MLA42157659481_062020",
    "thumbnail": "http://http2.mlstatic.com/D_852106-MLA42157659481_062020-I.jpg",
    "secure_thumbnail": "https://http2.mlstatic.com/D_852106-MLA42157659481_062020-I.jpg",
    "pictures": [],
    "video_id": null,
    "descriptions": [
    ],
    "accepts_mercadopago": true,
    "non_mercado_pago_payment_methods": [
    ],
    "shipping": {},
    "international_delivery_mode": "none",
    "seller_address": {},
    "seller_contact": null,
    "location": {
    },
    "coverage_areas": [
    ],
    "attributes": [],
    "warnings": [
    ],
    "listing_source": "",
    "variations": [
    ],
    "status": "paused",
    "sub_status": [],
    "tags": [],
    "warranty": "Garantia de fábrica: 3 anos",
    "catalog_product_id": "MLB9196241",
    "domain_id": "MLB-COMPUTER_PROCESSORS",
    "parent_item_id": null,
    "differential_pricing": null,
    "deal_ids": [
    ],
    "automatic_relist": false,
    "date_created": "2019-10-15T18:13:00.000Z",
    "last_updated": "2022-02-05T06:46:48.434Z",
    "health": null,
    "catalog_listing": true,
    "channels": []
  }
  ```

  </details>

  </details>

  <details>
    <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary> <br />

  Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
  **Leva menos de 3 minutos!**

  [Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH)

  </details>

  <details>
    <summary><strong>💻 Protótipo do projeto no Figma</strong></summary><br />

  Além da qualidade do código e do atendimento aos requisitos, um bom layout é um dos aspectos responsáveis por melhorar a usabilidade de uma aplicação e turbinar seu portfólio!

  Você pode estar se perguntando: _"Como deixo meu projeto com um layout mais atrativo?"_ 🤔

  Nesse projeto o layout já está pronto, mas se quiser deixar o seu projeto com a sua cara, você pode usar o Figma para criar um layout personalizado baseado no protótipo que preparamos para você.

  - [protótipo do Figma](https://www.figma.com/file/7Okk4tKMFcjNFoGX5rR677/%5BProjeto%5D%5BFrontend%5D-Carrinho-de-Compras?node-id=0%3A1)

  </details>

  <details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

⚠️ **Atenção:** Você está livre para criar novas funções e arquivos e até mesmo modificar tudo que já está pronto (desde que não seja perdido nenhuma classe de nenhum elemento no processo). Apenas o arquivo `fetchFunctions.js` que **você não deve exportar novas funções!** Mas poderá criar novas funções que serão utilizadas ali mesmo.

# Requisitos Obrigatórios

## 1. (TDD) Desenvolva testes de no mínimo 50% de cobertura das funções e linhas do arquivo `fetchFunctions`

<details>
  <summary>
    Implemente os testes necessários na função <code>fetchProductsList</code>
  </summary> <br />

O arquivo para implementar o teste já está criado, se chama `fetchProductsList.test.js` e se encontra dentro da pasta `tests`.

**O que você deve testar:**

- Teste se `fetchProductsList` é uma função;

- Execute a função `fetchProductsList` com o argumento `'computador'` e teste se `fetch` foi chamada;

- Teste se, ao chamar a função `fetchProductsList` com o argumento `'computador'`, a função `fetch` utiliza o endpoint `'https://api.mercadolibre.com/sites/MLB/search?q=computador'`;

- Teste se o retorno da função `fetchProductsList` com o argumento `'computador'` é uma estrutura de dados igual ao objeto `computadorSearch`, que já está importado no arquivo.

- Teste se, ao chamar a função `fetchProductsList` sem argumento, retorna um erro com a mensagem: `'Termo de busca não informado'`.

> **De olho na dica 👀:** Lembre-se a fetchProductsList retorna uma promise e o jest possui [matchers](https://jestjs.io/pt-BR/docs/asynchronous#resolves--rejects) específicos para isso! Não se esqueça de utilizar o await ou return para que o teste espere a promise ser resolvida.
> Leia com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!

⚠️ **Atenção:** Você deve implementar todos os testes acima, independente do que for suficiente para a cobertura de testes.

**O que será testado:**

- Será avaliado se os testes implementados atingem no mínimo 50% da cobertura das funções e linhas do arquivo `fetchFunctions`.

</details>

## 2. Implemente a função fetchProductsList

<details>
  <summary>
    Implemente a função <code>fetchProductsList</code> que se encontra no arquivo <code>fetchFunctions.js</code>
  </summary> <br />

  A função `fetchProductsList` deverá ser responsável por realizar a requisição e retornar os resultados da API.

  A função `fetchProductsList` já está criada porém sem implementação e se encontra dentro do arquivo `helpers/fetchFunctions`.

- A função deve obrigatoriamente receber um parâmetro com o termo que será usado na busca, caso contrario deve [retornar um erro](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw) com a mensagem: `'Termo de busca não informado'`;

- Utilize o _endpoint_ `https://api.mercadolibre.com/sites/MLB/search?q=$QUERY`, onde:

  - O valor de `$QUERY` representa o termo que será buscado na API;

  - O retorno da função deverá ser o array de produtos que se encontra na chave `results`;

  <details>
  <summary>Clique aqui para ver o retorno da API</summary>

    Resultado da pesquisa `https://api.mercadolibre.com/sites/MLB/search?q=computador`

    ```json
    {
      "site_id": "MLB",
      "country_default_time_zone": "GMT-03:00",
      "query": "computador",
      "paging": {...},
      "results": [
        {
          "id": "MLB2025368730",
          "site_id": "MLB",
          "title": "Computador Completo Fácil Intel Core I3 8gb Ssd 240gb ",
          "seller": {},
          "price": 1859.07,
          "prices": {},
          "sale_price": null,
          "currency_id": "BRL",
          "available_quantity": 100,
          "sold_quantity": 500,
          "buying_mode": "buy_it_now",
          "listing_type_id": "gold_pro",
          "stop_time": "2041-09-12T04:00:00.000Z",
          "condition": "new",
          "permalink": "https://produto.mercadolivre.com.br/MLB-2025368730-computador-completo-facil-intel-core-i3-8gb-ssd-240gb-_JM",
          "thumbnail": "http://http2.mlstatic.com/D_704139-MLB47542929423_092021-I.jpg",
          "thumbnail_id": "704139-MLB47542929423_092021",
          "accepts_mercadopago": true,
          "installments": {},
          "address": {},
          "shipping": {},
          "seller_address": {},
          "attributes": [],
          "differential_pricing": {},
          "original_price": 1999,
          "category_id": "MLB1649",
          "official_store_id": 3807,
          "domain_id": "MLB-DESKTOP_COMPUTERS",
          "catalog_product_id": null,
          "tags": [],
          "order_backend": 1,
          "use_thumbnail_id": true,
          "offer_score": null,
          "offer_share": null,
          "match_score": null,
          "winner_item_id": null,
          "melicoin": null,
          "discounts": null
        },
        // {...} restante da lista de produtos
      ],
      "sort": {...},
      "available_sorts": {...},
      "filters": {...},
      "available_filters": {...}
    }

    ```

  </details>

**O que será testado:**

- Será avaliado se a função `fetchProductsList` retorna um erro quando não é passado nenhum parâmetro;
- Será avaliado se a função `fetchProductsList` chama a API com o endpoint correto;
- Será avaliado se a função `fetchProductsList` retorna o array de produtos da API.

</details>
  
## 3. Crie uma listagem de produtos

<details>
  <summary>
    Utilize a função <code>fetchProductsList</code> para criar uma listagem de produtos através da API do Mercado Livre.
  </summary> <br />

Com a função `fetchProductsList` pronta, vamos utilizá-la para criar uma listagem de produtos.

Para isso você deverá chamá-la com o parâmetro `'computador'` (você pode fazer isso onde preferir, mas indicamos que o faça no arquivo `main.js` para manter a organização do seu código).

Com os dados em mãos, você deverá utilizar a função `createProductElement()` (que se encontra no arquivo `shopFunction.js`) para criar todos os componentes _HTML_ referentes a cada um dos produtos retornados pela API:
> Essa função já está implementada no arquivo `fetchFunctions.js`
> Leia com bastante atenção a função para entender seu funcionamento.

- Adicione cada elemento retornado da função `createProductElement(product)` como filho do elemento `<section class="products">`.

**O que será testado:**

- Todos produtos estão listados na página.

</details>

## 4. Adicione um texto de `carregando` durante uma requisição à API

<details>
  <summary>
    Adicione um elemento com o texto <code>carregando...</code> durante a requisição à API
  </summary> <br />

Uma requisição à API gasta um certo tempo e durante esse processo a pessoa que está utilizando a página não tem como saber se a requisição deu certo ou não. Por isso, normalmente é utilizada alguma forma para mostrar que a requisição ainda está em andamento. Para isso:

- Crie um elemento que contenha o texto `carregando...`, que deve ser exibido em algum lugar da página;

- Adicione a classe `loading` ao elemento que possui o texto `carregando...`;

- Após a requisição terminar esse elemento deve ser removido da tela.

> **Sugestão:** Você pode criar uma função que adicione ao DOM o elemento com o texto `carregando...` e outra para retirá-lo, o que acha?

**O que será testado:**

- Verifica se o texto de "carregando" está visível durante uma requisição à API.
- Verifica se o texto de "carregando" não está visível após a requisição à API ser concluída.

</details>

## 5. Exiba uma mensagem de erro caso algo dê errado na requisição à API

<details>
  <summary>
    Caso ocorra algum erro durante a requisição à API, exiba um texto <code>Algum erro ocorreu, recarregue a página e tente novamente</code>
  </summary> <br />

  Por se tratar de uma requisição a uma API externa, é possível que ocorra algum erro durante a requisição. Por isso, é importante que você trate esse erro, exibindo uma mensagem para o usuário. Para isso:

- Crie um elemento que contenha o texto `Algum erro ocorreu, recarregue a página e tente novamente`, que deve ser exibido em algum lugar da página;
- Adicione a classe `error` ao elemento que possui o texto;
- Exiba esse elemento apenas **caso ocorra algum erro** durante a requisição à API.

> **Sugestão:** Caso tenha feito a função que adiciona e remove o `loading` você pode refatorar para reutiliza-lá com a mensagem de erro. O que acha?

**O que será testado:**

- Verifica se o texto de "erro" está visível após a requisição à API ser concluída com erro.
- Verifica se o texto de "erro" não está visível após a requisição à API ser concluída com sucesso.

</details>

## 6. (TDD) Desenvolva testes de no mínimo 100% de cobertura das funções e linhas do arquivo `fetchFunctions`

<details>
  <summary>
    Implemente os testes necessários na função <code>fetchProduct</code>
  </summary> <br />

**O que você deve testar:**

- Teste se `fetchProduct` é uma função;

- Execute a função `fetchProduct` com o argumento do produto "MLB1405519561" e teste se `fetch` foi chamada;

- Teste se, ao chamar a função `fetchProduct` com o argumento do produto "MLB1405519561", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/items/MLB1405519561";

- Teste se o retorno da função `fetchProduct` com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto `produto` que já está importado no arquivo.

- Teste se, ao chamar a função `fetchProduct` sem argumento, retorna um erro com a mensagem: `'ID não informado'`.

> **De olho na dica 👀:** Lembre-se a fetchProductsList retorna uma promise e o jest possui [matchers](https://jestjs.io/pt-BR/docs/asynchronous#resolves--rejects) específicos para isso! Não se esqueça de utilizar o await ou return para que o teste espere a promise ser resolvida.
> Leia com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!

**O que será testado:**

- Será avaliado se os testes implementados atingem no mínimo 50% da cobertura total e 100% das funções e linhas do arquivo `fetchFunctions`.

</details>

## 7. Implemente a função fetchProduct

<details>
  <summary>
    Implemente a função <code>fetchProduct</code> para retornar dados de um produto e adicioná-lo ao carrinho.
  </summary> <br />

Implemente a função `fetchProduct` para fazer a requisição dos detalhes de apenas **um** produto;

A função já está criada porém sem implementação e se encontra dentro do arquivo `helpers/fetchFunctions`.

- A função deve obrigatoriamente receber um parâmetro com o id que será usado na busca, caso contrario deve [retornar um erro](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw) com a mensagem: `'ID não informado'`;
- Utilize o _endpoint_ `https://api.mercadolibre.com/items/$ProductID`
  - `$ProductID` representa o `id` do produto a ser buscado;

Por exemplo, se o `id` do produto for `MLB1405519561`, o retorno do _endpoint_ será algo no formato:

  <details>
  <summary><strong>Clique aqui para ver o retorno da API</strong></summary>

  ```json
    {
        "id": "MLB1405519561",
        "site_id": "MLB",
        "title": " Cpu Pc  Torre Core I5 3470 3.20ghz 8gb Ssd 240gb Com Nf",
        "subtitle": null,
        "seller_id": 298832663,
        "category_id": "MLB1649",
        "official_store_id": null,
        "price": 1609,
        "base_price": 1609,
        "original_price": null,
        "currency_id": "BRL",
        "initial_quantity": 678,
        "available_quantity": 1,
        "sold_quantity": 500,
        //[...]
        "warranty": "Garantia do vendedor: 6 meses",
        "catalog_product_id": null,
        "domain_id": "MLB-DESKTOP_COMPUTERS",
        "parent_item_id": null,
        "differential_pricing": null,
        "deal_ids": [],
        "automatic_relist": false,
        "date_created": "2020-08-02T23:13:47.000Z",
        "last_updated": "2021-03-28T00:37:24.262Z",
        "health": 1,
        "catalog_listing": false,
    }
  ```

  </details>

**O que será testado:**

- Será avaliado se a função `fetchProduct` retorna um erro quando não é passado nenhum parâmetro;
- Será avaliado se a função `fetchProduct` retorna as informações do produto da API.

</details>

## 8. Adicione o produto ao carrinho de compras

<details>
  <summary>
    Implemente a funcionalidade que adiciona os produtos ao carrinho.
  </summary> <br />

Cada produto na página _HTML_ possui um botão com o nome `Adicionar ao carrinho` e, ao clicar nesse botão, você deve realizar uma requisição que vai retornar todos os detalhes de um produto.

Ao clicar no botão `Adicionar ao carrinho`:

- O id do produto deve ser adicionado ao localStorage utilizando a função `saveCartID`, que já está implementada no arquivo `helpers/cartFunctions`;
  > Leia com bastante atenção a função para entender seu funcionamento.
- Uma requisição deve ser feita utilizando a função `fetchProduct` para obter os detalhes do produto;
  > Leia com bastante atenção a função para entender seu funcionamento.

- Com os dados do produtos retornados, você deve adicionar o produto ao carrinho de compras, utilize a função `createCartProductElement` (que se encontra no arquivo `shopFunction.js`) para criar os componentes _HTML_ referentes a um produto do carrinho;

- Adicione o elemento retornado da função `createCartElement(product)` como filho do elemento `<ol class="cart__products">`.

> **De olho na dica:** A função `createProductElement()` é a responsável por criar o botão, talvez seja um local interessante para adicionar o evento de click 👀.

**O que será testado:**

- O elemento com classe `.cart__products` deve exibir o produto adicionado, apresentando corretamente suas informações de id, título e preço.

</details>

## 9. Carregue o carrinho de compras ao iniciar a página

<details>
  <summary>
    Recupere os itens adicionados no carrinho de compras do <code>localStorage</code>
  </summary> <br />

Ao carregar a página, o estado atual do carrinho de compras deve ser carregado do **LocalStorage**. Para isso, você deve utilizar a função `getSavedCartIDs`, que já está implementada no arquivo `helpers/cartFunctions`.

Note que o retorno da função `getSavedCartIDs` é um array de ids, você deve utilizar a função `fetchProduct` para cada um desses ids e recuperar as informações de cada produto.

No entanto, é importante manter a ordem que os produtos foram adicionados ao carrinho, para isso, você deve utilizar o método [`Promise.all`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) para aguardar a resposta de todas as requisições e só então adicionar os produtos ao carrinho.
> **Dica:** Você pode utilizar o método `map` para iterar sobre o array de ids e retornar um array de promises.
> Use a mesma função `createCartProductElement` do requisito anterior para criar os componentes _HTML_ dos produtos.

**O que será testado:**

- Ao carregar a página, o carrinho de compras deve ser carregado com todos os produtos na mesma ordem que foram adicionados anteriormente.
- O carrinho de compras deve exibir corretamente o preço total dos produtos adicionados.

</details>

## 10. Calcule o valor total dos itens do carrinho de compras

<details>
  <summary>
    O elemento com o valor <strong>total</strong> dos produtos deve possuir a classe <code>total-price</code>
  </summary> <br />

Cada vez que o carrinho de compras é modificado, será necessário calcular o valor total dos produtos e apresentá-los na página principal do projeto. Para isso:

- O valor total do carrinho deve ser atualizado ao:
  - Adicionar um produto ao carrinho;
  - Remover um produto do carrinho.

- Adicione o valor total dos produtos ao elemento com a classe `total-price`.

- Ao atualizar a página o valor total deve ser mantido.

> **Lembre-se 💭:** Ao adicionar um produto no carrinho é realizada uma requisição para a API. Certifique-se de que a API já retornou as informações antes de realizar a soma dos produtos.
> **Dica:** Pense em uma forma de armazenar o valor total dos produtos para que você possa atualizá-lo a cada vez que um produto for adicionado ou removido do carrinho.

**O que será testado:**

- Verifica se o valor total dos itens do carrinho de compras é atualizado após a adição ou remoção de um produto.
- Verifica se o valor total dos itens permanece o mesmo após atualizar a página.

</details>

## 11. Faça uma requisição a API de CEPs e exiba o endereço do CEP

<details>
  <summary>
    Crie um elemento <code>span</code> com o <strong>endereço</strong> completo do CEP
  </summary> <br />

  Você deverá fazer uma requisição para as APIs de CEPs e exibir o endereço completo do CEP na tela.

  Para isso, você deve implementar a função `getAddress` que já está criada no arquivo `helpers/cepFunctions.js`, que deverá realizar a requisição para a API de CEPs e retornar o endereço completo do CEP.
  
  Porém ela irá funcionar de uma maneira um pouco diferente das outras requisições, pois ela fará a requisição para 2 APIs de CEP diferentes e você deverá utilizar a que retornar primeiro.
  Para isso você deverá utilizar o método [`Promise.any`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any).

  Os _endpoints_ das APIs são:

  - <https://cep.awesomeapi.com.br/json/$CEP>
    <details>
    <summary>Retorno da API</summary><br />
      https://cep.awesomeapi.com.br/json/01001000
      ```json
      {
        "cep": "01001000",
        "address_type": "Praça",
        "address_name": "da Sé",
        "address": "Praça da Sé", // Rua
        "state": "SP", // Estado
        "district": "Sé", // Bairro
        "lat": "-23.55068",
        "lng": "-46.63412",
        "city": "São Paulo", // Cidade
        "city_ibge": "3550308",
        "ddd": "11"
      }
      ```
    </details>
  - <https://brasilapi.com.br/api/cep/v2/$CEP>
    <details>
    <summary>Retorno da API</summary><br />
      https://brasilapi.com.br/api/cep/v2/01001000
      ```json
      {
        "cep": "01001000",
        "state": "SP", // Estado
        "city": "São Paulo", // Cidade
        "neighborhood": "Sé", // Bairro
        "street": "Praça da Sé", // Rua
        "service": "correios",
        "location": {
          "type": "Point",
          "coordinates": {
            "longitude": "-46.633080956332904",
            "latitude": "-23.550389799999998"
          }
        }
      }
      ```
    </details>

  Onde `$CEP` é o CEP digitado pelo usuário no input de CEP com a classe `cep-input`

  > Obs: Note as APIs possuem chaves diferentes, mas os valores que iremos utilizar são os mesmos, portanto sua função deverá ser capaz de utilizar ambas APIs, independente de qual retornar primeiro.

  Implemente a função `searchCep` que já está criada no arquivo `helpers/cepFunctions.js`
  - Ela deverá chamar a função `getAddress` com o CEP digitado no input e exibir o endereço completo na tela.
  - Essa função só deve ser executada após o usuário digitar o CEP com 8 dígitos e pressionar o botão de buscar CEP com a classe `cep-button`.
  > A função `searchCep` já está sendo chamada ao clicar no botão `Buscar CEP`, você só precisa implementa-la.
  
  - Exiba dentro do elemento `span`(já está criado) com a classe `cart__address` o endereço completo da seguinte forma:

  `Rua - Bairro - Cidade - Estado`

  Exemplo:

  ```html
  <span class="cart__address">Praça da Sé - Sé - São Paulo - SP</span>
  ```

  Caso ambas as APIs retornem erro, exiba o texto `CEP não encontrado` no elemento com a classe `cart__address`:

  Caso queira você também pode consultar suas documentações

  - [Documentação AwesomeAPI](https://docs.awesomeapi.com.br/api-cep)
  - [Documentação BrasilAPI](https://brasilapi.com.br/docs#tag/CEP)

  **O que será testado:**

  - Verifica se o método `Promise.any` é utilizado
  - Verifica se o endereço é exibido após o CEP ser digitado
  - Verifica se a mensagem `CEP não encontrado` é exibida caso o CEP não exista

</details>
