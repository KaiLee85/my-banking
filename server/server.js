import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://mybanking:mybanking@mybanking.aoggz8g.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("mongooDB is connected"))
  .catch((err) => console.log(err));

// await mongoose.connect(
//   "mongodb+srv://mybanking:mybanking@mybanking.aoggz8g.mongodb.net/?retryWrites=true&w=majority"
// );
// console.log("mongooDB is connected");

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/transaction", (req, res) => {
  console.log(req.body);
  // res.json("from server");
});

app.listen(PORT, () => {
  console.log("server is running");
});
