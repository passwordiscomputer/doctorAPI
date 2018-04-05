import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Api } from './api.js';

function display(doctorData){
  if(doctorData.length > 0){
    doctorData.forEach(function(doctor){
        $('.container .row').append(`<div class="col-sm-3">
                                <div class="card">
                                  <img src="${doctor[2]}">
                                  <h4>${doctor[0]} ${doctor[1]}</h4>
                                </div>
                              </div>`)
    });
  }  else {
    $('.container .row').append('<h1>No Results Found Please try another search</h1>');
  }
}

$(document).ready(function() {
  let apiCall = new Api();

  $("button").click(function(){
    $(".container .row").empty();
    let symptom = $("#symptomInput").val();
    let address = $("#addressInput").val();
    let name = $("#nameInput").val();
    if (address == '') {
      $('.container .row').append('<h1>Please Enter a valid Address</h1>');
    } else{
      apiCall.findDoctor(address, name, symptom, display);
    }
  })

});
