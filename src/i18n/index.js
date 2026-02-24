import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import pt from "./locales/pt.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import es from "./locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
    fr: { translation: fr },
    de: { translation: de },
    es: { translation: es },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const footerTranslations = {
  en: {
    left: "Secretaria de Assuntos de Soberania Nacional e Cidadania | Coordenação-geral de Administração Consular",
    right: "SCI.ng - Sistema Consular Integrado • NOVA GERAÇÃO - Versão: 1.24.14.3",
  },
  pt: {
    left: "Secretaria de Assuntos de Soberania Nacional e Cidadania | Coordenação-geral de Administração Consular",
    right: "SCI.ng - Sistema Consular Integrado • NOVA GERAÇÃO - Versão: 1.24.14.3",
  },
  fr: {
    left: "Secretaria de Assuntos de Soberania Nacional e Cidadania | Coordenação-geral de Administração Consular",
    right: "SCI.ng - Sistema Consular Integrado • NOVA GERAÇÃO - Versão: 1.24.14.3",
  },
  de: {
    left: "Secretaria de Assuntos de Soberania Nacional e Cidadania | Coordenação-geral de Administração Consular",
    right: "SCI.ng - Sistema Consular Integrado • NOVA GERAÇÃO - Versão: 1.24.14.3",
  },
  es: {
    left: "Secretaria de Assuntos de Soberania Nacional e Cidadania | Coordenação-geral de Administração Consular",
    right: "SCI.ng - Sistema Consular Integrado - NUEVA GENERACION - Version: 1.24.14.3",
  },
};

Object.entries(footerTranslations).forEach(([language, values]) => {
  i18n.addResource(language, "translation", "visaTemplateFooterLeft", values.left);
  i18n.addResource(language, "translation", "visaTemplateFooterRight", values.right);
});

export default i18n;
