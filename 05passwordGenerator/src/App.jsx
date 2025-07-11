import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass = '';
    let str= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(numberAllowed){
      str += '0123456789';
    } 
    if(charAllowed) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?';
    }
    for(let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);

  },[length, numberAllowed,charAllowed,setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 2); // For mobile devices
    window.navigator.clipboard.writeText(Password)
  }, [Password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md
     rounded-xl px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow py-3 rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value = {Password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>
        </div>

        <div className='flex text-sm gap-x-2 mb-4'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={100}
            className='cursor-pointer'
            name='range'
            onChange={(e) => setLength(e.target.value)}/>
            <label htmlFor="range">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            name='number'
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}/>
            <label htmlFor="number">Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="characters" 
            checked={charAllowed} 
            onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characters">Include Character</label>
          </div>
        </div>

     </div>

    </>
  )
}

export default App
