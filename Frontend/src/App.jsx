import './App.css'
import Header from "@/components/Header";
import Hero from "@/components/Hero";

function App() {
  

  return (
    <>
     <Header />
     <Hero />
      <h1 className="text-4xl font-bold text-green-500">Frontend Set up</h1>
      <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        ADD
      </button>
    </>
  )
}

export default App
