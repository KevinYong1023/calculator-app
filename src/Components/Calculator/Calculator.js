import React,{useState} from 'react'
import '../../Styling/Calculator.css';

function Calculator(){
  const [firstValue, setFirstValue] = useState("")
  const [operator, setOperator] = useState("")
  const [secondValue, setSecondValue] = useState("")
  const [result, setResult] = useState("")

  function inputNumbers(e){
   if(firstValue !== "" && operator !== ""){
      setSecondValue(secondValue.concat(e.target.name))
    }
   else{
      setFirstValue(firstValue.concat(e.target.name))
    } 
  }

  function inputOperator(e){
    if(firstValue !== ""){
      setOperator(e.target.name)
    }
  }

  function executeCalculation(){
    const firstValueNumber = Math.round(firstValue)
    const secondValueNumber = Math.round(secondValue)
    switch(operator){
      case("+"):
        setResult((firstValueNumber + secondValueNumber).toString())
        break
      case("-"):
        setResult((firstValueNumber - secondValueNumber).toString())
        break
     case("x"):
        setResult((firstValueNumber * secondValueNumber).toString())
        break
      case("/"):
        setResult((firstValueNumber / secondValueNumber).toString())
        break
    }
  }

  function clearAll(e){
    setResult("")
    setOperator("")
    setFirstValue("")
    setSecondValue("")
  }

    return(
        <div className='Calculator'>
        <div className='CalculatorContainer'>
        {result === "" ?
        <div className='CalculatorValueBox'>
         {firstValue} {operator} {secondValue}  
        </div>
        :
        <div className='CalculatorValueBox'>
         {result}  
        </div>
        }
        <div className='CalculatorButtonsContainer'>
            <button onClick={inputNumbers}  name={"1"}><span>1</span></button>
            <button onClick={inputNumbers}  name={"2"}><span>2</span></button>
            <button onClick={inputNumbers}  name={"3"}><span>3</span></button>
            <button onClick={inputNumbers}  name={"4"}><span>4</span></button>
            <button onClick={inputNumbers}  name={"5"}><span>5</span></button>
            <button onClick={inputNumbers}  name={"6"}><span>6</span></button>
            <button onClick={inputNumbers}  name={"7"}><span>7</span></button>
            <button onClick={inputNumbers}  name={"8"}><span>8</span></button>
            <button onClick={inputNumbers}  name={"9"}><span>9</span></button>
            <button onClick={inputNumbers}  name={"0"}><span>0</span></button>
            <button onClick={inputOperator}  name={"+"}><span>+</span></button>
            <button onClick={inputOperator}  name={"-"}><span>-</span></button>
            <button onClick={inputOperator}  name={"x"}><span>x</span></button>
            <button onClick={inputOperator}  name={"/"}><span>/</span></button>
            <button onClick={clearAll}  name={"CA"}><span>CA</span></button>
            <button onClick={executeCalculation}  name={"="}><span>=</span></button> 
          </div>
        </div>
        </div>
    )
}

export default Calculator