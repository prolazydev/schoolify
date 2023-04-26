import Elysia from "elysia";

const userRoutes = (app: Elysia) => {
    app.group('/user', u => {
        u.get('', res => {
            return res;
        });
        
        u.get('/test', () => {
            return 'test';
        });

        return u;
    });

    return app;
}
    

// const userRoutes: Elysia = new (Elysia);

// userRoutes.group('/user', app => {
//     app.get('/test', res => {
//         return 'yay :D';
//     });

//     return app;
// });

export default userRoutes;