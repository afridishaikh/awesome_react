import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const About = () => {
  return (
    <>
      <div
        style={{
          height: '100%',
          width: "100%",
          backgroundColor: "white"
        }}>
        <center>
          <img
            style={{
              margin: 10,
              marginBottom: 60
            }}
            width={150} height={150}
            src={require('../asset/logo.png')} />
          <Card
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: '30%',
              height: '70%',
              backgroundColor: 'black',
              alignContent: 'center',
              alignItems: 'center',
              margin: 5,
              padding: 3
            }}
          >
            <CardContent
              style={{
                flexDirection: 'row',
                width: '100',
                height: '500',
                justifyContent: 'space-evenly',
                margin: "50"
              }}
            >
            </CardContent>

            <div
              style={{
                flexDirection: 'Row',
                // backgroundColor: 'red',
                justifyContent: 'space-evenly',
              }}
            >
              <IconButton
              style = {{
                color : 'yellow',
              }
            }
             
                onClick={() => { window.open("https://instagram.com/24hoursfuck"); }}
              >
                <InstagramIcon
                color= 'red'
                />
              </IconButton>



              <text style={{
                marginLeft: 10,
                margin: 10,
                color: 'yellow'
              }}>24hoursfuck</text>


            </div>
          </Card>

          {/* KAZAMA INFO */}

          <Card
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: '30%',
              height: '70%',
              backgroundColor: 'black',
              alignContent: 'center',
              alignItems: 'center',
              margin: 5,
              padding: 3
            }}
          >
            <CardContent
              style={{
                flexDirection: 'row',
                backgroundColor: 'red',
                width: '90%',
                height: '500',
                // justifyContent: 'space-evenly',
                margin: "50"
              }}
            >

              <Typography color="textSecondary" gutterBottom>
                Developed By,
        </Typography>



              <text style={{
                marginLeft: 10,
                margin: 10
              }}>Coder Kazama</text>



            </CardContent>

            <div

              style={{
                // width: '80%',
                flexDirection: 'row',
                backgroundColor: 'red',
                // margin: '5%',
                alignItems: 'stretch'
              }}
            >

              <IconButton

              >
                <InstagramIcon

                />
              </IconButton>

              <IconButton>
                <MailOutlineIcon />
              </IconButton>

            </div>
          </Card>

        </center>
      </div>
    </>
  );
}


export default About;