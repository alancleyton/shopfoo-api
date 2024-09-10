import { app } from '@src/app';

const PORT = 3333;

app.listen(PORT, () =>
  // eslint-disable-next-line
  console.log(`✅ server is running at: http://localhost:${PORT}!`),
);
