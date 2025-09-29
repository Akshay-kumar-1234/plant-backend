import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
// import home from "./Routes/home.js";
import InfluxRouter from './Routes/home.js';
dotenv.config();
const app = express();
app.use(express.json())


app.use(cors({
    origin: 'http://localhost:8081',  // <-- frontend origin
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.options('*', cors());


app.get('/', (req, res) => {
  res.json({ message: "hiii " })
});


//Api route made by me 
app.use('/influx',InfluxRouter);


// // const Server=app.listen(3001)  // this already present 
 const PORT = process.env.PORT || 3001; 


// // done by me for the app 
const Server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});



