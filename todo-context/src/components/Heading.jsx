import { useEffect, useState } from "react"
import styles from './Heading.module.css'

const Heading = () => {

    const [time, setTime] = useState(new Date())


    useEffect(() => {

        setInterval(() => {
            setTime(new Date());
        }, 1000);

        // return () => clearInterval(intervalId);
    }, [])

    return (
        <h1 className={styles.todoHeading}>Todo App <span className="fs-6">Timing : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</span></h1>
    )
}

export default Heading