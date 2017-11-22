myApp.controller('mainController', function ($timeout, motivationFactory) {
  'ngInject'
  var vm = this
  vm.windowState = {}
  vm.windowState.isSettingsVisible = false
  vm.appData = {}
  vm.windowState.minerStatus = false

  vm.randomImageId = motivationFactory.getRandomImageId() // Get random image
  vm.randomPhrase = motivationFactory.getRandomPhrase()
  vm.isUserOnline = window.navigator.onLine

  vm.fullPageOptions = {
    verticalCentered: false,
    onLeave: function (index, nextIndex, direction) {
      console.log(index, nextIndex, direction)
      if (nextIndex === 2) {
        vm.showWhatText = true
      }

      if (index === 2) {
        vm.showWhatText = false
      }
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
      vm.windowState.salutation = 'Good morning, rockstar'
    } else if (h >= 13 && h <= 16) {
      vm.windowState.salutation = 'Good afternoon, rockstar'
    } else if (h >= 17 && h <= 20) {
      vm.windowState.salutation = 'Good evening, rockstar'
    } else if (h >= 21 || h <= 4) {
      vm.windowState.salutation = 'Good night, rockstar'
    } else {
      vm.windowState.salutation = 'Hello, rockstar'
    }

    $timeout(function () {
      vm.setClock()
    }, 500)
  }

  function checkTime (i) {
    if (i < 10) {
      i = '0' + i
    }  // add zero in front of numbers < 10
    return i
  }
})
