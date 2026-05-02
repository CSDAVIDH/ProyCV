# David Condori — Portfólio

Portfólio profissional de **David Hilarion Condori Sullcani**, Engenheiro de Sistemas.

## Stack

- [Next.js 16](https://nextjs.org/) — framework React
- [Tailwind CSS](https://tailwindcss.com/) — estilização
- [Framer Motion](https://www.framer.com/motion/) — animações
- [Upstash Redis](https://upstash.com/) — contador de visitas

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz com as credenciais do Upstash (ver `.env.local.example`).

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `COUNTAPI_NAMESPACE` (opcional, usado como fallback se Upstash não estiver configurado)

## Deploy

Recomendado: [Vercel](https://vercel.com). Conecte o repositório e adicione as variáveis de ambiente no painel.
