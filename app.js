function init(event) {
  let formWrapper = document.querySelector('.form-wrapper');
  let searchBtn = document.querySelector('.search-btn');
  let searchBtnIcon = document.querySelector('.search-btn-icon');
  let searchInput = document.querySelector('.search-input');

  searchBtn.addEventListener('click', function(event) {
    let containsSearchIcon = searchBtnIcon.classList.contains('fa-search');
    let containsCloseIcon = searchBtnIcon.classList.contains('fa-times');
    if (containsSearchIcon) {
      searchBtnIcon.classList.remove('fa-search');
      searchBtnIcon.classList.add('fa-times');
      searchInput.focus();
    }
    if (containsCloseIcon) {
      searchBtnIcon.classList.remove('fa-times');
      searchBtnIcon.classList.add('fa-search');
      searchInput.value = '';
      searchInput.blur();
    }
    formWrapper.classList.toggle('active');
  })


}

window.addEventListener('DOMContentLoaded', init);