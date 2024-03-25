import './App.css'

function App() {
  return (
    <>
      <div>App</div>
      <button onClick={async () => {
        const response = await fetch("/api")
        const data = await response.text()
        alert(JSON.stringify(data))
      }}>Click me</button>
    </>
  )
}

export default App
