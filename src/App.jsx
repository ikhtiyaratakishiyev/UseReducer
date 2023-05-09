// import React,{useReducer}  from 'react'
// import {Initial_State,postReducer} from './postReducer'
// import  UseContext  from './UseContext/AuthContext'

// const  App = ()=> {

// const [state,dispatch]= useReducer(postReducer,Initial_State)

// const clickHandle =()=>{
//  dispatch({type:"Fetch_Start"})
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then(response => response.json())
//       .then(json => {
//        dispatch({type:"Fetch_Success",payload:json})
//       })
//       .catch(err=>{

//         dispatch({type:"Fetch_Error"})
//       })
//     }
//   return (
//     <div className="App">

//     <h1>UseReducer</h1>
//     <button onClick={clickHandle}>{state.loading ? "loading" :"Get Data"}</button>
//     <h2>{state.data?.title}</h2>
//     <p>{state.data?.body}</p>
//     {state.error && <span>Error var</span>}

//     <UseContext/>
//     </div>
//   )
// }

// export default App


import React,{useEffect} from 'react'
import {useAuth} from './UseContext/AuthContext'

const App = () => {

  const {user,setUser} = useAuth()
  useEffect(()=>{
    setUser(true)
    console.log(user)
  })
  return (

    <div>
      <h1>user</h1>
    </div>
  )
}

export default App