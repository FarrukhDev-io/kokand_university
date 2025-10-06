import { useLanguage } from '@/contexts/LanguageContext'
// import React from 'react'




const Future = () => {

    const { t } = useLanguage();
  return (
    <div>
        <div>
            <p>{t.Keljak.title}</p>
        </div>
    </div>
    

  )
}

export default Future