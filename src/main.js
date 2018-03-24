import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Api } from './api.js';

function display(doctorData){
  doctorData.forEach(function(doctor){
    $('.container .row').append(`<div class="col-sm-3">
                            <div class="card">
                              <img src="${doctor[2]}">
                              <h4>${doctor[0]} ${doctor[1]}</h4>
                            </div>
                          </div>`)
  });
}

$(document).ready(function() {
  let apiCall = new Api();

  $("button").click(function(){
    $(".container .row").empty();
    let movie = $("#symptomInput").val();
    apiCall.findDoctor(movie, display);
  })

});

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
