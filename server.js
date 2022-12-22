import express from "express";
import cors from 'cors';
import emailInsightController from "./controllers/emailInsightController.js";


const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';
const UPLOAD = 'storage/uploads';
// dbConfig();
// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/test', express.static('test'));
// app.use('/', app)
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
const server = app.listen(+PORT, HOST, () => { });


app.post('/oneai/email-insight', (req, res) => {
    console.log("started")
    new emailInsightController(req, res).showInghts()
})

function closeGracefully(signal) {
    server.close(() => {
        console.log(`'HTTP server closed'`)
    })
}

process.on('SIGTERM', closeGracefully)