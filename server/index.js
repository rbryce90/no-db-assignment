const express = require('express');
const bodyParser = require('body-parser');
const pc = require('./controllers/posts_controller');



const app = express();
app.use(bodyParser.json());

app.get('/api/posts', pc.read);
app.post('/api/posts', pc.create);
app.delete('/api/posts/:id', pc.delete);
app.put('/api/posts/:id', pc.update)


const PORT = 4000;
app.listen(PORT, () => console.log('Server is working, YO'));

