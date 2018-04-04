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
    let symptom = $("#symptomInput").val();
    let address = $("#addressInput").val();
    apiCall.findDoctor(address, symptom, display);
  })

});
