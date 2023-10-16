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

    const H1 = styled.h1`
    background-color : blue;
    font-size : 19px;
    color : white;
    `
 
    return (
        <div style={{border: "2px solid blue",backgroundColor: "grey"}}>
            <Button>Styled Component</Button>
            <H1>Styled H1</H1>
        </div>
    )
}

export default StyledComponent