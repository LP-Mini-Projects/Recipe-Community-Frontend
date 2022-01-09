import React from 'react';
import "../styles/TryRecipe.css"
import Divider from '@mui/material/Divider';
import tryPage from '../assets/tryPage.jpeg';
import Grid from "@mui/material/Grid";
import Navbar from '../components/Navbar/Navbar'
import { Typography } from '@mui/material';
const TryRecipe = () => {
    return (
        <div>
           <Navbar/>
<Grid container>
<Grid item lg={6}>
    <div className="tryImg">
        <img src={tryPage} className="tryimgRadius"/>
    </div>
</Grid>
<Grid item lg={6}>
    <div className="recipeDetails">
        <h1>Recipe Name</h1>
        <Typography className='textInGreen removeMargin'>Author Name</Typography>
        <Typography>Tags</Typography>
        <Typography>Description :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
    </div>
</Grid>
<Divider className="divider"/>
<Grid item lg={3}>
    <div className='igredientsDiv'>
        <h3 className='textInGreen removeMargin'>Ingredients</h3>
        <Typography style={{color:"#58971C"}}>Serves 1-2</Typography>
      <ul className="listedItems">
        <li>
            3 strawberry
        </li>
        <li>2 banana</li>
<li>2 walnuts</li>
<li>Blueberries</li>
</ul>
    </div>
</Grid>
<Grid item lg={9}>
    <div className="igredientsDiv margin-25">
    <h3 className='textInGreen removeMargin'>Instructions:</h3>
    <ul className="noBullets">
<li>Step 1: <br/>
Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Id diam vel quam elementum. Eu augue ut lectus arcu. Adipiscing elit pellentesque habitant morbi tristique. Pulvinar mattis nunc.</li>
<li>step 2:<br/>
Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Id diam vel quam elementum. Eu augue ut lectus arcu. Adipiscing elit pellentesque habitant morbi tristique. Pulvinar mattis nunc.</li>
   <li>Step 3: <br/>
Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Id diam vel quam elementum. Eu augue ut lectus arcu. Adipiscing elit pellentesque habitant morbi tristique. Pulvinar mattis nunc.</li>
   <li>Step 4: <br/>
Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Id diam vel quam elementum. Eu augue ut lectus arcu. Adipiscing elit pellentesque habitant morbi tristique. Pulvinar mattis nunc.</li>
    </ul>
    </div>
</Grid>
</Grid>
        </div>
    )
}

export default TryRecipe
