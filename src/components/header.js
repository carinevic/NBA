import React,{Component} from 'react'


class Header extends Component{
    state = {
        Keywords: ''
    }
    inputChange(e){
        this.setState({
            Keywords:e.target.value
        })
    }

render(){
    return(
        <header>
            <div>Library Corner</div>
            <input  onChange={this.props.keywords}/>
            <div></div>
        </header>
    )
}
}
export default Header;