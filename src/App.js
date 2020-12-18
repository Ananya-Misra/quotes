import React from 'react';
import './App.css';
import axios from "axios";
class App extends React.Component{
    state={advice:''};
    componentDidMount(){
        console.log('Component Did Mount');
        this.fetchAdvice(); 
    }
    fetchAdvice=()=>
    {
        axios.get('https://api.adviceslip.com/advice').then((response)=>{
            const{advice}=response.data.slip;
             console.log(advice);
            this.setState({advice});
             
        })
        .catch((error)=>{
            console.log(error);
        });

    }
    render(){
        const{advice}=this.state;
        return(
            <div className="app">
                <div className="card"><h1 className="quote">{advice}</h1>
                <button onClick={this.fetchAdvice}>New quote!!!</button>
                </div>
            </div>
       
        );
    }
}
export default App;