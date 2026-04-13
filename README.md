README — Projeto Frontend (React + Vite)

**Resumo:** instruções práticas para rodar, testar, desenvolver e realizar o deploy da aplicação frontend Dogs (React + Vite). Vá direto ao ponto.

## Índice

- [Configuração do Frontend](#configuração-do-frontend)
  - [Stack principal](#stack-principal)
  - [Pré-requisitos](#pré-requisitos)
- [Rodando local (desenvolvimento)](#rodando-local-desenvolvimento)
- [Build e Deploy](#build-e-deploy)
- [Comandos úteis (resumo)](#comandos-úteis-resumo)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Sobre o Projeto](#sobre-o-projeto)

---

## Configuração do Frontend

### Stack principal

- Node 18 (recomendado)
- npm (ou pnpm)
- React 19 (Hooks, Context API)
- Vite 8
- React Router DOM v7 (configurado com HashRouter para GitHub Pages)
- Victory (Gráficos e Estatísticas de usuário)
- vite-plugin-svgr (Componentização de SVGs)
- ESLint

### Pré-requisitos

- instalar e usar a versão correta do node: `nvm install 18` e `nvm use 18` (ou versão superior).
- gerenciador de pacotes: `npm` (padrão) ou `pnpm`.

---

## Rodando local (desenvolvimento)

Instale as dependências:

```bash
npm install
Inicie o servidor dev local:

Bash
npm run dev
Acessos:

Web (Dev): http://localhost:5173

Build e Deploy
O projeto está configurado para automação de deploy contínuo (CI/CD simples) na branch gh-pages.

Gerar build de produção localmente (otimização e minificação):

Bash
npm run build
Visualizar o build gerado localmente:

Bash
npm run preview
Subir para Produção (Deploy no GitHub Pages):

Bash
npm run deploy
Nota: Este comando executa o script predeploy automaticamente, gerando a pasta dist e empurrando os artefatos estáticos para a branch de deploy.

Comandos úteis (resumo)
Iniciar dev server:

Bash
npm run dev
Limpar e formatar código com ESLint:

Bash
npm run lint
npm run lint:fix
Gerar Deploy Oficial:

Bash
npm run deploy
Estrutura do projeto
Plaintext
src/
├── Assets/           # SVGs e imagens estáticas (favicon, ícones)
├── Components/       # Componentes organizados por domínio e UI globais
│   ├── Feed/         # Lógica do feed, modal e itens de foto
│   ├── Forms/        # Inputs e Botões padronizados
│   ├── Helper/       # Utilitários (Error, Head, Image, Loading, ProtectedRoute)
│   ├── Login/        # Fluxo de autenticação (LoginCreate, PasswordLost, Reset, etc.)
│   ├── Photo/        # Visualização da foto, comentários e exclusão
│   ├── User/         # Dashboard, postagem e gráficos de estatísticas (Victory)
│   ├── Footer.jsx    # Rodapé global
│   ├── Header.jsx    # Cabeçalho global com navegação
│   ├── Home.jsx      # Página inicial (Renderiza o Feed global)
│   └── NotFound.jsx  # Página 404 personalizada
├── Hooks/            # Custom Hooks para abstração de lógica
│   ├── useFetch.jsx  # Wrapper poderoso para requisições com gestão de estado
│   ├── useForm.jsx   # Hook de validação de formulários via Regex
│   └── useMedia.jsx  # Controle de responsividade baseado em CSS media queries
├── api.jsx           # Concentração de todos os endpoints da aplicação
├── App.css           # Estilos e variáveis globais
├── App.jsx           # Estrutura principal do Layout e Ponto de entrada do HashRouter
├── index.jsx         # Ponto de montagem raiz do React no DOM
└── UserContext.jsx   # Context API para gerenciamento do estado global do usuário
Sobre o Projeto
Aplicação de rede social focada em upload e engajamento de fotos de pets.

O backend da aplicação foi desenvolvido em PHP, utilizando a estrutura e o banco de dados do WordPress (Headless CMS) para gerenciar a API REST e a persistência dos dados.

No frontend, o foco deste desenvolvimento foi a consolidação de conhecimentos avançados no ecossistema React, incluindo:

Autenticação via JWT com persistência.

Segurança no Client-Side (Validação restrita de peso de arquivos).

Tratamento avançado de SEO dinâmico via React.

Renderização pesada sob demanda (Lazy Loading) com gráficos da biblioteca Victory.

Autor: Luigi Martins

Deploy: https://luigi-martins.github.io/dogs/
```
