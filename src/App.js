import React from 'react';
import ServiceCard from './components/Servico';

function App() {
  const services = [
    {
      imageSrc: '/imgs/baba-1.png',
      name: 'Lúcia',
      type: 'Babá',
      description: 'Cuido do seu pet como se fosse meu, oferecendo brincadeiras, alimentação e carinho para que ele se sinta seguro e feliz.',
    },
    {
      imageSrc: '/imgs/veterinario-1.jpg',
      name: 'Maria Helena',
      type: 'Veterinária',
      description: 'Veterinária apaixonada por cuidar de animais e garantir seu bem-estar, unindo conhecimento científico e carinho para tratamentos eficazes.',
    },
    {
      imageSrc: '/imgs/hotel-1.jpg',
      name: 'Bom para cachorro',
      type: 'Hotel',
      description: 'Hotel para pets com ambiente seguro e confortável, onde seu animalzinho recebe carinho, atenção e diversão durante a sua ausência.',
    },
    {
      imageSrc: '/imgs/hotel-2.jpg',
      name: 'StarPet',
      type: 'Hotel',
      description: 'Oferecemos hospedagem de qualidade para seu pet, com atividades diárias, alimentação balanceada e espaço para socializar e relaxar.',
    },
    {
      imageSrc: '/imgs/pet-shop-1.png',
      name: 'Petshop da Vânia',
      type: 'Petshop',
      description: 'Seu destino de confiança para cuidados, brinquedos e alimentação de qualidade, garantindo felicidade e saúde para seu pet.',
    },
    {
      imageSrc: '/imgs/petshop-2.jpg',
      name: 'Petshop Estrela',
      type: 'Petshop',
      description: 'Petshop completo, oferecendo produtos de qualidade, serviços de banho e tosa, e tudo o que seu amigo de quatro patas precisa.',
    },
    {
      imageSrc: '/imgs/veterinario-2.jpg',
      name: 'Clínica veterinária da Dr. Claudia',
      type: 'Veterinário',
      description: 'Profissional dedicada à saúde animal, oferecendo diagnósticos precisos e tratamentos com compaixão para cada paciente de quatro patas.',
    },
    {
      imageSrc: '/imgs/baba-2.jpg',
      name: 'João Pedro',
      type: 'Babá',
      description: 'Babá de pet confiável e atenciosa, garantindo que seu animalzinho receba amor, cuidados e atenção enquanto você está fora.',
    },
    // Adicione quantos serviços quiser
  ];

  return (
    <div style={styles.container}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          imageSrc={service.imageSrc}
          name={service.name}
          type={service.type}
          description={service.description}
        />
      ))}
    </div>
  );
}

// Estilo do container para os cartões
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px', // Espaço entre os cartões
  },
};

export default App;
