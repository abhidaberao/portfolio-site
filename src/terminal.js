import React from "react";
import reactDom from "react-dom";
import './terminal.css'
import {engine} from './engine.js'
import {handle_active,handle_dead} from './handle.js'

class Terminal extends React.Component{
    constructor(props){
        super(props);
        this.run = this.run.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            timeline : [
                <br/>,
                handle_dead('start'),
                engine('banner'),
                engine('welcome'),
                handle_active(this.run)
            ]
        };
    }

    handleClick(event){
        event.preventDefault();
    }

    scrollDown(){
        const scroll = document.getElementById("scroll");
        scroll.scrollTop = scroll.scrollHeight;
    }

    run(command) {
        console.log('yes');
        var templine = this.state.timeline;
        templine.pop();
        templine.push(handle_dead(command));
        templine.push(engine(command));
        templine.push(handle_active(this.run));
        this.setState({
            timeline : templine 
        });
        this.scrollDown();
    }

    render(){
        return (
            <div id ="scope" onMouseDown={this.handleClick}>
                <div id="scroll"> 
                    <ul id="timeline">{this.state.timeline}</ul>
                </div>
            </div>
        );
    }
}


 


export default Terminal; 