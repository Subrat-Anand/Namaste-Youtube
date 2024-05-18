import React, { useState } from 'react';

const Demo = () => {
  const [text, setText] = useState("");
  const [isDark, setIsDark] = useState(false);
  console.log("Rendering...");

  return (
    <div className={`m-2 p-2 border border-black w-96 h-96 ${isDark ? 'bg-black text-white' : ''}`}>
      Demo
      <button className='bg-pink-500 p-2 m-2 rounded-lg' onClick={() => setIsDark(!isDark)}>
        Toggle
      </button>
      <div>
        <input 
          className='border border-black w-72 px-2' 
          type='text' 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          style={isDark ? {color: 'blue'} : {}} 
        />
      </div>
      {
        text && (<h1 className='font-bold p-2'>{`Typing: ${text}`}</h1>)
      }

    </div>
  );
};

export default Demo;
