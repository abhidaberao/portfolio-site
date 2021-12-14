import React from "react";

function handle_active(callback){
    return (<li><div className="prompt"><pre>
        <Input callback={callback}/>
    </pre></div></li>);
}
function handle_dead(dead_text){
    return (<li><div className="prompt"><pre>
    <span className="prompt_handle">Guest@SnowFractal</span>
    <span className="prompt_marker"> ~ $ </span>
    <span className="command">{dead_text}</span>
    </pre></div></li>);
}

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({text : event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.callback(this.state.text);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <span className="prompt_handle">Guest@SnowFractal</span>
                <span className="prompt_marker"> ~ $ </span>
                <span>
                <input autoFocus type="text" value={this.state.text} onChange={this.handleChange} className="input"/>
                </span>                
            </form>

        )
    }


}

export {handle_active,handle_dead};