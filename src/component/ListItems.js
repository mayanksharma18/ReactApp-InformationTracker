import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Paper,Grid,Avatar,Icon} from '@material-ui/core'
function List(props){
   let items=props.items
    return(
     <ul>
         
         {
    //          items.map((i)=><div><li>
    //              <Card>
    //   <CardContent>
    //     <Typography  color="textSecondary" gutterBottom>
    //       {i.time}
    //     </Typography>
    //     <Typography variant="h5" component="h2">
    //       {i.input}
    //     </Typography>
        
    //   </CardContent>
    //   </Card>
    //              </li></div>
    items.map((i)=>
        <Paper >
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar><Icon>label_important</Icon></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{i.input}</Typography>
          </Grid>
        </Grid>
        </Paper>
        )
         }
        
     </ul>
    )
}


export default List;

