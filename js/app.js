document.addEventListener('DOMContentLoaded', function () {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var grundsaetzeSection = document.getElementById('grundsaetze');
  var trainingsSection = document.getElementById('trainings');
  var trainingsCards = document.querySelectorAll('#trainings .training-card[data-thema]');
  var divider = document.querySelector('.section-divider');
  var emptyState = document.getElementById('empty-state');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var section = btn.getAttribute('data-section');

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

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
    });
  });
});
