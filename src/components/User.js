import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy name",
                location:"Dummy location"
            }
        }
    }

    render(){
        const {name,location,avatar_url}=this.state.userInfo;
            return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h1>Name: {name}</h1>
                <h1>Location: {location}</h1>
            </div>)
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/anamjavedd");
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        });
    }
}

export default User;