import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { Position, RangeType } from "../domain/types";
import { buildDependencies } from "./buildDependencies";
import { generateSpot } from "../domain/generateSpot";

dotenv.config();

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;
type Foo = {
  position?: Position;
  rangeType?: RangeType;
};

app.get("/", (req: Request<{}, {}, {}, Foo>, res: Response) => {
  const position = req.query.position;
  const rangeType = req.query.rangeType;
  if (!rangeType) {
    return "error";
  }
  const dependencies = buildDependencies();
  const spot = generateSpot(dependencies)({ position, rangeType });
  res.send(spot);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
