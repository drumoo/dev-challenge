# dev challenge
Desafios para você que quer trabalhar conosco!

#### - Mais sobre o desafio...

Fork este repositório e faça o desafio em um branch com o seu nome (exemplo: nome-sobrenome).

O seu objetivo principal é transformar o desafio em um protótipo funcional.

No seu projeto, crie um diretório chamado src. Todos os arquivos que você criar devem estar dentro desta pasta.

Assim que concluir o seu desafio, abra um pull request com suas alterações.


#### - O que vou fazer?

O teste é simples, você deverá criar uma ferramenta de busca chamada MultiSearch. O usuário deverá digitar um texto e, como resultado, serão listados todos os objetos do nosso sistema que corresponderem a essa busca. 

Vamos partir do princípio que temos um sistema ERP que armazena diferentes informações da empresa, como: Pedidos de Venda, Pedidos de Compra, Dados de Produtos, Dados de Equipamentos e Dados de Mão de Obra. 

O MultiSearch vai pesquisar nessas diferentes tabelas e mostrar os dados agrupados.


Para mostrar o seu desempenho como Full Stack, separamos o teste em duas partes:

#### 1) Frontend

No lado do Frontend, o desafio será criar uma tela que simule o resultado da nossa busca.
Para isso:

- HTML5/CSS3/JS e noções básicas de design
- Utilizar [AngularJS](https://angularjs.org) (ou [React](https://github.com/facebook/react), [Angular2+](https://github.com/angular/angular), [Vue.js](https://github.com/vuejs/vue))
- A pasta "layout" possui uma imagem de referência para o resultado e a logomarca já exportada para caso precise
- Inicialmente, criar um arquivo JSON chamado "data.json" com os dados de exemplo que serão utilizados para renderizar sua aplicação
- Sua aplicação deverá consultar seu arquivo JSON e responder com os objetos encontrados, simulando a consulta a uma API
- Faça bom uso das tags HTML5 e CSS3
- Sinta-se a vontade para tornar seu projeto responsivo
- Usar [Bootstrap](https://getbootstrap.com) pode ser uma boa ideia para acelerar o processo de design

#### 2) Backend

No lado do Backend, o desafio será criar uma API REST para o nosso buscador.
Para isso:

- Crie um projeto de API REST preferencialmente com [ASP.NET](https://www.asp.net) (ou [Node.js](https://nodejs.org))
- Para representar o banco de dados, disponibilizamos na pasta "data" um arquivo JSON para cada tabela do sistema. A sua aplicação deverá ler cada um desses arquivos quando estiver fazendo a busca
- Exponha um serviço de consulta que receba uma string com o texto buscado e retorne com os objetos encontrados em todas as tabelas do sistema
- Normalize os dados antes de enviar para o cliente

#### 3) Juntando tudo  \o/

Sabe o arquivo JSON que você criou no Frontend para simular os dados? Você não vai mais precisar fazer a leitura desse arquivo, pois agora o backend já está retornando os dados que vc precisa. Então você pode substituir a função de ler esse arquivo pela função de enviar a requisição para o backend. 

Assim:
- o usuário vai digitar um texto na tela
- o texto será enviado para o backend
- o backend vai ler os arquivos de dados e buscar quais objetos têm match com o texto buscado
- o backend vai devolver uma lista dos resultados encontrados
- o frontend vai exibir os resultados agrupados por tipo de objeto  


#### Dicas?

Keep it Simple!  :)


#### Em caso de dúvidas, abra uma issue. Não tenha vergonha de perguntar.


#### Até logo e bom trabalho!
