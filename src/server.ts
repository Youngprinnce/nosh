import app from './app';

const port = process.env.PORT || 80;
const appName = process.env.APP_NAME || 'APP';
app.listen(port, () => console.log(`${appName} Server running on port ${port} and env == ${process.env.NODE_ENV}`));
