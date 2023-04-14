import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';
import { userRoutes } from '../routes';

const server = new Elysia();
server.use(swagger());

server.group('/api', (e) => {
    e.use(userRoutes);
    
    return e;
})

server.get('/', () => 'hi')
server.listen(3000);

console.log(`🦊 Elysia is running at ${server.server?.hostname}:${server.server?.port}`)
