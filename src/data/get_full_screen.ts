import axios from "axios";
import { IScreen } from "../types/types";

export const getFullScreen = async (screen: IScreen): Promise<string> => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      axios
        .get(`${process.env.ESERVER_BASE_PAGE}${screen.link}`, {
          responseType: "arraybuffer",
        })
        .then((response) =>
          resolve(Buffer.from(response.data, "binary").toString("base64"))
        );
    } catch (err) {
      reject(err);
    }
  });
};
