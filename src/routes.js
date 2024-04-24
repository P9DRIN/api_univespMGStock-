import express from 'express'
import { index, remove, store, update } from './controllers/ProductController.js'
import { validateId } from './middlewares/ProductMiddleware.js';


const routes = express.Router()

routes.get('/products', index)

routes.post('/products', store)

routes.put('/products/:id', validateId, update)

routes.delete('/products/:id', validateId, remove)

export default routes