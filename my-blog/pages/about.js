import LanguageToggleButton from '../components/LanguageToggleButton.js';
import Image from 'next/image';

function AboutPage() {
  return (
    <div>
      {/* ... Seu conteúdo existente ... */}
      
      <LanguageToggleButton />
      <Image
        src="/images/Eu.jpg"
        alt="Photo"
        width={325}
        height={350}
        priority
        className="alexsandro-image"
      />

      <div className="icon">
        {/* Ícones... */}
      </div>

      <p>
        Olá! Sou uma pessoa apaixonada por tecnologia e estou em uma jornada emocionante para me tornar um programador habilidoso. Desde que mergulhei no mundo da programação, tenho experimentado uma empolgante combinação de desafios e conquistas, o que tem aumentado ainda mais minha motivação para aprender e crescer.
      </p>
      
      <div>
        Linkedin [@Alexsandro](https://www.linkedin.com/in/alexsandro-gomes-dias-6698a8165/)
        <br />
        Twitter [@Alexsandro](https://twitter.com/alexsan58946064)
        <br />
        GitHub [@phospudim](https://github.com/Phospudim)
        <br />
        Instagram [@phospudim](https://www.instagram.com/phospudim/)
        <br />
        Email alexsandrogomesdias@gmail.com
      </div>
    </div>
  );
}

export default AboutPage;
