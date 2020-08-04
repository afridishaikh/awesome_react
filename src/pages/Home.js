import React, { Component } from 'react';
import firebase from '../config'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loading: false,
      caption: [],
    };
  }

  componentDidMount() {
    var root = firebase.database().ref('captions');
    root.on('value', Snapshot => {
      Snapshot.forEach(item => {
        this.state.caption.push({ id: item.key, ...item.val() })
      })
      this.setState({
        // isLoading: false
      })
    });
  }


  render() {
    return (
      <>
      {/* <Card.Group items={this.state.caption} /> */}

        {
        this.state.caption.map((item, index) => (

        <Card variant="outlined"  style={{ width: '100%' , height:100, backgroundColor :'red', margin:10 ,alignContent:'center' , padding:5 }}>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        {/* {item.caption} */}

        </Card.Body>
       
        {/* <li key={index}>{item.caption}</li> */}
        </Card>
        
      ))
      }
      </>
    );
  };

}