import React from "react";
import {about} from "./pages/about.js"
import {projects} from "./pages/projects.js"

const reader = new FileReader();

function engine(command){
    switch(command.split(' ')[0]){
        case 'welcome':
            return Response('hint',getWelcomeMessage()+'\n'+getCommandList());
            break;
        case 'banner':
            return ResponsePre('output',getBanner());
            break;
        case 'commands':
            return Response('hint',getCommandList());
            break;
        case 'restart':
            window.location.reload();
            break;
        case 'about':
            return Response('output',about);
            break;
        case 'projects':
            return Response('output',projects(command));
            break;
        case 'github':
            window.open('https://github.com/abhidaberao');
            return Response('output','launched GitHub in another window.');
            break;
        case 'youtube':
            window.open('https://www.youtube.com/channel/UCAERp_ed75UPSy0W_Yu3J0w');
            return Response('output','launched YouTube in another window.');
            break;
        case 'blog':
            //window.open('https://www.youtube.com/channel/UCAERp_ed75UPSy0W_Yu3J0w');
            return Response('output','Blog is currently in development.');
            break;
        case 'contact':
            return Response('output','You can mail me at: \n\nMail : abhidaberao@protonmail.com \nLinkedIn : https://www.linkedin.com/in/abhidaberao/');
            break;

        default:
            return Response('output',"the command '"+command+"' is not recognized.");
        
    }
}


function Response(mode,text){
    return (<li><div className={mode}><pre class='preflow'>{text}</pre></div></li>);
}
function ResponsePre(mode,text){
    return (<li><div className={mode}><pre>{text}</pre></div></li>);
}



function getBanner(){
    const banner_text = `
    __  __          ___    ___                
   /\\ \\/\\ \\        /\\_ \\  /\\_ \\               
   \\ \\ \\_\\ \\     __\\//\\ \\ \\//\\ \\     ___      
    \\ \\  _  \\  /'__\\ \\ \\ \\  \\ \\ \\   / __ \\    
     \\ \\ \\ \\ \\/\\  __/ \\_\\ \\_ \\_\\ \\_/\\ \\L\\ \\__ 
      \\ \\_\\ \\_\\ \\____\\/\\____\\/\\____\\ \\____/\\_\\
       \\/_/\\/_/\\/____/\\/____/\\/____/\\/___/\\/_/
       
`;
   return banner_text;
}

function getWelcomeMessage(){
    var welcome_hint = 
    `I'm Abhishek Daberao, Welcome to my Portfolio.
This is made for anyone who likes Bash.\n`;
    return welcome_hint; 
}

function getCommandList(){

    var hint = 'To navigate try these commands:\n\n';
    
    var commands = ["about","projects","github","blog","youtube","contact","clear","restart","commands"];

    var command_list = "";
    var n = 1;
    for(const c in commands){
        if(n===1){
            command_list = command_list + commands[c];
        }else{
            if(n%5 === 0){
                command_list = command_list + "\n"+ commands[c]
            }
            else{
                command_list = command_list+ " | " +commands[c];
            }
        }
        n=n+1
    }
    
    hint = hint + command_list;
    return hint;    
}

export {engine};