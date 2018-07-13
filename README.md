# What's This Fruit?

Project repository template to set up all public projects at [Nimbl3](https://nimbl3.com)

**Description**

One of the biggest problem no one probably has is identifying fruits... /s

Some people say the limiting factor in machine learning right now is datasets availability. Given enough dataset, the current algorithm can learn the datasets easily and perform identification or classification with high accuracy (at least in area of image classification).

This project wants to prove if it's indeed the case.

Using a publicly available datasets of [49606 images of 74 fruits](https://www.kaggle.com/moltean/fruits), this project aim to create a web application that can differentiate fruit using the user phone's or laptop's camera.

---

The steps needed to realize the project can be break down into 2 big steps, train the model, and attach the model to the webapp.

Training the model:

1.  Download an existing pretrained model that works well for image classification. (Probably VGG19, Inception-v3 or Resnet50)
2.  Retrain the model using the fruits datasets. (Using Keras or PyTorch probably)
3.  Export the resulting model into tensorflow.js compatible model.

Attaching the model into webapp:

4.  Create the webapp using react, vue, or bare metal js (plain js 555)
5.  Setup the tensorflow.js and use the trained model
6.  Connecting the camera to the tensorflow and display the result.

---

**Type**

Web Application

---

**Technologies**

- Keras
- Tensorflow.js
- React

## Usage

Clone the repository

`git clone git@github.com:nimbl3/git-template.git`

## License

This project is Copyright (c) 2014-2018 Nimbl3 Ltd. It is free software,
and may be redistributed under the terms specified in the [LICENSE] file.

[license]: /LICENSE

## About

![Nimbl3](https://dtvm7z6brak4y.cloudfront.net/logo/logo-repo-readme.jpg)

This project is maintained and funded by Nimbl3 Ltd.

We love open source and do our part in sharing our work with the community!
See [our other projects][community] or [hire our team][hire] to help build your product.

[community]: https://nimbl3.github.io/
[hire]: https://nimbl3.com/
