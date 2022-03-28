import {useRef, useState} from 'react';

import { generatePwd } from './PasswordGenerator';

import './App.css';


function App() {

  const hasNumbers = useRef(); //hasNumbers.current.checked
  const hasSymbols = useRef(); //hasSymbols.current.checked
  const count = useRef(); //count.current.value
  const password = useRef(); //password.current.value
  const form = useRef();
  const copyBtn= useRef();

  const [countError, setCountError] = useState(false);
  const [copyError, setCopyError] = useState(true);



  const generatePassword = () => {
    setCountError(false);
    if(copyBtn.current){
      copyBtn.current.textContent = "Copy";
    }
    if(count.current.value === ''){
      count.current.value = '8';
    }
    if(+count.current.value < 8 || +count.current.value > 64){
      setCountError(true);
    }  else {
      password.current.textContent = generatePwd(hasNumbers.current.checked, hasSymbols.current.checked, +count.current.value);
      setCopyError(false);
    }

  }

  const copyPassword = () => {
    if(password.current.textContent !== ''){
      navigator.clipboard.writeText(password.current.textContent);
      copyBtn.current.textContent = 'Copied!';
    } else {
      setCopyError(true);
    }
    }

  return (
    <div className="App font-[Inter] h-full bg-[#0e1728]">
      <div className="max-w-3xl mx-auto">
      <header className="header pt-20">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center underline underline-offset-8 decoration-sky-500 decoration-wavy decoration-2">Password Generator</h1>
      </header>

      <main className="main mx-auto mt-20 px-4 py-10 bg-[#131b2e] w-[90%] sm:w-[75%] text-center rounded flex flex-col items-center text-white">
      <div className="resize-none text-s flex items-center justify-center text-center h-[100px] w-[90%]  ring-slate-900/10 shadow-sm rounded-md bg-slate-800 ring-0 highlight-white/5 mb-10 cursor-pointer" disabled rows="3" spellCheck="false" >
        <p ref={password}  className="w-full px-2 break-words"></p>
      </div>

      <div className="px-10">
    <form ref={form}>
      <div className="flex items-center w-full mb-5">
      
      <label htmlFor="numbers" className="flex items-center cursor-pointer w-full">
      <div className="mr-2 sm:mr-10 text-gray-500 text-md sm:text-2xl  font-medium">
          Include Numbers
        </div>
        <div className="relative">
          <input type="checkbox" id="numbers" className="sr-only" name="numbers" ref={hasNumbers} />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
       
      </label>
      </div>

      <div className="flex items-center justify-center w-full mb-5">
      
      <label htmlFor="symbols" className="flex items-center cursor-pointer w-full">
      <div className="mr-2 sm:mr-10 text-gray-500 text-md sm:text-2xl font-medium">
          Include Symbols
        </div>
        <div className="relative">
          <input type="checkbox" id="symbols" className="sr-only" name="symbols" ref={hasSymbols}/>
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        
      </label>
      </div>

      <div className="flex items-center justify-center w-full mb-5">
      
      <label htmlFor="count" className="flex items-center justify-center w-full">
      <div className="mr-2 sm:mr-10 text-gray-500 text-md sm:text-2xl font-medium">
           Characters
        </div>
          <input type="number" id="count" name="count" min="8" max="64" className="text-s p-2 w-[50px] sm:w-[100px] ring-slate-900/10 shadow-sm rounded-md bg-slate-800 ring-0 highlight-white/5" onChange = {() => setCountError(false)} ref={count} placeholder="8" required/>
        
      </label>
     
      </div>
      {countError && <p className='text-red-600'>Enter a number between 8 and 64!</p> }
      </form>
      </div>

      <div className="flex gap-10">
         <button className=" bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-lg mt-10 disabled:cursor-not-allowed disabled:bg-sky-700 hover:none" onClick={generatePassword}>Generate</button>

       {!copyError && <button className=" border-2 border-sky-500 text-white py-2 px-4 rounded-lg mt-10" onClick={copyPassword} ref={copyBtn}>Copy</button>} 
      </div>
       
      </main>
      </div>
      
      

<hr className="mt-20 border-gray-200 sm:mx-auto dark:border-gray-700 " />
<span className="block text-sm text-gray-500 text-center dark:text-gray-400 py-10">Created by <a className='underline decoration-sky-500 decoration-wavy decoration-2' href="https://github.com/itsarvindhere">Arvind Rana</a>
</span>

    </div>
  );
}

export default App;
