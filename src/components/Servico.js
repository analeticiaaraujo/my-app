import React from 'react';

function ServiceCard({ imageSrc, name, type, description }) {
  return (
    <div style={styles.card}>
      <img 
        src={imageSrc} // Caminho da imagem passado como prop
        alt={name}
        style={styles.image}
      />
      <h2 style={styles.title}>{name}</h2>
      <p style={styles.type}>{type}</p>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

// Estilos para a div e elementos
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '16px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  title: {
    fontSize: '20px',
    margin: '8px 0',
  },
  type: {
    fontSize: '16px',
    color: '#555',
    margin: '4px 0',
  },
  description: {
    fontSize: '14px',
    color: '#333',
    margin: '8px 0',
  },
};

export default ServiceCard;
