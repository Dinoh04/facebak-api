import fastify from "fastify";
import {commentRoutes} from "./modules/comment";
import {postRoutes} from "./modules/post";
import {schemas} from "./modules/shared";
import {userRoutes} from "./modules/user";

const DEFAULT_OPTIONS = {
  logger: true,
};

export const buildServer = (opts: Record<string, unknown> = {}) => {
  const server = fastify({...DEFAULT_OPTIONS, ...opts});

  schemas.forEach((schema) => {
    server.addSchema(schema);
  });

  // do not want to use prefix here
  server.register(commentRoutes);
  server.register(postRoutes);
  server.register(userRoutes);

  return server;
};
