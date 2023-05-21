
const fadeTextElements = document.querySelectorAll('.fade-text');

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function handleScroll() {
  fadeTextElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.style.opacity = 1;
    }
  });
}

window.addEventListener('scroll', handleScroll);

window.onload=()=>{
    fadeTextElements.forEach(element => {
        if (isElementInViewport(element)) {
          element.style.opacity = 1;
        }
      });
}