import React from "react"
import Footer from "./Footer"
import Header from "./Header"

class App2 extends React.Component{
    constructor(){
        super();
        this.state={
            title:""
        };
        this.changeTitle = this.changeTitle.bind(this)
        
    }

    changeTitle(title){
        this.setState({title});

    }
render(){
 return( 
    <div>
    <Header changeTitle={this.changeTitle}  title={this.state.title} />
    <Footer />
    </div>
 );
}
}

export default App2 