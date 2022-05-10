import Fastify from 'fastify'
import { lintText } from './modules/linter'
import { transpileText } from './modules/transpiler'

const fastify = Fastify({
  logger: true,
})

fastify.post<{ Body: { code: string } }>(
  '/code/validate/js',
  async (request, reply) => {
    const linted = await lintText(request.body.code)
    if (!linted.error) {
      const transformed = transpileText(request.body.code)
      reply.status(200).send(transformed)
    } else {
      reply.status(200).send(linted)
    }
  }
)

fastify.listen({ port: 4242 }, (err) => {
  if (err) throw err
})
