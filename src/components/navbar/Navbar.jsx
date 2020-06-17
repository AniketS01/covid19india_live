import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  textAlign:'right'
}));

export class Navbar extends Component {
   
    render() {
        return (
            <div>
               <AppBar position="relative">
                    <Toolbar>
                        
                        <Typography variant="h6">
                            <h3>Covid19 India live</h3>
                            <p>created by: Aniket Shetye  <br/>
                            Api credits: covid19india.org</p>

                        </Typography>
                    </Toolbar>
                </AppBar> 
            </div>
        )
    }
}

export default Navbar

