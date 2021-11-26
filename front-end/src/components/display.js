import React from 'react';
import axios from 'axios';
import Card from './card';
import CreateQuestion from './createQuestion';



class Display extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        questions: [],
        dataLoaded: false
      }
      
    }
  
    
    
    componentDidMount(){
      // todo: figure out how to get a specific amount of elements to display
      var numberOfElements = '5';
  
      axios.get('/Questions/' + (numberOfElements))
      .then(res => {
        this.setState(
          {
            questions: res,
            dataLoaded: true
          }
        );
        console.log("daa");
        console.log(res.data);
      })
      .catch(err =>{
        console.log(err);
      })
    }
    getCardArray = () => {
      var array = [];
  
      for (var i = 0; i< (this.state.questions.data.length); i++){
        var postTitle = (this.state.questions.data[i].postTitle);
        var postBody = (this.state.questions.data[i].postBody);
        var userName = (this.state.questions.data[i].userName);
        var postId = this.state.questions.data[i].postId;

        const link = "./Question/"+postId
        
        array.push( <a href ={link}> <Card postTitle = {postTitle} postBody = {postBody} userName= {userName}  > </Card> </a>);
      }
  
      
      console.log(array);
      
      return array
    }
  
    
    
    
    
    render(){
      // this.requestData();
      
      if (!this.state.dataLoaded) return (<div>
      <h1> Pleses wait some time.... </h1> </div>) ;
  
      
      return(
        <div>
          <h1>ASKCOMETS</h1>
  
  
          {this.getCardArray()}
          <CreateQuestion />
          
  
        </div>
        
      )
    }
  
  }

  export default Display;