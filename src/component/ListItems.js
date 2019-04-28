import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, Avatar, Icon, GridList, GridListTile } from '@material-ui/core';
function List(props) {
    let items = props.items
    return (
        <ol>

            {

                items.map((i) => 
                <li><div>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {i.time}
                            </Typography>
                            <Typography variant="h5" component="h2">
                              <Icon color="primary">label_important</Icon>  {i.input}
                            </Typography>

                        </CardContent>
                    </Card>
                </div></li>)
            }
            </ol>
  
    )
                }

// items.map((i)=><li>
// <Card>
//     <CardContent><b>{i.time}</b></CardContent>
//     <Paper >
//     <Grid container wrap="nowrap" spacing={16} >


//       <Grid item>
//         <Avatar><Icon>label_important</Icon></Avatar></Grid>
//       <Grid  wrap item xs zeroMinWidth alignContent justify>
//         <Typography variant="h4" noWrap>{i.input}</Typography>
//         </Grid>
//       </Grid>



//     </Paper>
//     </Card>
//     </li>
//     )
//      }

//  </ol>



export default List

