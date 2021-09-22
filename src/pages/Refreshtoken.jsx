import React, { useState } from 'react';
import SessionController from '../networking/controllers/SessionController';

const Refreshtoken = () => {
  // eslint-disable-next-line no-shadow
  const [Refreshtoken, setRefreshToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SessionController.Refreshtoken(Refreshtoken);
  };
  return (
    <div className="refresh">
      <form onSubmit={handleSubmit}>
        <input type="text" id="Refreshtoken" value={Refreshtoken} onChange={(e) => setRefreshToken(e.target.value)} />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default Refreshtoken;
