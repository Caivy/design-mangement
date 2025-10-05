import { createServer } from 'http';
import handler from './dist/server/server.js';

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const server = createServer(async (req, res) => {
  try {
    const response = await handler.fetch(new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    }));

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (error) {
    console.error('Server error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
