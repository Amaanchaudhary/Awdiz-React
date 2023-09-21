import styled from 'styled-components'

const StyledComponent = () => {
    const Button = styled.button`
    color: white;
    width: 200px;
    height: 50px;
    margin-top: 20px;
    font-size: 18px;
    background-color : red;
    `

    return (
        <div style={{border: "2px solid blue",backgroundColor: "grey"}}>
            <Button>Styled Component</Button>
        </div>
    )
}

export default StyledComponent