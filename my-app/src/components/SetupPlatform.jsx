import React from 'react'
import './SetupPlatform.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { MdAccessibilityNew } from "react-icons/md";
import SwipeableViews from 'react-swipeable-views';
import WebSetup from './WebSetup';

const SetupPlateform = () => {
  const [selectedIndex, setSelectedIndex] = React.useState('1');
  const iconSize = 122;

  const handleChangeIndex = (index)=>{
    setSelectedIndex(index)
  }
  return (


    <>
      <div className='mainContainerDesktop'>
        <Box
          sx={{
            display: 'grid',
            gridAutoColumns: '1fr',
            gridAutoFlow: 'column',
            gap: '30px',
            justifyContent: 'center',
          }}

        >
          <Card  id='1' className= {'1'== selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex('1')}}  sx={{ maxWidth: 400, maxHeight: '170px' }} >
            <CardActionArea>
              <div style={{ padding: 4 }}>
                <div className= 'centerContent'>
                  <MdAccessibilityNew className= {'1'=== selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                </div>
                <div className= 'centerContent'>
                  <CardContent sx={{ padding: 0 }}>
                    <Typography sx={{ padding: 0 }} gutterBottom variant="h6" component="div" className= {'1'=== selectedIndex ? '' : 'selectedWhite'}>
                      Lizard
                    </Typography>
                  </CardContent>
                </div>
              </div>
            </CardActionArea>
          </Card>

          <Card id='2' className= {'2'=== selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex('2')}}  sx={{ maxWidth: 400, maxHeight: '170px' }} >
            <CardActionArea>
              <div style={{ padding: 4 }}>
                <div className= 'centerContent'>
                  <MdAccessibilityNew size={iconSize} className= {'2'=== selectedIndex ? '' : 'selectedWhite'} />
                </div>
                <div className= 'centerContent'>
                  <CardContent sx={{ padding: 0 }}>
                    <Typography className= {'2'=== selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </div>
              </div>
            </CardActionArea>
          </Card>

          <Card id='3' className= {'3'=== selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex('3')}}  sx={{ maxWidth: 400, maxHeight: '170px' }} >
            <CardActionArea>
              <div style={{ padding: 4 , zIndex : 10 }}>
                <div className= 'centerContent'>
                  <MdAccessibilityNew className= {'3'=== selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                </div>
                <div className= 'centerContent'>
                  <CardContent sx={{ padding: 0 }}>
                    <Typography className= {'3'=== selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </div>
              </div>
            </CardActionArea>
          </Card>

          <Card id='4' className= {'4'=== selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex('4')}}  sx={{ maxWidth: 400, maxHeight: '170px' }} >
            <CardActionArea>
              <div style={{ padding: 4 }}>
                <div className= 'centerContent'>
                  <MdAccessibilityNew className= {'4'=== selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                </div>
                <div className= 'centerContent'>
                  <CardContent sx={{ padding: 0 }}>
                    <Typography className= {'4'=== selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </div>
              </div>
            </CardActionArea>
          </Card>

          <Card id='5' className= {'5'=== selectedIndex ? '' : 'unSelectedCard'} onClick={() => { handleChangeIndex('5')}}  sx={{ maxWidth: 400, maxHeight: '170px' }} >
            <CardActionArea>
              <div style={{ padding: 4 }}>
                <div className= 'centerContent'>
                  <MdAccessibilityNew className= {'5'=== selectedIndex ? '' : 'selectedWhite'} size={iconSize} />
                </div>
                <div className= 'centerContent'>
                  <CardContent sx={{ padding: 0 }}>
                    <Typography className= {'5'=== selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </div>
              </div>
            </CardActionArea>
          </Card>
        </Box>
          <br/>
          
          
          <div className= 'bottomContainer'>
          <SwipeableViews index={0} >
          <div> <WebSetup></WebSetup> </div>
          <div> <h1>world</h1> </div>
          <div> <h1>hel</h1> </div>


          </SwipeableViews>
          </div>
          
      </div>
    </>
  )
}

export default SetupPlateform