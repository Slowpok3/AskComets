import React from 'react';


class Card extends React.Component{
    constructor(props){
      super(props);
      
    }
  
    
  
    render(){
      var textTitle = this.props.postTitle;
      var textBody = this.props.postBody;
      var userName = this.props.userName;
  
      return(
        
  
        <div>
  
         
          
          
        <h1>{textTitle}</h1>
        <h2>{textBody}</h2>
        <h2>user name: {userName}</h2>
        </div>
        
      );
    }
      
      
  }

  export default Card;