require("dotenv").config(); 

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
 
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connected"))
.catch(err => console.log("DB error:", err));

app.get("/", (req, res) => {
  res.send("Server running!");
});

app.listen(5000, () => console.log("Server started on port 5000"));
