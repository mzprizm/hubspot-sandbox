<!-- Begin partial -->
// smooth scroll for modern browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// smooth scroll for dated browsers
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// wait for CTAs to load
$(window).on('load', () => {
  const reserveCtaId = `#${document.querySelector('[title="Reserve"]').id}`;

  // set CTA to reserve
  $(reserveCtaId).attr('href', '#reserve');
  
  const mutationObserver = new MutationObserver(mutations => {
    // when CTA is updated, replace href with anchor link
    // hubspot seems to update the href multiple times during page load
    mutations.forEach(mutation => {
      if ($(reserveCtaId).attr('href') !== '#reserve') {    
        $(reserveCtaId).attr('href', '#reserve');
      }
    });
  });

  mutationObserver.observe(document.querySelector(reserveCtaId), {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  });
});


// setTimeout(function(){ $('#cta_button_1984131_080e0c69-1815-49c6-a0f6-bbf60f886520').attr('href', '#reservations'); }, 3000);
<!-- End partial -->