import React, { useState, useEffect } from 'react';

function App() {
  const [stored, setStored] = useState(0);    // Total de paletes armazenados
  const [rejects, setRejects] = useState(0);  // Total de rejeitos

  // Calcula os paletes sem rejeição e a porcentagem
  const valid = stored - rejects;
  const percentage = stored > 0 ? ((valid / stored) * 100).toFixed(2) : 0;

  // Define a meta de 93%
  const targetPercentage = 93;

  // Função para tratar eventos de teclado
  const handleKeyDown = (e) => {
    if (e.key === '+') {
      setStored(prev => prev + 1);
    } else if (e.key === '-') {
      setRejects(prev => prev + 1);
    }
  };

  // Adiciona e remove o listener de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Funções para atualizar os valores manualmente
  const handleStoredChange = (e) => {
    setStored(Number(e.target.value));
  };

  const handleRejectsChange = (e) => {
    setRejects(Number(e.target.value));
  };

  // Define a cor de fundo com base na porcentagem
  const backgroundColor = percentage >= targetPercentage ? 'green' : 'red';

  return (
    <div style={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor }}>
      <h1>1BTTRANS</h1>
      <div style={{ border: '1px solid #ccc', padding: '40px', display: 'inline-block' }}>
        <h2>PALETES TOTAL: {stored}</h2>
        <h2>BDP: {percentage}%</h2>
      </div>
      <div style={{ marginTop: '40px' }}>
        <h3>BDP TOTAL: {valid}</h3>
      </div>
      <div style={{ marginTop: '40px' }}>
        <p>Pressione a tecla "+" para adicionar um palete armazenado</p>
        <p>Pressione a tecla "-" para registrar um rejeito</p>
      </div>
      <div style={{ marginTop: '40px' }}>
        <label>
          Paletes Armazenados:
          <input type="number" value={stored} onChange={handleStoredChange} />
        </label>
        <br />
        <label>
          Rejeitos:
          <input type="number" value={rejects} onChange={handleRejectsChange} />
        </label>
      </div>
    </div>
  );
}

export default App;
