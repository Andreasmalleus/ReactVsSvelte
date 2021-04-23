import React from "react";

class Update extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title : "title"
        }
    }

    //component is updated in the dom
    componentDidUpdate(){   
        console.timeEnd("test");
    }

    hasBeenClicked(){
        this.setState({
            title : Math.random().toString(36).substr(2, 5)
        })
        console.time("test");
    }

    render(){
        return (
            <div>
                <button onClick={this.hasBeenClicked.bind(this)}>Update elements</button>
                {
                    [...Array(1000)].map((e,i) => {
                        return (
                            <div key={i}>
                                <p>{this.state.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }    

}

export default Update

