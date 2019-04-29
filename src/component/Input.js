import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from './ListItems'
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';

export default class InputText extends React.Component {
    state = {
        id:0,
        input: "",
 
        data: []

    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let input = this.state.input;
        let id=this.state.id+1
        let time = new Date().toDateString() + " " + new Date().toLocaleTimeString();
        console.log("Hi")
        this.setState({
            input: "",

            data: [...this.state.data, { id,input, time }]
        })
        
    }
    render() {
        return (
            <div position="relative">
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
                    <Button type="submit" variant="contained" color="secondary" >
                        <Icon fontSize="large" >add_circle</Icon> Add you lessons
                   </Button>
                </form>
                <h1>{this.state.input}</h1>

                <List items={this.state.data} />
            </div>

        )
    }


}