# syntax=docker/dockerfile:1
FROM node:18-alpine AS builder
WORKDIR /app
COPY ./ /app
RUN npm i
RUN npm run compile


FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build /app/build
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/tsconfig.json /app/tsconfig.json
EXPOSE 4242
CMD ["TS_NODE_BASEURL=/app/build", "node", "-r", "tsconfig-paths/register", "/app/build/index.js"]  