import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import Cards from './components/cards/Cards'

 class App extends Component {
   state = {
     states: []
   }

  async componentDidMount(){
    axios.get('https://api.covid19india.org/data.json').then(res => {
      console.log(res)
      this.setState({states: res.data.statewise})
    })

  }
  
    

     render() {
   

    return(
    <div class='content'>
      <Navbar />
    {this.state.states.map(i => 
           <Card class = "jumbo" style= {{textAlign:'center'}}>
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          <b>{i.state}</b>
        </Typography>
        <Typography variant="h5" component="h2">
          Confirmed:{i.confirmed}
        </Typography>
        <Typography  variant="h5" component="h2">
         Recovered:{i.recovered}
        </Typography>
        <Typography variant="h5" component="h2">
         Deaths:{i.deaths}
        </Typography>
      </CardContent>
     </Card>
     )}
    </div>      
          
    )
  }
}


export default App;
