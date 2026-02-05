const spans = document.querySelectorAll('article.movie p span'); //reads right to left, so it will read the last span first, which is the one with the rating

spans.forEach(span => {
    const stars = span.textContent.length;
    span.setAttribute('aria-label', `Rating: ${stars} out of 5 stars`);
});