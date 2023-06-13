import React from "react";
// import '../i18n'
import { useTranslation } from "react-i18next";
import { Icon } from '@iconify/react';
import i18n from "../i18n";


export function HomePage() {

  const { t } = useTranslation(["translation", "common"]);
  t("key");

  const changeLang = ((lang: string) => {
    if (lang === "it") {
      i18n.changeLanguage('it-IT');
    }
    if (lang === "en") {
      i18n.changeLanguage('en-US');
    }
  });

  return (
    <div>
      <div>
      <h1 className="title"> HOME</h1>
      <h2>{t('hello')}</h2>
      <span>
        {t("welcome")} USER! {t("selectLanguage")} 
      </span>
      </div>
      <div>
        <Icon width="40" icon="openmoji:flag-italy"
        cursor={"pointer"}
        onClick= { () => changeLang("it")}/>
        <Icon width="40" icon="openmoji:flag-us-outlying-islands" 
        cursor={"pointer"}
        onClick= { () => changeLang("en")}/>
      </div>
    </div>
  )
}