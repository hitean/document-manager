import React from 'react';
import Background from './components/Background.jsx';
import Foreground from './components/Foreground.jsx';


function App() {
  return (
    <>
      <div className='relative h-screen w-full bg-zinc-800'>
        <Background />
       <Foreground/>
      
      </div>
    </>
  );
}

export default App;
