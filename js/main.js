document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger')
  const menuList = document.getElementById('menu-list')
  const btnDivisi = document.getElementById('btn-divisi')
  const menuDivisi = document.getElementById('menu-divisi')
  const btnDivisiDesktop = document.getElementById('btn-divisi-desktop')
  const menuDivisiDesktop = document.getElementById('menu-divisi-desktop')

  const arrow = document.getElementById('arrow')
  const arrowDesktop = document.getElementById('arrow-desktop')
  const overlay = document.getElementById('overlay')


  hamburger.addEventListener('click', (e) => {
      e.stopPropagation()
      // menuList.classList.toggle('hidden')

      if (menuList.classList.contains('hidden')) {
          menuList.classList.remove('hidden')
          overlay.style.display = 'block'
      } else {
          menuList.classList.add('hidden')
          overlay.style.display = 'none'
      }
  })

  // menu divisi mobile
  btnDivisi.addEventListener('click', (e) => {
      e.stopPropagation()
      // menuDivisi.classList.toggle('hidden')

      if (menuDivisi.classList.contains('hidden')) {
          menuDivisi.classList.remove('hidden')
          arrow.classList.add('rotate-arrow')
      } else {
          menuDivisi.classList.add('hidden')
          arrow.classList.remove('rotate-arrow')
      }
  })

  // menu divisi desktop
  btnDivisiDesktop.addEventListener('click', (e) => {
      e.stopPropagation()
      // menuDivisi.classList.toggle('hidden')

      if (menuDivisiDesktop.classList.contains('hidden')) {
          menuDivisiDesktop.classList.remove('hidden')
          arrowDesktop.classList.add('rotate-arrow')
      } else {
          menuDivisiDesktop.classList.add('hidden')
          arrowDesktop.classList.remove('rotate-arrow')
      }
  })

  menuList.addEventListener('click', (e) => {
      e.stopPropagation()
  })

  // menuDivisi.addEventListener('click', (e) => {
  //     e.stopPropagation()
  // })




  document.addEventListener('click', (e) => {
      if (!btnDivisi.contains(e.target) && !menuDivisi.contains(e.target)) {
          menuDivisi.classList.add('hidden')
          arrow.classList.remove('rotate-arrow')
      }

      if (!btnDivisiDesktop.contains(e.target) && !menuDivisiDesktop.contains(e.target)) {
          menuDivisiDesktop.classList.add('hidden')
          arrowDesktop.classList.remove('rotate-arrow')
      }

      // if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
      //     // navbar.classList.toggle('hidden')
      //     closeMenu()
      // }
      closeMenu()
  })



  function closeMenu() {
      menuList.classList.add('hidden')
      overlay.style.display = 'none'

      if (!menuDivisi.classList.contains('hidden')) {
          menuDivisi.classList.add('hidden')
          arrow.classList.remove('rotate-arrow')
      }
  }


})