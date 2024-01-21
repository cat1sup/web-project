import express from "express";
import env from "dotenv";
import cors from "cors";
import db_init from "./entities/db_init";
import masterRouter from "./routes/masterRouter";
import conferenceRouter from "./routes/conferenceRouter";

env.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const corsOptions = {
    origin: 'https://localhost:3000',
    methods: 'GET,PUT,PATCH,POST,DELETE'
};

app.use(cors(corsOptions));

db_init();

app.use('/api', masterRouter);
app.use('/api', conferenceRouter);

const port = process.env.PORT || 8001;
app.listen(port);
console.log('API is running at port ' + port);