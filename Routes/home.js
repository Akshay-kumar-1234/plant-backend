import express from 'express'
import { bucketsAPI,influxDB } from '../db/influx.js'

import { checkConnection, queryData } from "../Controller/home.js";

const InfluxRouter = express.Router();

InfluxRouter.get("/check", checkConnection);
InfluxRouter.get("/data", queryData);

export default InfluxRouter;
