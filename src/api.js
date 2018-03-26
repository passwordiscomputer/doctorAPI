import $ from 'jquery';

export class Api {
  //function to call, extract, then display using display callback
  findDoctor(inputSymptom, displayFunction){
    // let betterDoctorUrl = betterDoctorUrl(lat, long, inputSymptom, process.env.exports.apiKey)
    this.callApi(this.geocodeUrl("97219"))
    .then((response)=>{
      console.log(response);
    })
  }
//api calls
//better doctor api call
//takes in a symtom
  callApi(url) {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          //returns the response at fulfillment of promise
          resolve(request.response);
        } else {
          reject(alert(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }

//api url builders
  betterDoctorUrl(lat, long, symptom){
    return `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=${lat}%2C${long}%2C10&user_location=${lat}%2C${long}&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
  }
  geocodeUrl(address){
    return `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.exports.geocodeKey}`;
  }
  //Process api data
  extractBD(json){
    let array = []
    let body = JSON.parse(json);
    body.data.forEach(function(doctor){
      array.push([doctor.profile.first_name, doctor.profile.last_name, doctor.profile.image_url]);
    });
    return array;
  }

}
