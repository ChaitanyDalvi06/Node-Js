import { useParams } from 'react-router-dom'
import styles from '../App.module.css'
import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

function ChatRoom() {
    const params = useParams() 

    let [message, setMessage] = useState("")
    let [username, setUsername] = useState("")
    let socket = useRef(null)
    let [messages, setMessages] = useState([])

    useEffect(() => {
        socket.current = io('http://localhost:8000')

        socket.current.emit('joinRoom', { roomname: params.roomname, username: "Chaitanya" }) 
        socket.current.on('roomJoined', (data) => {
            console.log(data)
        })

        socket.current.on('getChat', (data) => {
            setMessages((prevValue) => {
                return [...prevValue, data]
            })
        })

        return () => {
            socket.current.disconnect()
        }
    }, [])

    function sendChatMessage() {
        socket.current.emit("createChat", { roomname: params.roomname, username: username, message: message })
    }

    return (
        <div className={styles.chatroom}>
            <div className={styles.chatlogger}>
                {
                    messages.map((msg) => {
                        return (
                            <div>
                                <p>{msg.username}</p>
                                <p>{msg.message}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.createchat}>
                <input type='text' onChange={(event) => {
                    setUsername(event.target.value)
                }} placeholder='Write Name' />
                <input type='text' onChange={(event) => {
                    setMessage(event.target.value)
                }} placeholder='Write message' />
                <button onClick={sendChatMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatRoom