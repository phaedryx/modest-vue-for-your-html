import { ref } from 'vue'

const Widget = {
  name: 'Widget',
  setup() {
    var errorMessage = ref(null)

    const check = (name) => {
      if (/^WX-.+/.test(name)) {
        errorMessage.value.textContent = ''
      } else {
        errorMessage.value.textContent = 'This style name is incorrect'
      }
    }
    window.errorMessage = errorMessage

    return { errorMessage, check }
  }
}

export default Widget
