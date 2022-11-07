const primary = document.querySelectorAll('.primary')
const secondary = document.querySelectorAll('.secondary')
const headerPrimary = document.querySelector('.header-primary')
const headerSecondary = document.querySelector('.header-secondary')

headerPrimary.innerText = primary.length
headerSecondary.innerText = secondary.length
