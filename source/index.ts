import Fastify from 'fastify'
import { lintText } from './modules/linter'

const fastify = Fastify({
  logger: true,
})

fastify.post<{ Body: { code: string } }>('/lint', async (request, reply) => {
  const linted = await lintText(request.body.code)
  reply.status(200).send(linted)
})

fastify.listen({ port: 4242 }, (err) => {
  if (err) throw err
})
