require('newrelic');
import * as express from 'express';
import * as next from 'next';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

type APIResponse = {
  success: boolean;
  message: string;
};

app.prepare()
  .then(() => {
    const server = express();

    server.get('/people', (req, res) => {
      const actualPage = '/ping';
      const queryParams = {};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/people/:slug', (req, res) => {
      const actualPage = '/ping';
      const queryParams = { slug: req.params.slug, name: req.params.name };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/people/:slug/:name', (req, res) => {
      const actualPage = '/ping';
      const queryParams = { slug: req.params.slug, name: req.params.name };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/ping', (req, res) => { // SSR for the /ping page in NextJS
      return app.render(req, res, '/ping', req.query);
    });

    server.get('/redux', (req, res) => { // SSR for the /redux page in NextJS
      return app.render(req, res, '/redux', req.query);
    });

    server.get('/test', (_, res) => { // Does not use NextJS app at all
      const result: APIResponse = { success: true, message: 'Back-end server is online.' };
      return res.json(result);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) { throw err; }
    });
  });
