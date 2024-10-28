Projeto de Listagem e Cadastro de Livros
Este projeto foi desenvolvido em React com TypeScript e segue as instruções do trabalho da faculdade para implementar uma aplicação de listagem de livros com controle de editoras e funcionalidades CRUD. Ele foi construído em duas etapas: inicialmente com React para a criação da interface e estrutura de dados, e posteriormente adaptado para o Next.js com uma API interna para gerenciamento de dados.

Estrutura do Projeto
1. Inicialização do Projeto
O projeto foi iniciado com o seguinte comando, usando o template TypeScript:
![image](https://github.com/user-attachments/assets/c4d9d163-9f84-4d3f-b4b7-3b04ecd9bb0c)
2. Estrutura de Pastas e Arquivos
O projeto foi organizado conforme as instruções, criando as pastas e arquivos essenciais:

Modelo (contém as classes de dados):
Editora.ts: Define a classe Editora com as propriedades codEditora e nome.
Livro.ts: Define a classe Livro com as propriedades codigo, codEditora, titulo, resumo e autores.
Controle (contém os controladores de dados):
ControleEditora.ts: Controlador para manipulação das editoras, com métodos para obter o nome da editora e listar editoras.
ControleLivros.ts: Controlador para manipulação dos livros, com métodos para listar, incluir e excluir livros.
Essas pastas foram organizadas dentro de src para manter o código organizado e modular.

3. Adição do Bootstrap
Para melhorar a aparência e responsividade da aplicação, o Bootstrap foi incluído no arquivo index.html localizado em public. O link foi adicionado no <head> para carregar o CSS do Bootstrap:
![image](https://github.com/user-attachments/assets/3298bc9e-ba66-41d7-9b78-ae592096364d)
4. Funcionalidades do Projeto
Listagem de Livros: Permite visualizar a lista de livros com título, resumo e autores.
Cadastro de Livros: Inclui um formulário para adicionar novos livros, selecionando uma editora.
Exclusão de Livros: Função para excluir um livro específico da lista.
5. Configuração do Git e GitHub
O projeto foi versionado com Git e adicionado ao GitHub para garantir o controle de versão e backup do código. Os comandos executados para configurar o repositório foram:
![image](https://github.com/user-attachments/assets/5cbafdbf-526a-49a5-99c0-d67e5ced46ac)
Dessa forma, o projeto ficou disponível no repositório GitHub, conforme solicitado.

6. Implementação de Funcionalidades com Next.js (Etapa Adicional)
Seguindo as instruções, também foi criado um projeto no Next.js para implementar uma API interna. Este projeto permite o gerenciamento dos dados de livros e editoras via rotas de API.

Os arquivos TypeScript de controle e modelo foram copiados do projeto React para o Next.js, mantendo a mesma estrutura de classes e controladores. A API interna foi implementada nos arquivos index.ts e [codigo].ts dentro de pages/api, para permitir operações CRUD com livros e editoras.

