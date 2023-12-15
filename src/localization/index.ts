import "server-only";
import type { Locale } from "../../i18n.config";

let en = import("@/localization/en.json");
let es = import("@/localization/es.json");

export const getDictionary = async (locale: Locale) => {
  if (locale == "es") {
    let dictionary = await es;
    return dictionary.default;
  }

  let dictionary = await en;
  return dictionary.default;
};
