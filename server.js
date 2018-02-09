const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // server.get('/people', (req, res) => {
    //   console.log(`
    //     Express server received GET /people
    //     \treq.query: ${JSON.stringify(req.query)}
    //     \treq.params: ${JSON.stringify(req.params)}
    //   `)
    //   const actualPage = '/ping'
    //   const queryParams = { }
    //   app.render(req, res, actualPage, queryParams)
    // })

    // server.get('/people/:slug', (req, res) => {
    //   console.log(`
    //     Express server received GET /people/${req.params.slug}
    //     \treq.query: ${JSON.stringify(req.query)}
    //     \treq.params: ${JSON.stringify(req.params)}
    //   `)
    //   const actualPage = '/ping'
    //   const queryParams = { slug: req.params.slug, name: req.params.name }
    //   app.render(req, res, actualPage, queryParams)
    // })

    // server.get('/people/:slug/:name', (req, res) => {
    //   console.log(`
    //     Express server received GET /people/${req.params.slug}/${req.params.name}
    //     \treq.query: ${JSON.stringify(req.query)}
    //     \treq.params: ${JSON.stringify(req.params)}
    //   `)
    //   const actualPage = '/ping'
    //   const queryParams = { slug: req.params.slug, name: req.params.name }
    //   app.render(req, res, actualPage, queryParams)
    // })

    // server.get('/ping', (req, res) => { // SSR for the /ping page in NextJS
    //   console.log(`
    //     Express server received GET /ping
    //     \treq.query: ${JSON.stringify(req.query)}
    //     \treq.params: ${JSON.stringify(req.params)}
    //   `)
    //   return app.render(req, res, '/ping', req.query)
    // })

    server.get('/test', (req, res) => { // Does not use NextJS app at all
      console.log('Express server solely responsible for processing GET /test')
      const result = { success: true, message: 'Back-end server is online.' }
      return res.json(result)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
