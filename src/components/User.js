import { useEffect, useState } from "react"

const User = ({name}) => {

   const [count,setCount] = useState(0) 
   const [count2,setCount2] = useState(1)

   useEffect(() => {
      // API calls
      const timer = setInterval(() => {
           console.log("Namaste react OP Functional");
           
      },1000)

      return () => {
        clearInterval(timer)
      }
   },[])

//    async function getUserInfo(){
//        const data = await
//    }

    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location: Hyderabad</h3>
            <h4>Contact: @Tarun10</h4>
        </div>
    )
}

export default User