class EasyModal {
  modal = null
  settings = null

  constructor (settings) {
    if (!settings) {
      throw new Error('Missing parameter: settings');
    }

    if (!settings.el) {
      throw new Error('Missing parameter: el');
    }

    this.modal = document.querySelector(settings.el)
    this.settings = settings
  }

  start () {
    this.startOpen()
    this.startClose()
  }

  startOpen () {
    if (!this.settings.open) return false

    const openElements = document.querySelectorAll(this.settings.open)
      
    openElements.forEach(element => {
      element.addEventListener('click', () => {
        this.modal.classList.add('easy-modal--active')
      })
    })
  }

  startClose () {
    if (!this.settings.close) return false
    
    const closeElements = document.querySelectorAll(this.settings.close)
      
    closeElements.forEach(element => {
      element.addEventListener('click', () => {
        this.modal.classList.remove('easy-modal--active')
      })
    })
  }
}

export default EasyModal
