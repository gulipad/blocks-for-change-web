angular.module('blockchange')
  .component('blocksMiningFor', {
    templateUrl: '../../templates/blocks-mining-for-tmpl.html',
    controller: blocksMiningForController,
    controllerAs: 'vm',
    bindings: {
      minerStatus: '<'
    }
  })

function blocksMiningForController ($window) {
  var vm = this
  vm.displayedText = {
    initial: {
      on: 'Mining for Blocks for Change',
      off: 'Your miner is off'
    },
    secondary: {
      on: 'Learn more!',
      off: 'Turn it on in your settings'
    }
  }
  vm.openTab = function () {
    if (!vm.minerStatus) {
      return
    }
    $window.open('http://www.blocksforchange.org', '_blank')
  }
}
