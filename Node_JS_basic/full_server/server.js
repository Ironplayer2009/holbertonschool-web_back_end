import express from 'express';
import routes from './routes';

const PORT = 1245;
const app = express();

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server use: ${PORT}`);
});

export default app;
