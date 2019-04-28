import React from 'react'
import Card from '@material-ui/core/Card';

function List(props){
   let items=props.items
    return(
     <ul>
         
         {
             items.map((i)=><li><Card>{i.input}{i.time} </Card></li>)
         }
        
     </ul>
    )
}


export default List;