const rating = document.querySelectorAll('#starRating');

rating.forEach(star => {
    let stars = star.textContent.length;
    star.setAttribute('aria-label', `Rating: ${stars} out of 5 stars`);
});