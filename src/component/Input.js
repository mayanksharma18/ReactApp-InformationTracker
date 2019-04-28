import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from './ListItems'

export default class InputText extends React.Component{
        state={
            input:"", 
        
            data:[]
            
        }

    handleChange=(event)=>{
     this.setState({input:event.target.value})
    }
    
    handleSubmit=(event)=>{
    event.preventDefault();

     let input=this.state.input;
     
     let time=new Date().toDateString()+" "+new Date().toLocaleTimeString();
     console.log("Hi")
     this.setState({
         input:"",
         
         data:[...this.state.data,{input,time}]
     })
    }
       render(){
           return(
               <div>
            <form onSubmit={this.handleSubmit}>
        <TextField
        value={this.state.input}
         fullWidth="true"
         margin="normal"
          label="Name"
          multiline='true'
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <Button  type="submit" variant="contained" color="secondary" >
        Add you lessons
      </Button>
     
        </form>
 <h1>{this.state.input}</h1>
 

 <List items={this.state.data}/>
 </div>

           )
       }


}