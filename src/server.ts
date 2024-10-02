import { app } from '@src/app';
import { initializeDBConnection } from '@src/database/typeorm/data-source';

const PORT = process.env.PORT || 3333;

(async () => {
  await initializeDBConnection();
  app.listen(PORT, () =>
    // eslint-disable-next-line
    console.log(`✅ server is running at: http://localhost:${PORT}!`),
  );
})();
