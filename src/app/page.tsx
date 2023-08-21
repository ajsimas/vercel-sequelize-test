'use client';
import {useState} from 'react';

export default function Home() {
  const [name, setName] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name);
    const response = await fetch('/api/name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    });

    if (!response.ok) {
      console.log('error');
    }

    const data = await response.json();
    console.log(data);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-blue-800"
            onChange={handleChange}
          />
        </div>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}
