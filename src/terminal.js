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
        this.clear = this.clear.bind(this);
        this.state = {
            timeline : [
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
        const scroll = document.getElementById("bottom_spacing");
        scroll.scrollTop = scroll.scrollHeight;
    }

    clear(){
        this.setState({
            timeline : [
                engine('commands'),
                handle_active(this.run)
            ]
        });
    }

    run(command) {
        if(command == 'clear'){
            this.clear()
        }
        else{
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
    }

    render(){
        var ismobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))?true:false);
        return (
            <div id ="scope" onMouseDown={((ismobile)?null:this.handleClick)}>
                <div id="scroll"> 
                    <ul id="timeline">{this.state.timeline}</ul>
                    <div id="bottom_spacing"></div>
                </div>
            </div>
        );
    }
}


 


export default Terminal; 