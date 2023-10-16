import useLocalStorage from "./useLocalStorage"

const CustomHookLS = () => {

    const [name , setName] = useLocalStorage('name' , '')
    
    const handleChange = (event) => {
        setName(event.target.value)
    }

    return(
        <div>
            <br/>
            <input type='text' value={name} onChange={handleChange}  />
            <p>Hello , {name}!</p>
        </div>
    )
}

export default CustomHookLS 