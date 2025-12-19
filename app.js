let API_KEY = "8c603dff505342049733bb4ec3468fb7";

function getNews() {

 
        let search = document.getElementById("searchInput").value;
        let container = document.getElementById("newsContainer");
          if (search === "") {
    alert("Please enter something to search");
    return;
  }

    
    fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
            if(data.totalResults === 0){
              alert("No News Found!....")
            }
            
               container.innerHTML = "";
                data.articles.map(articles => {
                   container.innerHTML += `
                   
                   <div class="news-card">
                      <img src="${articles.urlToImage}" alt="Image not available">
                      <h3>${articles.title || 'Title not available'}</h3>
                      <p>${articles.description || 'Description not available'}</p>
                      <p><strong>Author:</strong> ${articles.author || 'Unknown'}</p>
                      <p><strong>Source:</strong> ${articles.source.name || 'Unknown Source'}</p>
                       <p><strong>Date:</strong> ${articles.publishedAt ? new Date(articles.publishedAt).toDateString() : 'Date not available'}</p>
                       <p>${articles.content || 'Content not available'}</p>
                       <a href="${articles.url || '#'}">Read Full Article</a>
                       </div>`;
                      });
                    
                  })
                  .catch(error =>{ 
                    console.log(error)
                  });
                }
              


