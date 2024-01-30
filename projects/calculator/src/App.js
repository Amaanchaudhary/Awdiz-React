import { useState } from 'react';
import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';

function App() {

  const [calVal , setCalVal] = useState("")

  const onButtonClick = (name) => {
    if(name == 'C'){
        setCalVal('')
    }else if(name == '='){
      const result = eval(calVal)
      setCalVal(result)
    }else{
      const newDisplayValue = calVal + name
      setCalVal(newDisplayValue)
    }

  }
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}>  
      </ButtonsContainer>
    </div>
  );
}

export default App;
