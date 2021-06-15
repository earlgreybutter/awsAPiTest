import express, { json } from "express";
import hbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import resultData from "./src/ec2_describeinstances.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());

// middleware 사용
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout.hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

var jsonParse = JSON.parse(resultData);
var gridData = jsonParse["Reservations"];
var gridStr = JSON.stringify(gridData);
app.get("/", (req, res) => {
  res.render("main.hbs", { gridStr });
});

app.listen(3000);
console.log("app running on port ", 3000);
