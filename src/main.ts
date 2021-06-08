import hello from './hello'

function init() {
  console.debug('🚀 Starting Up')
  console.log('Result: ' + hello())
}

try {
  init()
} catch (error) {
  console.error('Error In Init: ', error)
}
