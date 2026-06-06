import { defaultLocale, type Locale } from "./config";
import en from "./dictionaries/en.json";
import de from "./dictionaries/de.json";
import fr from "./dictionaries/fr.json";

const dicts = { en, de, fr } as const;

export function getDictionary(locale: Locale) {
  return dicts[locale] ?? dicts[defaultLocale];
}
