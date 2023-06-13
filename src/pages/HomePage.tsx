import React from "react";
import i18next from '../i18n'

export function HomePage() {
  return (
    <div>
      <h1 className="title"> HOME</h1>
      i18next.t('hello')
    </div>
  )
}