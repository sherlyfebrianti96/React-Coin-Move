import {v4 as uuid} from "uuid";
import {CoinValueEnum} from "../enum/CoinValueEnum";

export interface CoinValueInterface {
  id: typeof uuid,
  content: CoinValueEnum
}