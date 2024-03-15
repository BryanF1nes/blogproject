// import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {

const [ data, setData ] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/');
      
      if(!response.ok) {
        throw new Error(`HTTP Error! Status ${response.status}`);
      }

      const value = await response.json();
      console.log(value.message)
      setData(value);
      
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Blog Api</h1>
      <p>Testing my REST API - Running on <a target='_blank' href='https://expressjs.com/'>ExpressJS</a> and <a target='_blank' href='https://react.dev/'>React</a>.</p>
      <button onClick={() => fetchData()}>Fetch Data</button>
      <p>{data}</p>
    </>
  )
}

export default App
