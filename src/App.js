import ball from './crystal-ball-svgrepo-com.svg';
import logo from './ricklogo.png';
import sparkle from './sparkle.svg';
import './App.css';
import { Grid } from '@mui/material';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";


function Prediction() {
  var [ricks, setRicks] = useState([]);
  useEffect(() => {
    async function gettingRicks() {
      const response = await fetch('https://rickandmortyapi.com/api/character/?name=rick');
      const data = await response.json();
      setRicks(data);
    }
    gettingRicks();
  });
  return (
    <div className='App'>
      <Grid container spacing={2}>
        <Grid className='log' item xs={12}>
          <img src={logo} />
        </Grid>
        <Grid item xs={12}>
          <h1 className='text'>Rick's Crystal Ball</h1>
        </Grid>
        <Grid className='fortune App-logo' item xs={4}><img src={sparkle} align='right' /></Grid>
        <Grid className='fortune ball' item xs={4}> <img src={ball} /></Grid>
        <Grid className='fortune App-logo' item xs={4}> <img src={sparkle} align='left' /> </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <p className='text'>You have stumbled upon Rick's crystal ball! Choose one of the characters below,
            and then click the crystal ball to reveal that character's location in the multiverse currently. Use this
            information wisely! </p>
        </Grid>
        <Grid item xs={4}></Grid>
          {ricks.results?.map(user => (
            <Grid item xs={3} key={user.id}>
              <div className='card'>
              <div className='card-body'>
                <img className='card-img-top' src={user.image}/>
              <h5 className="card-title">{user.name}</h5>
              <p className='card-body'>Species: {user.species}</p>
              </div>
            </div>
            </Grid>
            ))
          //ricks.map(user => <Card key={user.id} title={user.name} />)
         // this.state.data.map((info, index) => <Card key={index} info={info} />) 
        }

        <Grid><p></p></Grid>
      </Grid>
    </div>
  );
}

const Card = (title) =>
  <button type="button" className="btn btn-light">
    <div className='holder'>
      <div className='card'>
        <div className='card-body'>
          <h5 className="card-title">Rick</h5>
          <h6 className="card-subtitle mb-2 text-muted">character title</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </button>;
export default Prediction;
