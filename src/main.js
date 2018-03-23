import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Api } from './api.js';

function displayMovies(movieData){
  $('.container .row').append(`<div class="col-sm-3">
                          <div class="card">
                            <img src="http://image.tmdb.org/t/p/w185//${movieData[2]}" alt="">
                            <h4>${movieData[0]}</h4>
                            <p>${movieData[1]}</p>
                          </div>
                        </div>`)
}


$(document).ready(function() {
  let apiCall = new Api();
  $("button").click(function(){
    $(".container .row").empty();
    let movie = $("#input").val();
    apiCall.getSimilarMovies(movie, displayMovies);
  })

  // apiCall.callTasteDiveApi('casa blanca')
  // .then((response)=>{
  //   let movieArray = apiCall.extractTasteDive(response);
  //   movieArray.forEach(function(movie){
  //     apiCall.callMovieDBApi(movie)
  //     .then((response)=>{
  //       console.log(apiCall.extractMovieDB(response))
  //       displayMovies(apiCall.extractMovieDB(response));
  //     })
  //   })
  //
  // });
});
