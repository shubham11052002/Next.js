"use client"
import { useState } from 'react';
import Navbar from './components/Navbar';
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <h1>Shubham Sharma</h1>
      <h1>count is {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>click me </button>
    </div>
  );
}
