import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import routes from './src/routes/applicationRoutes.js';
import jsonwebtoken from 'jsonwebtoken';
const app = express();
const PORT = 3000;

//helmet set up (security)
app.use(helmet());

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/projectAlpha', {
    useMongoClient: true
});

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);


//JWT SET UP
app.use((req, res, next)=> {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode)=>{
            if (err) req.user = undefined;
            req.user = decode;
            next();
        })
    }
    else{
        req.user = undefined;
        next();
    }
})


// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);