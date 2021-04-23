import React, { useEffect, createRef } from "react";
import ReactDOM from "react-dom"

class Remove extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title : "title",
            show: true
        }
    }
    
    componentDidUpdate(){   
        console.timeEnd("test");
    }

    handleClick(){
        this.setState({
            show : false
        })
        console.time("test")
    }

    render(){
        if(this.state.show){
            return (
                <div>
                    <button onClick={this.handleClick.bind(this)}>Remove elements</button>
                    {
                        [...Array(1000)].map((e,i) => {
                            return (
                                <div key={i}>
                                    <div>{i}</div>
                                </div>
                            )
                        })
                    }
                </div>	
            )
        }else{
            return null;
        }
    }    

}

export default Remove

