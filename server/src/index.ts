import { Elysia, ws } from 'elysia';
import { cors } from '@elysiajs/cors';
import { userRoutes } from '../routes';

const app = new Elysia();
app.use(cors());
app.use(ws());

app.group('/api', (e) => {
    e.use(userRoutes);

    return e;
});

app.get('/', () => 'hi');

app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;