/*window.onload = function() {
  const links = document.querySelectorAll('nav ul li a');
  const contentContainer = document.getElementById('content');

  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const pageUrl = link.getAttribute('href');

      fetch(pageUrl)
        .then(function(response) {
          return response.text();
        })
        .then(function(content) {
          contentContainer.innerHTML = content;
        })
        .catch(function(error) {
          console.log('Error loading page: ' + error);
        });
    });
  });
};*/