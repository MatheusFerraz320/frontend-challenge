# EVOB Cursos - Front-end Challenge

Teste tecnico front-end , desenvolvido com com Next.js, React e TypeScript.

A ideia do projeto e permitir que uma pessoa veja os cursos disponiveis, acesse detalhes de um curso, simule um fluxo de login/cadastro e navegue por uma experiencia visual proxima ao layout proposto.

## O que foi construido

- Listagem de cursos na home
- Busca de cursos por modal na navbar
- Favoritar cursos localmente
- Secao de cursos favoritos
- Pagina de detalhes do curso
- Acoes de favoritar e iniciar curso na pagina de detalhe
- Tela de login com toast de sucesso
- Tela de cadastro com validacao simples
- Tela de sucesso apos cadastro
- Layout compartilhado para telas de autenticacao
- Navbar responsiva
- Footer responsivo
- Consumo da API de cursos atraves de rotas internas do Next

## Rotas

```txt
/                         Lista de cursos
/courses/[id]             Detalhes do curso
/login                    Login mockado
/register                 Cadastro
/register/success         Sucesso do cadastro
/api/courses              Proxy para listar cursos
/api/courses/[id]         Proxy para detalhes do curso
```

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Sonner para toast

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com a URL base da API:

```env
URL_CS=https://sua-api-aqui.com
```

Depois rode o projeto:

```bash
npm run dev
```

Acesse:

```txt
http://localhost:3000
```

## Scripts disponiveis

```bash
npm run dev
```

Roda a aplicacao em modo desenvolvimento.

```bash
npm run build
```

Gera a build de producao.

```bash
npm run start
```

Roda a build de producao.

```bash
npm run lint
```

Executa o lint do projeto.

## Variavel de ambiente

O projeto usa a variavel `URL_CS` para buscar os cursos na API externa.

As rotas internas fazem o proxy:

- `src/app/api/courses/route.ts`
- `src/app/api/courses/[id]/route.ts`

Isso evita chamar a API externa diretamente dos componentes de tela e deixa o consumo mais organizado.

## Organizacao principal

```txt
src/
  app/
    page.tsx
    courses/[id]/page.tsx
    login/page.tsx
    register/page.tsx
    register/success/page.tsx
    api/courses/

  components/
    AuthLayout.tsx
    AuthLogo.tsx
    Navbar.tsx
    HeroBanner.tsx
    CourseCard.tsx
    CourseSection.tsx
    FavoriteSection.tsx
    LoadingAnimation.tsx
    Footer.tsx

  services/
    courses/fetchCourses.ts
    fetchCourseDetails.ts

  utils/
    filterCourse.ts
    validateRegister.ts
```

## Decisoes de implementacao

O layout de autenticacao foi separado em `AuthLayout` para evitar duplicacao entre cadastro e sucesso.

O logo foi componentizado em `AuthLogo`, juntando imagem e texto em um unico componente reutilizavel.

A busca da navbar foi movida para um modal simples. Assim a navbar fica limpa e a logica de filtro fica concentrada em um lugar so.

O login e um mock: ele valida campos, mostra toast de sucesso e redireciona para a home. O cadastro tambem e local e usa validacao simples.

## Pontos de UX

- Estados de loading para carregamento de cursos
- Mensagens de erro simples
- Toast ao fazer login
- Busca em modal
- Favoritos na home
- Ajustes de responsividade em mobile

## Validacao feita

Foram usados:

```bash
npx tsc --noEmit
npm run lint
```

O lint pode apontar warnings em pontos como uso de `<img>` em alguns componentes e imports antigos nao utilizados, mas sem erro bloqueante de TypeScript.

## Melhorias futuras

- Persistir login e favoritos em storage ou backend
- Implementar inscricao real no curso

