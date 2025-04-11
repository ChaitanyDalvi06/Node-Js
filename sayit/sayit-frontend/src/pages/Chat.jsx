import { useEffect, useState } from 'react'
import styles from './Chat.module.css'

function Chat() {

    let [results, setResults] = useState([])
    let [username,setUserName] = useState("")
    let data = JSON.parse(localStorage.getItem("sayit-info"))

    useEffect(()=>{

        fetch("http://localhost:8000/users/search/"+username,{
            method:'GET',
            headers:{"Authorization":"Bearer "+data.token}
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[username])


    return (
        <section className={styles.main}>
            <div className={styles.searchbox}>
                <input type="text" placeholder='Search By Name' 
                className={styles.searchinput} 
                onChange={(event)=>{setUserName(event.target.value)}}
                />
            </div>

            <div className={styles.searchresult}>

                {
                    results.map((ele) => {
                        return (
                            <div className={styles.result}>
                                <p>Rafe <strong>rafesk</strong> </p>
                                <button>Message</button>
                            </div>
                        )
                    })
                }

            </div>

            <div className={styles.chatbox}>

            </div>
        </section>
    )
}

export default Chat