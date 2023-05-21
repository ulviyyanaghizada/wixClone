const inputElements = document.querySelectorAll('.bottomborder');

inputElements.forEach(function(inputElement) {
  inputElement.addEventListener('focus', function() {
    this.style.borderBottomColor = 'blue';
  });

  inputElement.addEventListener('blur', function() {
    this.style.borderBottomColor = 'grey';
  });
});
