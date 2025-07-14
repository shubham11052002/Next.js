"use client"

export default function Home() {
  const handleclickMe = async () => {
    let data = {
      name: "Akshay Singh",
      age: 30,
      city: "Delhi"
    };
    let a = await fetch("api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data })
    });
    let res = await a.json();
    console.log(res);

  }
  return (
    <div>
      <h1>this is api route in Next.js</h1>
      <button onClick={handleclickMe}>Click me </button>
    </div>
  );
}
