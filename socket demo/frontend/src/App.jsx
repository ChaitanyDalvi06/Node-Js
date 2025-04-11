import { useEffect, useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'

const socket = io("http://localhost:8000")

function App() {

  let [message, setMessage] = useState("")
  let [messages, setMessages] = useState([])


  useEffect(() => {
    socket.on("toclient", (data) => {
      setMessages((prevValue) => {
        return [...prevValue, data]
      })
    })
  }, [])

  function sendMessage() {
    socket.emit("message", message)
  }


  return (
    <>
      <h1>welcome to kuch bhi chat</h1>
      <input type='text' onChange={(event) => {
        setMessage(event.target.value)
      }
      } ></input>

      <button onClick={sendMessage} >  send message</button>

      {
        messages.map((msg) => {
          <p>{msg}</p>
        })
      }
    </>
  )
}

export default App
