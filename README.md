# README — Projeto Dogs (Frontend & API)

**Resumo:** instruções práticas para rodar, testar e desenvolver o frontend (React + Vite) e integrar com o backend (WordPress Headless). 

---

## Índice

- [README — Projeto Dogs (Frontend & API)](#readme--projeto-dogs-frontend--api)
  - [Índice](#índice)
- [Sobre o Projeto](#sobre-o-projeto)
- [Configuração do Backend](#configuração-do-backend)
- [Configuração do Frontend](#configuração-do-frontend)
    - [Rodar local](#rodar-local)
    - [Build e Deploy](#build-e-deploy)
    - [Lint e Formatação](#lint-e-formatação)
- [Comandos úteis (resumo)](#comandos-úteis-resumo)
- [Estrutura do projeto (frontend)](#estrutura-do-projeto-frontend)

---

# Sobre o Projeto

O **Dogs** é uma rede social para pets onde usuários podem postar fotos, visualizar o feed, conferir estatísticas e interagir. 

O projeto foi desenvolvido para consolidar conhecimentos avançados em React, focando em:
* **Autenticação:** JWT com persistência e rotas protegidas.
* **Performance:** Lazy loading de componentes e gráficos.
* **UX/UI:** Custom Hooks para validação de formulários e acessibilidade.
* **API:** Integração com WordPress configurado como Headless CMS.

**Deploy:** [https://luigi-martins.github.io/dogs/](https://luigi-martins.github.io/dogs/)

---

# Configuração do Backend

**Stack principal**
* PHP / WordPress (Headless)
* API REST do WordPress
* JSON Web Token (JWT) Authentication for WP REST API

---

# Configuração do Frontend

**Stack**
* React 19 + Vite 8
* React Router DOM v7 (HashRouter)
* Victory (Gráficos)
* ESLint / vite-plugin-svgr
* Custom Hooks (useFetch, useForm, useMedia)

**Pré-requisitos**
* Node 18+: `nvm install 18 && nvm use 18`
* Gerenciador de pacotes: `npm` ou `pnpm`

### Rodar local

1. Instalar dependências:
```bash
npm install
```

2. Iniciar dev server:
```
npm run dev
```
3. Acessos:
   
* Web (Dev): http://localhost:5173

# **Build e Deploy**
1. Gerar build de produção:
```bash
npm run build
```
2. Visualizar build localmente:
```bash
npm run preview
```
3. Realizar deploy(GitHub Pages):
```bash
npm run deploy
```

# **Lint e Formatação**
```bash
npm run lint
npm run lint:fix
```

# #Comandos úteis (resumo)
* **Iniciar dev server:**
```bash
npm run dev
```
* **Limpar erros de lint:**
```bash
npm run lint:fix
```
* **Gerar build de produção:**
```bash
npm run build
```
* **Publicar no GitHub Pages**
```bash
npm run deploy
```

# Estrutura do projeto (frontend)
```bash
src/
├── Assets/           # SVGs e imagens estáticas
├── Components/       # Componentes por domínio e globais
│   ├── Feed/         # Lógica do feed e fotos
│   ├── Forms/        # Componentes de formulário (Input, Button)
│   ├── Helper/       # Utilitários (Loading, Error, ProtectedRoute)
│   ├── Login/        # Fluxo de login e cadastro
│   ├── Photo/        # Visualização única e comentários
│   ├── User/         # Dashboard e postagem do usuário
│   ├── Footer.jsx    # Rodapé
│   └── Header.jsx    # Cabeçalho
├── Hooks/            # Custom Hooks (useFetch, useForm, useMedia)
├── api.jsx           # Configuração dos endpoints
├── App.jsx           # Layout principal e rotas
├── UserContext.jsx   # Estado global de autenticação
└── index.jsx         # Entrada do React
```

