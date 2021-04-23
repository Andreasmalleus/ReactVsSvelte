import React from "react";

class Insert extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    componentDidUpdate(){
        //elements are inserted into the dom
        console.timeEnd("test")
    }

    handleClick(){
        this.setState({
            show : true
        })
        console.time("test")
    }


    render(){
        //elements start to get rendered
        if(this.state.show){
            return (
                <>
                    {
                        [...Array(1000)].map((e,i) => {
                            return (
                                <div key={i}>
                                    <p>{i}</p>
                                </div>
                            )
                        })
                    }
                </>
            )
        }else{
            return (
                <div>
                    <button onClick={this.handleClick.bind(this)}>Click me</button>
                </div>
            )
        }
    }    

}

export default Insert

