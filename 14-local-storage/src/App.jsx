import React from 'react'

const App = () => {

  // localStorage.clear()

  // localStorage.setItem('user','Arijit')
  // localStorage.setItem('age','21')

  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')
  // console.log(user,age)

  // localStorage.removeItem('user')
  // localStorage.removeItem('age')

  // const user = {
  //   username: 'Arijit',
  //   age: 20,
  //   city: Bhopal
  // }

  // localStorage.setItem('user',JSON.stringify(user))

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user);

  return (
    <div>
      
    </div>
  )
}

export default App
