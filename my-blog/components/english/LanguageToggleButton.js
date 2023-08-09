import { useState } from 'react';

function LanguageToggleButton() {
  const [language, setLanguage] = useState('pt-br'); // Defina o idioma inicial

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'pt' : 'en'));
    // Adicione a lógica para atualizar o idioma em toda a aplicação
  };

  return (
    <button onClick={toggleLanguage}>
      {language === 'en' ? 'Português' : 'English'}
    </button>
  );
}

export default LanguageToggleButton;
