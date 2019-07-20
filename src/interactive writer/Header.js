import React from "react"
import Title from "./Header/Title"


class Header extends React.Component{
    constructor(){
        super()
         
        this.handleChange2 = this.handleChange2.bind(this)
    }
handleChange2(e){
    const title = e.target.value;
    this.props.changeTitle(title)

}
render(){
    return(
        <div>
        <Title title={this.props.title} />
        <input type="text" value={this.props.title} onChange = {this.handleChange2} />
         </div>   
    );
}

}

export default Header