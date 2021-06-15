import express from "express";
import hbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import Reflection from "./src/controllers/Reflection.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());

// middleware 사용
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout.hbs",
    // partialsDir: "partials",
  })
);
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home", {});
});

// app.get("/", (req, res) => {
//   return res
//     .status(200)
//     .send({ message: "YAY! Congratulations! Your first endpoint is working" });
// });

app.use((req, res) => {
  res.render("404");
});

app.listen(3000);
console.log("app running on port ", 3000);

app.get("/resultData", Reflection.getAll);
