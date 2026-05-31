document.addEventListener('DOMContentLoaded', function () {
  var uebungen = document.querySelectorAll('.training-detail > .uebung');
  if (uebungen.length < 2) return;

  var themaMeta = document.querySelector('meta[name="thema"]');
  var thema = themaMeta ? themaMeta.getAttribute('content') : '';
  var backLink = document.querySelector('.back-link');
  if (backLink && thema) {
    backLink.href = '../index.html?thema=' + thema;
  }

  document.body.classList.add('has-uebung-nav');

  var nav = document.createElement('nav');
  nav.className = 'uebung-nav';
  nav.innerHTML =
    '<button id="nav-prev">&larr;</button>' +
    '<div class="uebung-nav-info">' +
      '<span id="nav-pos"></span>' +
      '<small id="nav-title"></small>' +
    '</div>' +
    '<button id="nav-next">&rarr;</button>';
  document.body.appendChild(nav);

  var btnPrev = document.getElementById('nav-prev');
  var btnNext = document.getElementById('nav-next');
  var navPos = document.getElementById('nav-pos');
  var navTitle = document.getElementById('nav-title');
  var current = -1;

  function getTitle(el) {
    var h2 = el.querySelector('h2');
    if (!h2) return '';
    var text = h2.textContent;
    var match = text.match(/^[\d]+\.\s*(.+?)(?:\s*\(.*\))?$/);
    return match ? match[1] : text;
  }

  function findCurrent() {
    var headerH = 90;
    var best = 0;
    for (var i = 0; i < uebungen.length; i++) {
      var rect = uebungen[i].getBoundingClientRect();
      if (rect.top <= headerH + 60) {
        best = i;
      }
    }
    return best;
  }

  function update() {
    var idx = findCurrent();
    if (idx === current) return;
    current = idx;
    navPos.textContent = (current + 1) + ' / ' + uebungen.length;
    navTitle.textContent = getTitle(uebungen[current]);
    btnPrev.disabled = current === 0;
    if (current === uebungen.length - 1) {
      btnNext.innerHTML = '&uarr;';
      btnNext.disabled = false;
    } else {
      btnNext.innerHTML = '&rarr;';
      btnNext.disabled = false;
    }
  }

  function scrollTo(idx) {
    if (idx < 0 || idx >= uebungen.length) return;
    var headerH = 90;
    var top = uebungen[idx].getBoundingClientRect().top + window.scrollY - headerH;
    window.scrollTo({ top: top, behavior: 'smooth' });
    current = idx;
    navPos.textContent = (current + 1) + ' / ' + uebungen.length;
    navTitle.textContent = getTitle(uebungen[current]);
    btnPrev.disabled = current === 0;
    if (current === uebungen.length - 1) {
      btnNext.innerHTML = '&uarr;';
    } else {
      btnNext.innerHTML = '&rarr;';
    }
  }

  btnPrev.addEventListener('click', function () { scrollTo(current - 1); });
  btnNext.addEventListener('click', function () {
    if (current === uebungen.length - 1) {
      if (backLink) {
        window.location.href = backLink.href;
      } else {
        window.location.href = '../index.html';
      }
    } else {
      scrollTo(current + 1);
    }
  });

  window.addEventListener('scroll', update, { passive: true });
  update();
});
