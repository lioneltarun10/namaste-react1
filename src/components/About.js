import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";



class About extends Component{

    constructor(props){
        super(props)

        console.log("parent constructor");
        
    }

    componentDidMount(){
        console.log("parent componentDidMount");
        
    }

    render(){

        console.log("parent render");
        

        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        { ({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h1>This is Namaste React Web Series</h1>
                <User name="Tarun (function)" />
    
                {/* <UserClass name="Tarun (class component)" location="Dehradun class" /> */}
                
             
               {console.log("parent render over")}

            </div>
        )
    }


}


// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h1>This is Namaste React Web Series</h1>
//             {/* <User name="Tarun (function)" /> */}

//             <UserClass name="Tarun (class component)" location="Dehradun class" />
//         </div>
//     )
// }

export default About;