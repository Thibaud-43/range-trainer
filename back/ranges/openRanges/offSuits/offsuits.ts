import { sign } from "crypto";
import { aces } from "./aces";
import { eight } from "./eight";
import { five } from "./five";
import { four } from "./four";
import { jacks } from "./jacks";
import { kings } from "./kings";
import { nine } from "./nine";
import { queens } from "./queens";
import { seven } from "./seven";
import { six } from "./six";
import { ten } from "./ten";
import { three } from "./three";

const offsuits = [
  ...aces,
  ...kings,
  ...queens,
  ...jacks,
  ...ten,
  ...nine,
  ...eight,
  ...seven,
  ...six,
  ...five,
  ...four,
  ...three,
];

export default offsuits;
