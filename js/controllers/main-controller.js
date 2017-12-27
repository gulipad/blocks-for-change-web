myApp.controller('mainController', function ($timeout, $translate, $filter, motivationFactory) {
  'ngInject'
  var vm = this
  var xmrPriceEuro = 136
  var xmrPerHash = 0.00015283 / 1000000
  var userHashesPerDay = 125000
  var valueBeforeRound

  getLanguageCode()

  vm.windowState = {}
  vm.windowState.isSettingsVisible = false
  vm.appData = {}
  vm.windowState.minerStatus = false

  vm.randomImageId = motivationFactory.getRandomImageId() // Get random image
  vm.randomPhrase = motivationFactory.getRandomPhrase()
  vm.isUserOnline = window.navigator.onLine
  vm.whiteBg = false
  vm.userCount = 100000
  vm.revenue = $filter('number')(Math.round(vm.userCount * xmrPerHash * xmrPriceEuro * userHashesPerDay * 365))
  vm.namesArray = {
    es: ['Myriam', 'Ana', 'Ignacio', 'Luis', 'Natalia', 'Juan'],
    en: ['Myriam', 'Anna', 'Peter', 'Chris', 'John', 'Patricia']
  }
  vm.fullPageOptions = {
    verticalCentered: false,
    navigation: true,
    loopBottom: true,
    onLeave: function (index, nextIndex, direction) {
      if (nextIndex === 5) {
        vm.whiteBg = false
        vm.showFAQContent = true
        $('#fp-nav').addClass('hide-nav')
      }

      if (index === 5) {
        vm.showFAQContent = false
        $('#fp-nav').removeClass('hide-nav')
      }

      if (nextIndex === 4) {
        vm.whiteBg = true
        vm.showWhatContent = true
      }

      if (index === 4) {
        vm.showWhatContent = false
      }

      if (nextIndex === 3) {
        vm.whiteBg = false
        vm.showHowContent = true
      }

      if (index === 3) {
        vm.showHowContent = false
      }

      if (nextIndex === 2) {
        vm.whiteBg = true
        vm.showWhyContent = true
      }

      if (index === 2) {
        vm.showWhyContent = false
      }

      if (nextIndex === 1) {
        vm.whiteBg = false
      }
    }
  }

  vm.updateMoney = function (c) {
    if (vm.userCount > 50000000) {
      vm.revenue = 'Too much'
      return
    }
    if (vm.userCount < 1000) {
      vm.revenue = 'Too little'
      return
    }
    valueBeforeRound = vm.userCount * xmrPerHash * xmrPriceEuro * userHashesPerDay * 365
    if (valueBeforeRound < 1) {
      vm.revenue = $filter('number')(Math.round(vm.userCount * xmrPerHash * xmrPriceEuro * userHashesPerDay * 365 * 10) / 10) + ' \u20AC/year'
    } else {
      vm.revenue = $filter('number')(Math.round(vm.userCount * xmrPerHash * xmrPriceEuro * userHashesPerDay * 365)) + ' \u20AC/year'
    }
  }

  vm.handleSettingsClick = function (e) {
    if (vm.windowState.isSettingsVisible) {
      return
    }
    vm.windowState.isSettingsVisible = true
    e.stopPropagation()
  }

  vm.setClock = function () {
    var today = new Date()
    var h = today.getHours()
    var m = checkTime(today.getMinutes())
    vm.windowState.time = h + ':' + m
    if (h >= 5 && h <= 12) {
      vm.windowState.salutation = 'GOOD_MORNING'
    } else if (h >= 13 && h <= 16) {
      vm.windowState.salutation = 'GOOD_AFTERNOON'
    } else if (h >= 17 && h <= 20) {
      vm.windowState.salutation = 'GOOD_EVENING'
    } else if (h >= 21 || h <= 4) {
      vm.windowState.salutation = 'GOOD_NIGHT'
    } else {
      vm.windowState.salutation = 'HELLO'
    }

    $timeout(function () {
      vm.setClock()
    }, 500)
  }

  vm.installExtension = function () {
    chrome.webstore.install(null, null, failureCallback)
  }

  function getLanguageCode () {
    if (window.navigator.language.indexOf('es-') !== -1) {
      vm.languageCode = 'es'
    } else {
      vm.languageCode = 'en'
    }
    $translate.use(vm.languageCode)
  }

  function failureCallback (e) {
    console.log(e)
  }
  function checkTime (i) {
    if (i < 10) {
      i = '0' + i
    }  // add zero in front of numbers < 10
    return i
  }
})
