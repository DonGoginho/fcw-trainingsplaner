document.addEventListener('DOMContentLoaded', function () {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var grundsaetzeSection = document.getElementById('grundsaetze');
  var trainingsSection = document.getElementById('trainings');
  var trainingsCards = document.querySelectorAll('#trainings .training-card[data-thema]');
  var divider = document.querySelector('.section-divider');
  var emptyState = document.getElementById('empty-state');

  function applyFilter(section) {
    filterBtns.forEach(function (b) { b.classList.remove('active'); });
    var activeBtn = document.querySelector('.filter-btn[data-section="' + section + '"]');
    if (activeBtn) activeBtn.classList.add('active');

    if (section === 'alle') {
      grundsaetzeSection.style.display = '';
      trainingsSection.style.display = '';
      divider.style.display = '';
      trainingsCards.forEach(function (card) { card.style.display = ''; });
      if (emptyState) emptyState.style.display = 'none';

    } else if (section === 'grundsaetze') {
      grundsaetzeSection.style.display = '';
      trainingsSection.style.display = 'none';
      divider.style.display = 'none';

    } else {
      grundsaetzeSection.style.display = 'none';
      trainingsSection.style.display = '';
      divider.style.display = 'none';

      var visibleCount = 0;
      trainingsCards.forEach(function (card) {
        if (card.getAttribute('data-thema') === section) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? '' : 'none';
      }
    }
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyFilter(btn.getAttribute('data-section'));
    });
  });

  var params = new URLSearchParams(window.location.search);
  var thema = params.get('thema');
  if (thema) {
    applyFilter(thema);
  }
});
