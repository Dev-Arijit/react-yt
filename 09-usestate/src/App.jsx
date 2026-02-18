import React, { useState } from "react";

const App = () => {
  // const [num, setNum] = useState(10)
  // const [userName, setUserName] = useState('Arijit')
  // const [users, setUsers] = useState([10,20,30])

  // function changeNum(){
  //   setNum(30)
  //   setUserName('Rakesh')
  //   setUsers([40,50,60])
  // }

  // const [num, setNum] = useState({name: 'Arijit', age: 20})

  // const btnClicked = () =>{
  //   setNum(prev=>({...prev,age:50}))           *** This is the short trick, this alone replace thebelow lines
  //   const newNum = {...num}
  //   newNum.name = 'Rakesh'
  //   newNum.age =25
  //   setNum(newNum)
  // }

  // const [num, setNum] = useState([10, 20, 30]);

  // const btnClicked = () => {
  //   const newNum = [...num];
  //   newNum.push(99);
  //   setNum(newNum)
  // };

  const [num, setNum] = useState(10)

  const btnClicked = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
  }

  return (
    <div>
      {/* <h1>Value of num is {num} <br /> {users} <br />Name of user is {userName} </h1>
      <button onClick={changeNum} >Click</button> */}

      <h1>
        {num}
      </h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;
