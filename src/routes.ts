import { fastify, type FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async () => {
    return { hello: 'world' }
  })

  fastify.get<{ Params: { id: string }, Body: {hello: string}}>('/users/:id', (request) => {
    console.log('CHECK',request.params, request.body)
    return { id: request.params.id, body: request.body }
  })
}

export default routes;