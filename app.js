// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cors = require("cors");

// var indexRouter = require("./routes/index");

// var app = express();

// // view engine setup

// app.use("/", indexRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
// 	next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get("env") === "development" ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render("error");
// });

// var PORT = 5000;
// app.use(cors());

// app.listen(PORT, function (err) {
// 	if (err) console.log("Error in server setup");
// 	console.log("Server listening on Port", PORT);
// });

// module.exports = app;

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
