const rating = document.querySelectorAll('#starRating');

rating.forEach(star => {
    const stars = star.textContent.length;
    star.setAttribute('aria-label', `Rating: ${stars} out of 5 stars`);
});