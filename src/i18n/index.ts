import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import { resources } from "@/i18n/resources";

type resourceKeys = keyof typeof resources.pl;

const namespaces: Array<resourceKeys> = ["common"];
const defaultNamespace: resourceKeys = "common";

void i18n.use(initReactI18next).init({
  ns: namespaces,
  resources,
  lng: "pl",
  fallbackLng: "pl",
  defaultNS: defaultNamespace,
  interpolation: {
    escapeValue: false,
  },
  react: {},
});

export default i18n;
