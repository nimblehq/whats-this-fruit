import React, { Component } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import { Webcam } from "./webcam";
import classes from "./classes2";

let webcam;
class App extends Component {
  constructor() {
    super();
    this.state = {
      prediction: "",
      confidence: ""
    };
  }
  componentDidMount() {
    webcam = new Webcam(document.getElementById("webcam"));
    this.init();
  }

  async init() {
    try {
      await webcam.setup();
    } catch (e) {
      console.log("no webcam");
    }
    this.mobilenet = await this.loadMobilenet();

    // Warm up the model. This uploads weights to the GPU and compiles the WebGL
    // programs so the first time we collect data from the webcam it will be
    // quick.
    tf.tidy(() => this.mobilenet.predict(webcam.capture()));

    setInterval(() => {
      this.predict();
    }, 1000);
  }

  async predict() {
    const predictedClass = tf.tidy(() => {
      // Capture the frame from the webcam.
      const img = webcam.capture();

      // Make a prediction through mobilenet, getting the internal activation of
      // the mobilenet model.
      const prediction = this.mobilenet.predict(img);

      // Returns the index with the maximum probability. This number corresponds
      // to the class the model thinks is the most probable given the input.
      return prediction;
    });

    const index = await predictedClass
      .as1D()
      .argMax()
      .data();
    const confidence = await predictedClass.as1D().data();

    console.log(classes[index]);
    this.setState({
      prediction: classes[index],
      confidence: confidence[index]
    });

    predictedClass.dispose();
  }

  async loadMobilenet() {
    const modelURL = "MobileNet-False-FIDS30-Dense256/model.json";
    const mobilenet = await tf.loadModel(modelURL);

    return mobilenet;
    // Return a model that outputs an internal activation.
    // const layer = mobilenet.getLayer("conv_pw_13_relu");
    // return tf.model({ inputs: mobilenet.inputs, outputs: layer.output });
  }

  render() {
    return (
      <div className="App">
        <video
          capture
          name="video"
          autoPlay
          playsInline
          muted
          id="webcam"
          width="224"
          height="224"
          capture="environment"
        />
        <div className="text-container">
          {!this.state.prediction && <h2>Loading the model..</h2>}
          <p>{this.state.prediction}</p>
          {this.state.prediction && (
            <p>Confidence: {this.state.confidence * 100}%</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
