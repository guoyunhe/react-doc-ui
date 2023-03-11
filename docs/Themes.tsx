import { DocCodeBlock } from 'react-spd';

const json = `
{
  "name": "Chair",
  "quantity": 12,
  "price": 899,
  "instock": false,
  "description": null
}
`;

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>
`;

const css = `
/* Comment */

@import url('../what.css');

body {
  color: #ffffff;
  background-color: rgba(255,255,255,1);
  font-size: 12px;
}

@media screen and (min-width: 1200px) {
  .main-content > .card:first-child {
    height: 100vh;
  }
}
`;

export default function Themes() {
  return (
    <div>
      <h2>HTML</h2>
      <DocCodeBlock language="json">{json}</DocCodeBlock>
      <DocCodeBlock language="markup">{html}</DocCodeBlock>
      <DocCodeBlock language="css">{css}</DocCodeBlock>
    </div>
  );
}
