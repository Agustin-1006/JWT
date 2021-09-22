import React, { useState } from 'react';
import SessionController from '../networking/controllers/SessionController';

const Autenticado = () => {
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SessionController.Autenticado(token);
  };
  return (
    <div className="Autenticado">
      <form onSubmit={handleSubmit}>
        <input type="text" id="token" value={token} onChange={(e) => setToken(e.target.value)} />
        <button type="submit">Shere</button>
      </form>
    </div>
  );
};

export default Autenticado;
