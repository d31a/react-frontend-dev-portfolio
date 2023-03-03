import React, { Component } from "react";
import Switch from "react-switch";
import { TypeAnimation } from 'react-type-animation';
import { Icon } from '@iconify/react';
import sunIcon from '@iconify/icons-pixelarticons/sun';
import moonStars from '@iconify/icons-pixelarticons/moon-stars';

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {


    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }


    return (
     
              
        
      
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>       
       
       <div className="switch-container"> 
       <Switch 
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#33443e"
                className="react-switch mx-auto"
                width={85}
                height={35}
                uncheckedIcon={
                  <Icon
                    className="iconify"
                    icon={moonStars} 
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 24,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "white",
                    }}
                  />
                }
                checkedIcon={
                  <Icon
                    className="iconify"
                    icon={sunIcon}
                    color= "#d0a04c" 
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 24,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#d0a04c",
                    }}
                  />
                 
                }
                id="icon-switch"
              />
              </div>

      
        <div className="row aligner" style={{height: '100%'}}>
          <div className="">
              <div className="container"> 
                <div className="monitor">  
                    <div className="monitor--container">
                    
                            <p>var benBagley = </p>
                            <TypeAnimation
                            sequence={[
                                '"Web Developer";',
                                2000, // Waits 1s
                                '"Web Designer";',
                                2000, // Waits 2s
                                () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                              //style={{ fontSize: '2em' }}
                            />
                            
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </header>
  

    );
  }
}

export default Header;
