import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
const app = express();
const PORT = 3000;

//helmet set up (secruity)
app.use(helmet());

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/projectAlpha', {
    useMongoClient: true
});

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);