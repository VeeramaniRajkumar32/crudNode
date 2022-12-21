const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => {
    console.log(`connect`);
  })
  .catch((error) => {
    console.log(error);
  });
