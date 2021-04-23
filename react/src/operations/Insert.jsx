import React from "react";

class Insert extends React.Component {

    componentDidMount(){
        //elements are inserted into the dom
        console.timeEnd("check")
    }

    render(){
        //elements start to get rendered
        console.time("check")
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
    }    

}

export default Insert

