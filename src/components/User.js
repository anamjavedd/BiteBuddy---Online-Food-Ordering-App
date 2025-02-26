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
            <div className="flex justify-center items-center h-screen flex-col">
                <img src={avatar_url} className="mb-5"></img>
                <h1 className="text-2xl text-font-color">Name: {name}</h1>
                <h1 className="text-2xl text-font-color">Location: {location}</h1>
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