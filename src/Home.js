import React, { useState,useEffect } from "react";
import b from "./im/b.jpg";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PanToolIcon from '@mui/icons-material/PanTool';
import CircularSlider from '@jsdev63/advanced_react-circular-slider';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import axios from "axios";
import a from "./im/a.jpg";
const Home=()=>{
    const [power,setPower]=useState(0);
    const [lon,setLon]=useState("");
    const [lat,setLat]=useState("");
    const [angle,setAngle]=useState(0);
    const [direc,setDirec]=useState(0);
    useEffect(()=>{
      sub();
    },[lat,lon,direc,power,angle]);
    const sub=async()=>{
      await axios.post("https://v-pink.vercel.app/sendControls",{
        lat:lat,
        lon:lon,
        direc:direc,
        power:power,
        angle:angle.value,
        
      })
    }

    return(
        
            <Grid
            container
  spacing={2}
  direction="row"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }} 
            >
  
  <Grid xs={12}
  container 
  direction="row"
  alignItems="center"
  justifyContent="center"
   >
    <img src={a} style={{height:"50px",width:"50px"}}></img>
    <TextField id="outlined-basic" label="Longitude" variant="outlined" 
            onChange={(x)=>{setLon(x.target.value)}}
            style={{margin:"20px"}}/>
    <p>Auto</p>
             
            <Switch color="secondary" onChange={()=>{
              if(power==0){
                setPower(1);
              }else{
                setPower(0);
              };
              sub();
            }} />
            <p>Manual</p>
            <TextField id="outlined-basic" label="Lattitude" variant="outlined" 
            onChange={(x)=>{setLat(x.target.value)}}
            style={{margin:"20px"}}/>
  </Grid>
  
  <Grid xs={2}
  container 
  direction="column"
  alignItems="center"
  justifyContent="center">
  <IconButton aria-label="up" onClick={()=>{
            setDirec(1);
              
            }}>               
    <KeyboardDoubleArrowUpIcon sx={{ fontSize: 70 }}/>
   </IconButton>
            <IconButton aria-label="down" onClick={()=>{
              setDirec(2);
              
            }}>
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 70 }}/>
            </IconButton>
  </Grid>
  <Grid xs={1}
  container 
  direction="column"
  alignItems="center"
  justifyContent="center">
  <IconButton aria-label="down" onClick={()=>{
              setDirec(0);
              
            }}>
                <PanToolIcon sx={{ fontSize: 50 }}/>
            </IconButton>
  </Grid>
  <Grid xs={6}
  container 
  direction="row"
  alignItems="center"
  justifyContent="center">

  <CircularSlider
            width={280}
            limit={270}
            offsetAngle={-45}
            label="ROVER DESTINY"
            labelOffset={20}
            direction={1}
            data={[
            {
                
                value: "0",
            },
              {
                
                value: "10",
              },
              {
                
                value: "20",
              },
              {
                
                value: "30",
              },
              {
                
                value: "40",
              },
              {
               
                value: "50",
              },
              {
                
                value: "60",
              },
              {
                
                value: "70",
              },
              {
                
                value: "80",
              },{
                
                value: "90",
              },
              {
               
                value: "100",
              },{
               
                value: "110",
              },
              {
                
                value: "120",
              },{
                
                value: "130",
              },
              {
                
                value: "140",
              },{
                
                value: "150",
              },
              {
                
                value: "160",
              },{
                
                value: "170",
              },
              {
                
                value: "180",
              },
              
            ]}
            knobPosition="bottom"
            valueFontSize="0rem"
            renderLabelValue={null}
            progressLineCap="flat"
            progressSize={18}
            progressColorFrom={'black'}
            progressColorTo={'black'}
            
            doubleLineType="track"
            doubleLineColor={null}
            trackColor="#a9a9a9"
            trackSize={16}
            knobColor = "black"
            knobSize= {40}
            onChange={value=>{console.log(value);setAngle(value)}}
            
            
        >
            </CircularSlider>
  </Grid>
  <Grid  xs={3}
  container 
  direction="row"
  alignItems="center"
  justifyContent="center">
  <IconButton aria-label="left" onClick={()=>{
              setDirec(3);
              
            }}>
                <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 70 }}/>
            </IconButton>
            <IconButton aria-label="right" onClick={async()=>{
              setDirec(4);
              
            }}>
                <KeyboardDoubleArrowRightIcon sx={{ fontSize: 70 }}/>
            </IconButton>
  </Grid>
</Grid>
             
            
            
            

        
        
   
       
    )
}


export default Home;