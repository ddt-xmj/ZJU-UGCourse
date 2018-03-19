import path from 'path';
import express from 'express';
import session from 'express-session';

let app = express();

app.get('/config', (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.set("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
  res.send(JSON.stringify({
    isAuth: true,
  }));
})
;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(session({
  secret: 'LoveSy',
}));

app.listen(3000);

