function toggleSocials() {
  const socialLinks = document.getElementById('social-links')
  const buttonShare = document.querySelector('#share-button')
  const buttonShareSVG = document.querySelector('#share-button svg')

  if (socialLinks.classList.contains('hidden')) {
    socialLinks.classList.remove('hidden')
    socialLinks.classList.add('flex')
  } else {
    socialLinks.classList.remove('flex')
    socialLinks.classList.add('hidden')
  }

  if (buttonShare.classList.contains('bg-light-grayish-blue')) {
    buttonShare.classList.remove('bg-light-grayish-blue')
    buttonShare.classList.add('bg-desatured-dark-blue')

    buttonShareSVG.classList.remove('text-desatured-dark-blue')
    buttonShareSVG.classList.add('text-light-grayish-blue')
  } else {
    buttonShare.classList.remove('bg-desatured-dark-blue')
    buttonShare.classList.add('bg-light-grayish-blue')

    buttonShareSVG.classList.remove('text-light-grayish-blue')
    buttonShareSVG.classList.add('text-desatured-dark-blue')
  }
}
