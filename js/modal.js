const openModalButtons: document.querySelector("[data-modal-target]"),
onnst closeModalButtons: document.query(Selector("[data-close-button]"),
const overlay = document.getElementById('overlay')

 openModalButtons.forEach(buttons => {
buttons,addEventListener('click', () => {
  const modal = document.querySelector(button.dataset.modalTarget)
  openmodal(modal)
})
 })

 function openmodal(modal)
 if (modal==null) return
 modal.classList.add('active')
overlay.classList.add('active')
