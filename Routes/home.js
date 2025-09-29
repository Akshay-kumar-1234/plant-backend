import express from 'express'
import { bucketsAPI,influxDB } from '../db/influx.js'

import { checkConnection, queryData } from "../Controller/home.js";

const InfluxRouter = express.Router();


// done by me 

router.options('*', (req, res) => res.sendStatus(200));


InfluxRouter.get("/check", checkConnection);
InfluxRouter.get("/data", queryData);

export default InfluxRouter;
