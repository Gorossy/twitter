const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", userRoutes);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

try {
  mongoose.connect("mongodb+srv://goro:Xpe4ozWGqFA0nDPr@cluster0.umvvjyf.mongodb.net/test?retryWrites=true&w=majority")
  console.log("Connected to MongoDB");
} catch (error) {
    console.log("Could not connect to MongoDB");
}

app.listen(port, () => console.log("server listening on port: " + port));