import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Api } from './api.js';

$(document).ready(function() {

  let apiCall = new Api();
  apiCall.callBetterDoctorApi("sore throat")
  .then(function(response){
    console.log(apiCall.extractBD(response));
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
