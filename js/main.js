// Search -->
let trendMovies =[];
function search(searchMovie) {
    let searchResult = [];
    for(let i=0 ; i<trendMovies.length ;i++){
    if (trendMovies[i].name.toLowerCase().includes(searchMovie.toLowerCase())==true)
    {
        searchResult.push(trendMovies[i]);
        document.querySelectorAll('word').innerHTML=movieList;
    }
        }         
}








// trend Movies Api -->

let myHttb =new XMLHttpRequest();

   myHttb.open('GET','https://api.themoviedb.org/3/trending/movie/week?api_key=33fb3acb2a37d8cd8cad27196275f06e');
   myHttb.send();
    myHttb.addEventListener('readystatechange',function () {
        if (myHttb.readyState==4 && myHttb.status ==200) {
            trendMovies=JSON.parse(myHttb.response).results;
            displayMovies( function(){
                search (trendMovies);
            });
            
        }
    });

function displayMovies() {
    let movieList=``;
    for (let i = 0; i < trendMovies.length; i++) {
        movieList+=` <div class="col-lg-4 my-3 shadow ">
        <div class="movies shadow rounded position-relative overflow-hidden">
            <img src='https://image.tmdb.org/t/p/w500${trendMovies[i].poster_path}' class=" img-fluid rounded ">
            <div class="layer d-flex align-items-center">
                <div class="info p-0">
                    <h2> ${trendMovies[i].title}</h2>
                    <p>${trendMovies[i].overview}</p>
                    <p>${trendMovies[i].vote_average}</p>
                    <p> ${trendMovies[i].release_date} </p>
                </div>
            </div>
        </div>
    </div> `;
    }
    document.getElementById('rowData').innerHTML=movieList;
    };
