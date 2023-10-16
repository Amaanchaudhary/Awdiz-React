import { useState } from "react"
import './DynamicStyle.css'

const DynamicStyle = () => {

    const [isButtonActive, setIsButtonActive] = useState(false); 

    const handleButtonClick = () => {
        setIsButtonActive(!isButtonActive);
    }
    
    const ButtonClassName = isButtonActive? "ActiveButton" : "InActiveButton";

    return (
        <div>
            <h1>Dynamic Style</h1>
            <button className={ButtonClassName} onClick={handleButtonClick}>
                {isButtonActive ? "Active-Button" : "InActive-Button"}
            </button>

            { isButtonActive && <h2>Button is Active Now</h2>} 
        </div>
    )
}

export default DynamicStyle 