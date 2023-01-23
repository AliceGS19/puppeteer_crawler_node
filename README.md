# puppeteer_crawler_node
Aplicação cria servidor para servidor REST que retorna dados de um webcrawller criado com puppeteer.

---

# Bibliotecas utilizadas:

- dotenv;
- express;
- puppeteer;
- jsonwebtoken;
- mongodb

---

# Mais sobre o projeto:
  
Linguagen:
- JavaScript(node.js)

---

# Requerimentos para rodar o projeto localmente:

- Gerenciadores de pacotes(como npm ou yarn);
- Instalação do BD mongoDB;

---

# Baixando e rodando o projeto localmente (necessária a instalação do git na maquina local e configuração com sua conta no github):

- Navegue até a pasta onde deseja coloca alocar este repositório;

- Execute o comando git clone https://github.com/AliceGS19/puppeteer_crawler_node.git;

- Navegue até o repositório com o comando cd puppeteer_crawler_node;

- Execute o comando npm install (para gerenciador de pacotes npm) ou yarn add 
(para gerenciador de pacotes yarn) para instalar as dependências do projeto;

- Crie um arquivo .env na raiz do projeto, seguindo o modelo do arquivo .env.example, 
passando as configurações para o conexão com seu banco de dados e o segredo para geração
do token JWT.

DB_URL: String de conexão com seu MongoDB;
DB_NAME: Nome da sua escolha para o seu banco de dados.
SECRET_KEY: Segredo utilizado para geração do token JWT.

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

---

# Rota /crawlers/webcrawller/authenticate/notebooks :
- método http:
- get;

Necessita do header "api_key"

Pode receber o parametro de rota "brand" que altera a marca dos produtos retornados.
Ex: passando /crawlers/webcrawller/notebooks?brand=Lenovo a rota retornará apenas
produtos Lenovo.


# Casos:

- Caso ocorra tudo certo retorna status 200 e uma lista com todos os produtos da
marca passada no parâmetro de rota (caso não receba, retornará todos os produtos lenovo),
ordenados pelo preço mais baixo, no corpo da resposta.

- Caso não seja passado (ou seja passado vazio) o header "api_key" retorna status 401
e um objeto no formato { message: "Token not found" }

- Caso seja passado um token que não esteja salvo em um usuário (registro na collection users)
retorna status 401 e um objeto no formato { message: "Invalid token" }

---

# Rota /users
- método http:
- post;

Fortemente recomendado passar um objeto no body no formato { login: string, password: string }

OBS: Não foram implementadas validações sobre o body, mas caso essas duas chaves não sejam passadas,
quando houver a tentativa de consulta do token (rota que será comentada a seguir) não será possível
pois a consulta é baseada nos campos "login" e "password" de uma entidade "user".

# Casos:

- Caso ocorra tudo certo retorna status 201 e um objeto no formato { access_token: token(string) }
além de gerar um registro no banco de dados na collection "users".

---

# Rota /users/token
- método http:
- post

Espera receber um body no formato { login: string, password: string }

OBS: Validações não foram implementadas para garantir o formato, mas é
fortemente recomendado que o mesmo seja seguido

# Casos:

- Caso ocorra tudo certo recebe status 200 e um objeto no formato { access_token: token(string) }

- Caso nenhum resultado seja retornado na consulta no banco, retorna status 404 e um objeto
no formato { message: "User token not found" }.
