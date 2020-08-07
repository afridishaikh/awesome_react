import React, { Component } from 'react';
import firebase from '../config'
import Card from '@material-ui/core/Card';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../index.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'red',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      caption: [],
      modal: false
    };
  }

  componentDidMount() {
    console.log(this.state.caption.length == 0)

    var root = firebase.database().ref('captions');
    root.on('value', Snapshot => {
      Snapshot.forEach(item => {
        this.state.caption.push({ id: item.key, ...item.val() })
      })
      this.setState({
        loading: false
      })
    });
  }

  handleOpen(visible, no, caption) {
    this.setState({
      modal: visible,
      num: no,
      cap: caption,

    });
  };


  render() {
    const handleClose = () => {
      this.setState({
        modal: false
      });
    };



    return (
      this.state.caption == null
        ?

        <center>
          <CircularProgress

          />
        </center>

        :
        <>
          {
            this.state.caption.map((item, index) => (
              <div onClick={this.handleOpen.bind(this, true, item.no, item.caption)}>
                <Card
                  style={{
                    width: '96%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.50)',
                    margin: 15,
                    alignContent: 'center',
                  }}
                >
                  <CardContent>
                    <Typography
                      style={{
                        color: "red",
                        paddingLeft: 5,
                        fontFamily: 'Josefin Sans',
                        fontSize: 20
                      }}
                      gutterBottom>
                      #{item.no}
                    </Typography>

                    <Typography
                      style={{
                        color: "#ffcc00",
                        paddingLeft: 5,
                        fontFamily: 'Josefin Sans',
                        fontSize: 15
                      }}
                      variant="body2" color="#ffcc00" component="p">
                      {item.caption}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))
          }


          <Modal
            alignContent='center'
            alignItems='center'
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={useStyles.modal}
            open={this.state.modal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: '#1a237e'
            }}
          >
            <Fade in={this.state.modal}>
              <Card
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: '70%',
                  height: '70%',
                  backgroundColor: 'rgba(0, 0, 0, 0.50)',
                  alignContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                  padding: 5
                }}
              >


                <CardContent
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",

                  }}
                >

                  <div
                    style={{

                      margin: 15,
                      marginBottom: 50,
                      color: 'white'
                    }}
                    onClick={() => this.setState({
                      modal: false
                    })}

                  >
                    <ArrowBackIcon
                      style={{
                        width: 35, height: 35,
                      }}
                    />
                  </div>

                  <Typography
                    gutterBottom>
                    {this.state.no}
                  </Typography>



                  <Typography
                    value={this.state.cap}
                    id="copy"
                    style={{
                      color: "#ffcc00",
                      paddingLeft: 5,
                      fontFamily: 'Josefin Sans',
                      fontSize: 20
                    }}
                    variant="body2" color="#ffcc00" component="p">
                    " {this.state.cap} "
                </Typography>


                  <Typography
                    value={this.state.cap}
                    id="copy"
                    align='right'
                    style={{
                      color: "#ffcc00",
                      paddingBottom: 30,
                      paddingTop: 50,
                      fontFamily: 'Josefin Sans',
                      fontSize: 20,
                      flexDirection: 'end'
                    }}
                    variant="body2" color="#ffcc00" >
                    - 24hoursfuck
              </Typography>

                  <center>
                    <CopyToClipboard text={this.state.cap}
                      onCopy={() => this.setState({ copied: true })}>
                      <Fab

                        color="secondry"

                        aria-label="Copy">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>
                      </Fab>
                    </CopyToClipboard>
                  </center>

                </CardContent>




              </Card>

            </Fade>
          </Modal>


        </>
    );
  };

}