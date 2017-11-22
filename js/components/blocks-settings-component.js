angular.module('blockchange')
  .component('blocksSettings', {
    templateUrl: '../../templates/blocks-settings-tmpl.html',
    controller: blocksSettingsController,
    controllerAs: 'vm',
    bindings: {
      minerStatus: '<',
      onSettingsAction: '&'
    }
  })

function blocksSettingsController ($element) {
  var vm = this

  window.addEventListener('click', closeOnClick)

  function closeOnClick (e) {
    if ($element[0].contains(e.target)) {
      return
    }
    vm.onSettingsAction({
      action: 'close-settings'
    })
  }

  vm.toggleMiner = function () {
    vm.minerStatus = !vm.minerStatus
    vm.onSettingsAction({
      action: 'toggle-miner-status',
      payload: {
        miner_status: vm.minerStatus
      }
    })
  }

  vm.$onDestroy = function () {
    window.removeEventListener('click', closeOnClick)
  }
}
