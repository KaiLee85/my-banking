import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;
const app = express();
app.use(cors());
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

app.listen(PORT, () => {
  console.log("server is running");
});
