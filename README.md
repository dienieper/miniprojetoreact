# Indicadores do mês

Aplicação React para visualizar indicadores mensais em cards de comparação. Cada card apresenta um título, um número principal, o percentual em relação ao mês anterior e uma indicação visual de alta ou baixa.

**Demo:** `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`

## Funcionalidades

- Exibição de cards com título e valor principal
- Comparação percentual com o mês anterior
- Estado positivo em verde com a mensagem **Acima do mês anterior**
- Estado negativo em vermelho com a mensagem **Abaixo do mês anterior**
- Layout responsivo para desktop e mobile
- Componente reutilizável controlado apenas por props, sem state

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript
- CSS
- GitHub Actions e GitHub Pages

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm

## Como executar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Verificar o lint
npm run lint

# Build de produção
npm run build

# Visualizar o build localmente
npm run preview
```

O servidor de desenvolvimento abre em `http://localhost:5173` por padrão.

## Componente de card

O componente está em `src/components/ComparisonCard/ComparisonCard.jsx` e recebe as seguintes props:

```jsx
<ComparisonCard
  title="Receita total"
  value="R$ 48.250"
  percentage={12.4}
  isPositive
/>
```

| Prop         | Tipo      | Descrição                                     |
| ------------ | --------- | --------------------------------------------- |
| `title`      | `string`  | Título exibido no topo do card                |
| `value`      | `string`  | Número ou valor principal                     |
| `percentage` | `number`  | Percentual de comparação                      |
| `isPositive` | `boolean` | Define se a comparação é positiva ou negativa |

O CSS do componente fica na mesma pasta, em `ComparisonCard.css`.

## Estrutura do projeto

```text
miniprojetoreact/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Deploy automático no GitHub Pages
├── public/                  # Arquivos públicos
├── src/
│   ├── components/
│   │   └── ComparisonCard/
│   │       ├── ComparisonCard.jsx
│   │       └── ComparisonCard.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Deploy no GitHub Pages

O deploy acontece automaticamente a cada push na branch `main`, por meio do workflow em `.github/workflows/deploy.yml`.

Para ativar o Pages no repositório:

1. Acesse **Settings > Pages** no GitHub.
2. Em **Build and deployment > Source**, selecione **GitHub Actions**.
3. Faça push deste projeto para a branch `main`.
4. Acesse a URL exibida na seção **Pages** após a conclusão do workflow.

O `vite.config.js` configura automaticamente o caminho base para repositórios de projeto e também funciona para repositórios `usuario.github.io`.

## Licença

Este projeto é disponibilizado para fins de estudo e demonstração.
