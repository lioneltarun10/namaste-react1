import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            userInfo : {
                name:"Dummy name",
                location: "Deafault"
            }
        }
        console.log(this.props.name + " child constructor");
        
    }

    async componentDidMount(){
        // console.log( this.props.name +" child componentDidMount");
        // // API calls

        // const data = await fetch("https://api.github.com/users/lioneltarun10")
        // const json = await data.json()

        // console.log(json);

        // this.setState({
        //     userInfo:json,
        // })

        this.timer = setInterval(() => {
           console.log("Namaste React OP");
           
        },1000)
        
    }

    componentDidUpdate(prevProps,prevState){
        // if(this.state.count !== prevState.count || 
        //     this.state.count2 !== prevState.count2){

        // }
        // console.log("Component Did Update");
        
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Compnent will unmount");
        
    }

    render(){

       const {name,location,avatar_url} = this.state.userInfo

       console.log(this.props.name + " child render");
       

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location: {location} </h3>
                <h4>Contact: @Tarun10</h4>
            </div>
        )
    }
    

}

export default UserClass