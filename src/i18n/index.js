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
    left: "SECRETARIAT OF NATIONAL SOVEREIGNTY AND CITIZENSHIP AFFAIRS | GENERAL COORDINATION OF CONSULAR ADMINISTRATION",
    right: "SCI.ng - Integrated Consular System - NEW GENERATION - Version: 1.24.14.3",
  },
  pt: {
    left: "SECRETARIA DE ASSUNTOS DE SOBERANIA NACIONAL E CIDADANIA | COORDENACAO-GERAL DE ADMINISTRACAO CONSULAR",
    right: "SCI.ng - Sistema Consular Integrado - NOVA GERACAO - Versao: 1.24.14.3",
  },
  fr: {
    left: "SECRETARIAT DES AFFAIRES DE SOUVERAINETE NATIONALE ET DE CITOYENNETE | COORDINATION GENERALE DE L'ADMINISTRATION CONSULAIRE",
    right: "SCI.ng - Systeme Consulaire Integre - NOUVELLE GENERATION - Version : 1.24.14.3",
  },
  de: {
    left: "SEKRETARIAT FUR ANGELEGENHEITEN DER NATIONALEN SOUVERANITAT UND STAATSBURGERSCHAFT | GENERALKOORDINATION DER KONSULARVERWALTUNG",
    right: "SCI.ng - Integriertes Konsularsystem - NEUE GENERATION - Version: 1.24.14.3",
  },
  es: {
    left: "SECRETARIA DE ASUNTOS DE SOBERANIA NACIONAL Y CIUDADANIA | COORDINACION GENERAL DE ADMINISTRACION CONSULAR",
    right: "SCI.ng - Sistema Consular Integrado - NUEVA GENERACION - Version: 1.24.14.3",
  },
};

Object.entries(footerTranslations).forEach(([language, values]) => {
  i18n.addResource(language, "translation", "visaTemplateFooterLeft", values.left);
  i18n.addResource(language, "translation", "visaTemplateFooterRight", values.right);
});

export default i18n;
