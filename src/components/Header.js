import React,{Component} from 'react';
import './design/Header.css'
class Header extends Component{
    constructor()
    {
        super();
        this.state={
            appName:"React App",
            wordForSearching:''
        }
    }
    inputTrack(event)
    {
     this.setState({wordForSearching: event.target.value})
     this.props.userSearchedProduct(event.target.value)
    }
    filterProduct(word)
    {

    }
    render()
    {
        return(
            <header>
                <div>
               <h1 className="logo">{this.state.appName}<br/>
               <input type="text" onChange={this.inputTrack.bind(this)}>
                   </input></h1></div>
            </header>
        )
       }
    }
export default Header;