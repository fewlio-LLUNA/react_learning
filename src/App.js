import { useState } from 'react';
import './App.css';

function DisplayName(props){
  console.log(props)
  return(
    <h1 className='DisplayName'>こんにちは {props.name}さん :{props.age}歳 {props.grade}年</h1>
  )
}

function App() {

  const[cnt, setCnt]=useState(0) //値を保持する
  let letCnt = 0
  console.log(cnt,setCnt)

  const students = [{name:'tanaka', age:'20', grade:'3'},
                    {name:'satou', age:'21', grade:'3'},
                    {name:'hogehoge', age:'22', grade:'4'}]
  
  return (
    <div className="App">
      {students.map(function(student, index){
        return <DisplayName key={index} name={student.name} age={student.age} grade={student.grade}/>
      })}
      {/* <DisplayName name="tanaka" age="20"/>
      <DisplayName name="satou"/>
      <DisplayName grade="3"/> */}
      <p>hogehoge</p>

      <div>{cnt} {letCnt}</div>

      <button onClick={function(){
        console.log("+")
        setCnt(cnt+1)
        letCnt++
      }}>+</button>

      <button onClick={function(){
        console.log("-")
        setCnt(cnt-1)
        letCnt--
      }}>-</button>

    </div>
  );
}

export default App;
