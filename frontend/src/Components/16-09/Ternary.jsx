const Ternary = ({ isUserLoggedIn, setloggedIn }) => {
    
    const changeVal = () => {
        setloggedIn((PreVal) => !PreVal)
    }
    
    return (
        <div>   
            <h1>Ternary Operator</h1>
            {isUserLoggedIn ? <button onClick={changeVal}>Welcome</button>
            :
            <button onClick={changeVal}>Please Login</button>}

            {isUserLoggedIn && <h2>User Login hai - && optr</h2>} 
            {/*& optr in react - It will display only if condition is true else not */}

        </div>
    )
}

export default Ternary;