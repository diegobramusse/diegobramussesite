# Site de Diego Bramusse

Projeto React + Vite preparado para publicação na Vercel.

## Rodar no computador

Instale o Node.js 20.19 ou superior. Na pasta do projeto:

```bash
npm install
npm run dev
```

Abra o endereço local que aparecer no terminal.

## Gerar a versão de publicação

```bash
npm run build
```

Os arquivos prontos ficam em `dist/`. Essa pasta é gerada automaticamente e não deve ser enviada ao GitHub.

## Onde editar

- `src/App.jsx`: textos e estrutura da página.
- `src/style.css`: cores, fontes, layout e responsividade.
- `public/`: sua logo e as imagens.
- `index.html`: título e descrição exibidos pelos buscadores.

## Publicar via GitHub e Vercel

1. Crie um repositório no GitHub e envie o conteúdo desta pasta, incluindo `package-lock.json`. Não envie `node_modules` nem `dist`.
2. Na Vercel, escolha **Add New > Project**, conecte sua conta do GitHub e importe o repositório.
3. Confirme **Framework Preset: Vite**, **Build Command: npm run build** e **Output Directory: dist**. Clique em **Deploy**.
4. Teste o endereço temporário `*.vercel.app` antes de adicionar o domínio.
5. Em **Project > Settings > Domains**, adicione seu domínio. Copie os registros DNS que a Vercel mostrar para o painel onde seu domínio foi registrado. Preserve os registros de e-mail existentes, se houver.

O site atual é uma página estática. O botão de contato abre o Instagram, então não depende de backend.
