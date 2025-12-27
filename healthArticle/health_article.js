var xhr = new XMLHttpRequest();
var url = './health_article.json';
var articlesDiv = document.getElementById('articles');

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
  if (xhr.status === 200) {
    var articles = xhr.response.articles;

    articles.forEach(function (article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      // Title
      var title = document.createElement('h2');
      title.textContent = article.title;

      // Description
      var description = document.createElement('p');
      description.textContent = article.description;

      // Ways to achieve
      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function (way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      // Benefits
      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function (benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      // Append elements to articleDiv
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      // Append articleDiv to container
      articlesDiv.appendChild(articleDiv);
    });
  } else {
    console.error('Failed to load JSON:', xhr.status);
  }
};

xhr.send();
