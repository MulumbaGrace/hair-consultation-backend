const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

const consultationRoutes = require('./routers/consultationRouter');
app.use('/consultations', consultationRoutes);


app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});
  