const express = require("express");
var cors = require("cors");
var indexRouter = require("./routes/index");

const app = express();
const port = 5000;
app.use(cors());

app.use("/", indexRouter);
app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
