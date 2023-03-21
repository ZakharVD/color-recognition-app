import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm';
import ImageOutput from './components/ImageOutput';
import ColorOutput from './components/ColorOutput';


const clarifaiRequest = (imageUrl) => {
  const PAT = '67900a5135eb4d568e18a99946e5825f';
  const USER_ID = 'zakhar_vd';       
  const APP_ID = 'my-first-application';
  // const MODEL_ID = 'color-recognition'; 
  const IMAGE_URL = imageUrl;


  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});

return {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
  },
  body: raw
};

}


class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageURL: '',
      colors: [],
      colorsCode: []
    }
  }

  displayColors = (colorsArr) => {
    let populatedArr = [];
    colorsArr.map((col) => {
        populatedArr.push(col.raw_hex);
      });
  
    return(populatedArr);
  }

  colorChange = (arr) => {
    console.log(arr);
    this.setState({colors: arr});
  }

  onInputChange = (event) => {
    // updating the state
    this.setState({input: event.target.value});
  }
  

  onSubmit = () => {
    //updating the state
    this.setState({imageURL: this.state.input});
    fetch(`https://api.clarifai.com/v2/models/color-recognition/outputs`, clarifaiRequest(this.state.input))
      .then(response => response.json())
      .then((result) => {
        this.colorChange(this.displayColors(result.outputs[0].data.colors))
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <ImageLinkForm onInput={this.onInputChange} onSubmit={this.onSubmit}/>
        <ImageOutput imageUrl={this.state.imageURL}/>
        <div className='flex justify-center mt-3'>
          <ColorOutput colors={this.state.colors}/>
        </div>
      </div>
    );
  }
}

export default App;
