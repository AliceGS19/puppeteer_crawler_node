# puppeteer_crawler_node
Aplicação cria servidor para servidor REST que retorna dados de um webcrawller criado com puppeteer.

---

# Bibliotecas utilizadas:

- dotenv;
- express;
- puppeteer;

---

# Mais sobre o projeto:
  
Linguagen:
- JavaScript(node.js)

---

# Requerimentos para rodar o projeto localmente:

- Gerenciadores de pacotes(como npm ou yarn);

---

# Baixando e rodando o projeto localmente (necessária a instalação do git na maquina local e configuração com sua conta no github):

- Navegue até a pasta onde deseja coloca alocar este repositório;

- Execute o comando git clone https://github.com/AliceGS19/puppeteer_crawler_node.git;

- Navegue até o repositório com o comando cd puppeteer_crawler_node;

- Execute o comando npm install (para gerenciador de pacotes npm) ou yarn add 
(para gerenciador de pacotes yarn) para instalar as dependências do projeto;


- Execute o comando npm start para iniciar a aplicação.

---

# Funcionalidades da aplicação por rota por método http:

---

# Rota /crawlers/webcrawller/notebooks :
- método http:
- get;

Não necessita de body ou headers.

Pode receber o parametro de rota "brand" que altera a marca dos produtos retornados.
Ex: passando /crawlers/webcrawller/notebooks?brand=Lenovo a rota retornará apenas
produtos Lenovo.


# Casos:

- Caso ocorra tudo certo retorna status 200 e uma lista com todos os produtos da
marca passada no parâmetro de rota (caso não receba, retornará todos os produtos lenovo),
ordenados pelo preço mais baixo, no corpo da resposta.
