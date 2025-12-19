let API_KEY = "8c603dff505342049733bb4ec3468fb7";

async function getNews() {

 
        let search = document.getElementById("searchInput").value;
        let container = document.getElementById("newsContainer");
          if (search === "") {
    alert("Please enter something to search");
    return;
  }

    
    let response = await fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${API_KEY}`)
    let data = await response.json();
            if(data.totalResults === 0){
              alert("No News Found!....")
            }
            console.log(data);
            
               container.innerHTML = "";
             data.articles.forEach(articles => {
                  
                  
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
                    
                  }
                 
                
              


