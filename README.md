<h1 align="center"> Personal Card </h1>

<p align="center">
Projeto pessoal para praticar conhecimentos adquiridos em React JS.
</p>

<p align="center">
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Aprendizado">O que aprendi</a>
</p>

<br>

<p align="center">
  <img alt="personalcard" src=".github/bg-cover.png" width="100%">
</p>

## Tecnologias

Esse projeto será desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript e JSON
- [Tailwind CSS](https://tailwindcss.com/)
- [Node e NPM](https://nodejs.org/)
- [Vite](https://vitejs.dev/)
- [React](https://pt-br.reactjs.org/)

## Projeto

O Personal Card é um componente que exibe um resumo das informações profissionais, e direciona para posterior contato através das redes sociais.
### Requisitos funcionais

- O usuário poderá visualizar um cartão de apresentação padrão conforme especificações de layout;
- O usuário poderá criar o seu próprio cartão preenchendo um formulário com os requisitos;
- O usuário poderá exportar o cartão em formato PDF ou PNG.

## Desenvolvimento
### Sprint 1: Construção do cartão padrão
Inicio: 24/10/2022 | Fim: 31/10/2022

**Tarefas**
- [x] Inicializar projeto
  - [x] Configurar arquivos iniciais e instalar dependências
  - [x] Construir README
- [x] Criar componente Header contendo foto, nome e cargo
- [x] Criar componente Main contendo informações sobre a pessoa do cartão
- [x] Criar componente Skills contendo ícones representantes das habilidades
- [x] Criar componente Contact com ícones representantes dos contatos

### Sprint 2: Construção do cartão padrão
Inicio: 31/10/2022 | Fim: 07/11/2022

**Tarefas**
- [x] Criar componentes de formulário para entrada de dados do usuário

### Sprint 3: Construção do cartão padrão
Inicio: 07/11/2022 | Fim: 14/11/2022

- [x] Separar componentes CardDefault (cartão padrão) e CardCreate (cartão criado pelo usuário)
- [x] Criar componente multi seletor para que o usuário possa selecionar suas skills

### Sprint 4: Construção do cartão padrão
Inicio: 21/11/2022 | Fim: 28/11/2022
- [x] Fazer com que o form inicialize escondido e surja em formato de modal quando o botão "Criar seu cartão" for acionado
- [x] Implementar botão para fechar a criação de novo cartão e retornar ao cartão padrão

### Sprint 5: Construção do cartão padrão
Inicio: 28/11/2022 | Fim: 05/12/2022
- [x] Criar funções para armazenar dados de entrada e gerar cartão customizado

A ideia é criar componentes novos com dados recebidos através de props;
Todos os componentes que irão compor o PersonalCard, receberão as props e serão montados com os dados;
Os icones das habilidades devem ser montados pelas imagens dos icones, de acordo com a seleção feita pelo usuário.

### Sprint 6: Mudanças na arquitetura da aplicação
Inicio: 05/12/2022 | Fim: 12/12/2022

Até aqui durante o desenvolvimento, me deparei com a seguinte questão:

*Como manipular os dados inseridos pelo usuário ao criar um novo cartão, de modo renderizar o cartão padrão com as novas informaçõe?*

Lembrando que a ideia original é mostrar o cartão principal; caso usuário deseje criar o seu próprio cartão, um outro componente será mostrado com os campos a serem preenchidos, enquanto que o cartão padrão deixa de ser mostrado temporariamente. Após preencher os campos, ao clicar em gerar cartão, o cartão padrão é exibido com as novas informações.

A solução que encontrei não parecia natural nem performática; consegui apenas a renderização condicional dos componentes, porém, não consegui manipular os dados entre os componentes. Poderia fazê-lo via props, mas a complexidade seria ainda maior.

Buscando uma maneira de simplificar, estudando a documentação do React, percebi que o mesmo possui a função [Context API](https://reactjs.org/docs/context.html), utilizada para transportar dados entre os componentes.

Após estudar sobre o tema, criei um projeto [react-context-api](https://github.com/vieira-a/react-context-api) para aplicar o conhecimento, simulando a aplicação a este projeto. Agora devo aplicar ao TypeScript.

- [x] Criar arquivo de contexto contendo as informações do cartão padrão;
- [ ] Importar os dados do contexto para cada subcomponente do PersonalCard (componente principal);
- [ ] Criar um custom hook para manipular a renderização dos componentes:
  - [ ] Ao clicar na opção para criar novo cartão, deve-se abrir o formulário para preenchimento;
  - [ ] Ao clicar em gerar cartão, o PersonalCard deve ser exibido com as informações alteradas.

## Layout

Utilizei o Figma para construção dos componentes e montagem do layout .

## Aprendizado

Aprimorei meus conhecimentos de Figma para construção de layout organizado através de componentes interativos que simulam sua utilização.

---

Feito por [Anderson Vieira](https://linkedin/in/vieira-a)
