import $ from 'jquery';



export class Api {
//api calls
//better doctor api call
//takes in a symtom
  callBetterDoctorApi(symptom) {
    return new Promise(function(resolve, reject){
      const betterDoctorKey = process.env.exports.apiKey;
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45.478913%2C-122.673460%2C10&user_location=45.478913%2C-122.673460&skip=0&limit=10&user_key=${betterDoctorKey}`;
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

  //Process api data
  extractBD(json){
    let array = []
    let body = JSON.parse(json);
    body.data.forEach(function(doctor){
      array.push([doctor.profile.first_name, doctor.profile.last_name]);
    });
    return array;
  }

}
