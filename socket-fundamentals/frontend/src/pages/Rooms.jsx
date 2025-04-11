import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../app.module.css'

import { io } from 'socket.io-client'


function Rooms() {

  let [rooms,setRooms]= useState([]);

  useEffect(()=>{

    const socket = io("http://localhost:8000")

    socket.on("loadRooms",(data)=>{
      console.log(data)
      setRooms(data)
    })

    return ()=>{
        socket.disconnect()
    }

  },[])

  return (
    <>

      <div className={styles.chat}>

      <h1>Welcome to kuch bhi chat rooms</h1>

      {
        rooms.map((room,index)=>{
          return(
            <div className={styles.room} key={index}>
              <h2>{room}</h2>
              <Link to={"/chatroom/"+room} className={styles.button}>Join Room</Link>
            </div>
          )
        })
      }

      </div>
    </>
  )
}

export default Rooms
