import { Express, Request, Response, NextFunction } from 'express';

export function errorRoute(app: Express) {
  app.get('/', (_, res) => {
    res.status(200).send({message: 'Welcome to the API'});
  });
  //custom 404 response
  app.use((req: Request, res: Response) => {
    res.type('application/json');
    res.status(404);
    res.json({ message: '404 - Not Found' });
  });

  // custom 500 response
  app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.type('application/json');
    res.status(500);
    res.json({ message: '500 - Server Error' });
  });
}
