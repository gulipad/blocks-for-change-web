myApp.factory('motivationFactory', function ($q) {
  var _motivationFactory = {
    phrases: [
      'You\'re not here to be average. You\'re here to be awesome.',
      'Don\'t watch the clock; do what it does. Keep going.',
      'Go out there and do it.',
      'Three months from now, you\'ll thank yourself.',
      'Ready. Steady. Go!'
    ],
    imagesIds: [...Array(18).keys()]
  }

  _motivationFactory.getRandomPhrase = function () {
    var index = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[index]
  }

  _motivationFactory.getRandomImageId = function () {
    var index = Math.floor(Math.random() * this.imagesIds.length)
    return this.imagesIds[index]
  }

  return _motivationFactory
})
