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
                data.articles.map(article => {
                    container.innerHTML += `
                    
                      <div class="news-card">
                      <img src="${article.urlToImage}" alt="Image not available">
                      <h3>${article.title || 'Title not available'}</h3>
                      <p>${article.description || 'Description not available'}</p>
                       <p><strong>Author:</strong> ${article.author || 'Unknown'}</p>
                       <p><strong>Source:</strong> ${article.source.name || 'Unknown Source'}</p>
                       <p><strong>Date:</strong> ${article.publishedAt ? new Date(article.publishedAt).toDateString() : 'Date not available'}</p>
                       <p>${article.content || 'Content not available'}</p>
                       <a href="${article.url || '#'}">Read Full Article</a>
                       </div>
                       
                       `;
                      });
                      
                    
                  })
                  .catch(error =>{ 
                    console.log(error)
                  });
                }
              


