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

  open () {
    this.beforeOpen()
    this.modal.classList.add('easy-modal--active')
  }

  close () {
    this.beforeClose()
    this.modal.classList.remove('easy-modal--active')
  }

  beforeOpen () {
    if (this.settings.beforeOpen && typeof this.settings.beforeOpen === 'function') {
      this.settings.beforeOpen()
    }
  }

  beforeClose () {
    if (this.settings.beforeClose && typeof this.settings.beforeClose === 'function') {
      this.settings.beforeClose()
    }
  }

  startOpen () {
    if (!this.settings.open) return false

    const openElements = document.querySelectorAll(this.settings.open)
      
    openElements.forEach(element => {
      element.addEventListener('click', () => {
        this.open()
      })
    })
  }

  startClose () {
    if (!this.settings.close) return false
    
    const closeElements = document.querySelectorAll(this.settings.close)
      
    closeElements.forEach(element => {
      element.addEventListener('click', () => {
        this.close()
      })
    })
  }
}

export default EasyModal
