require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const apiProductRoute = require("./api/routes/product.route");
const authRoute = require("./api/routes/auth.route");
const app = express();
const port = process.env.PORT || 8090;
const cors = require("cors");
const cookieParser = require("cookie-parser");


console.log(process.env.SESSION_SECRET); //Show process environment info or env variable
app.use(cors());
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(cookieParser(process.env.SESSION_SECRET));



app.use(authRoute);

app.use("/api/products", apiProductRoute);

app.listen(port, () => console.log("Server is listening on port " + port));
