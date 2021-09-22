import React from 'react';
import './style.css';
import Menu from './components/header/Menu';

export default function App() {
  const titulo = 'Mi aplicacion en StackBlitz';
  return (
    <div>
      <Menu titulo={titulo} />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
