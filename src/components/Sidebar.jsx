import React from "react";
import { slide as Menu } from "react-burger-menu";

class Sidebar extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            isOpen: false
        }
        this.isMenuOpen = this.isMenuOpen.bind(this);
       }; 

       isMenuOpen () {
        const isClose = !this.state.isOpen
    this.setState({isOpen: isClose});
        };

  render () {
    console.log(this.state.isOpen)
      return (
    <Menu onStateChange={this.isMenuOpen} >
      <a  className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu>
      );
  }
}
 


export default Sidebar;