import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import '../index.css'
import { CardActionArea } from '@material-ui/core';

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
              width: '50%',
              height: '70%',
              backgroundColor: '#031636',
              alignContent: 'center',
              alignItems: 'center',
              margin: 5,
              marginBottom: 50,
              padding: 3
            }}
          >
            <CardActionArea onClick={() => { window.open("https://instagram.com/24hoursfuck"); }}>
              <CardContent
                style={{
                  flexDirection: 'row',
                  width: '100',
                  height: '500',
                  alignContent: 'center'
                }}
              >
                <IconButton
                  style={{
                    color: '#f06292',

                  }
                  }
                  onClick={() => { window.open("https://instagram.com/24hoursfuck"); }}
                >
                  <InstagramIcon
                    style={{
                      width: 45, height: 45
                    }}
                  />
                </IconButton>
                <text style={{
                  fontSize: 18,
                  color: '#ffcc00',
                  fontFamily: "Roboto"
                }}>24hoursfuck</text>

              </CardContent>
            </CardActionArea>
          </Card>

          {/* KAZAMA INFO */}

          <Card
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: '50%',
              height: '70%',
              backgroundColor: '#031636',
              alignContent: 'center',
              alignItems: 'center',
              margin: 5,
              padding: 3
            }}
          >
            <CardContent
              style={{
                flexDirection: 'row',
                width: '90%',
                height: '500',
                // justifyContent: 'space-evenly',
                margin: "50"
              }}
            >

              <Typography style={{
                color: 'white'
              }} gutterBottom>
                Developed By,
        </Typography>
              <text style={{
                marginLeft: 10,
                margin: 10,
                color: '#ffcc00',
                fontSize: 18
              }}>Coder Kazama</text>

            </CardContent>

            <div
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

              }}
            >

              <IconButton
                style={{
                  marginRight: 20,

                  color: '#f06292',

                }}
              >
                <InstagramIcon
                  onClick={() => { window.open("https://instagram.com/coder_kazama"); }}
                  style={{
                    width: 45, height: 45,

                  }}
                />
              </IconButton>

              <IconButton
                style={{
                  marginLeft: 20,
                  color: '#d66c6f',
                }}
                onClick={() => { window.open("mailto:coderkazama@gmail.com"); }}
              >
                <MailOutlineIcon
                  style={{
                    width: 45, height: 45,
                  }}
                />
              </IconButton>

            </div>

            <text style={{
              color: 'white',
              fontSize: 15
            }}>Feel Free to Contact us !</text>
          </Card>

        </center>
      </div>
    </>
  );
}

export default About;