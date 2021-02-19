// /var expenses = {
//     personal: 0,
//     savings: 0,
//     food: 0,
//     entertainment: 0,
//     transport: 0,
//     utilities: 0
// };

// function editExpenses() {
//     expenses.entertainment = document.getElementById("entertainment").value;
//     expenses.food = document.getElementById("food").value;
//     expenses.personal = document.getElementById("personal").value;
//     expenses.savings = document.getElementById("savings").value;
//     expenses.transport = document.getElementById("transport").value;
//     expenses.utilities = document.getElementById("utilities").value;
// };


  //[STEP 0]: Make sure our document is A-OK
$(document).ready(function account() {
    //what kind of interface we want at the start 
    const APIKEY = "602f5d475ad3610fb5bb6393";
  
    //[STEP 1]: Create our submit form listener
    $("#submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let userName = $("#username").val();
      let password= $("#password").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "username": userName,
        "password": password,
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ipdatabase-ff9c.restdb.io/rest/expenses",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
      }
  
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#submit").prop( "disabled", false);

      });
    });//end click 
  
  
    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getContacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ipdatabase-ff9c.restdb.io/rest/expenses",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function (response) {
        console.log(response);
        
    },
  
    //[STEP 13]: function that makes an AJAX call and process it 
    //UPDATE Based on the ID chosen
    function updateForm(id, userName, password) {
      //@TODO create validation methods for id etc. 
  
      var jsondata = { "username": userName, "password": password };
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://ipdatabase-ff9c.restdb.io/rest/expenses${id}`,//update based on the ID
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
  
      //[STEP 13a]: send our AJAX request and hide the update contact form
      $.ajax(settings).done(function (response) {
        console.log(response);
        
      });
    })//end updateform function
  
  })

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ipdatabase-ff9c.restdb.io/rest/expenses",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "602f5d475ad3610fb5bb6393",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  //[STEP 0]: Make sure our document is A-OK
$(document).ready(function expenses() {
    //what kind of interface we want at the start 
    const APIKEY = "602f5d475ad3610fb5bb6393";
  
    //[STEP 1]: Create our submit form listener
    $("#submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let personal = $("#personal").val();
      let savings= $("#savings").val();
      let transport= $("#transport").val();
      let utilities= $("#utilities").val();
      let food= $("#food").val();
      let entertainment= $("#entertainment").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "personal": personal,
        "savings": savings,
        "transport": transport,
        "utilities": utilities,
        "food": food,
        "entertainment": entertainment,
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ipdatabase-ff9c.restdb.io/rest/expenses",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
      }
  
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#submit").prop( "disabled", false);

      });
    });//end click 
  
  
    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getData(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ipdatabase-ff9c.restdb.io/rest/expenses",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function (response) {
        console.log(response);
        
    },
  
    //[STEP 13]: function that makes an AJAX call and process it 
    //UPDATE Based on the ID chosen
    function updateForm(id, personal, savings, entertainment, utilities, food, transport) {
      //@TODO create validation methods for id etc. 
  
      var jsondata = { "personal": personal,"savings": savings,"transport": transport,"utilities": utilities,"food": food,"entertainment": entertainment, };
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://ipdatabase-ff9c.restdb.io/rest/account${id}`,//update based on the ID
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
  
      //[STEP 13a]: send our AJAX request and hide the update contact form
      $.ajax(settings).done(function (response) {
        console.log(response);
        
      });
    })//end updateform function
  
  });

  function editExpenses() {
    document.getElementById("overlay").style.display = "block";

  };

  function off() {
    document.getElementById("overlay").style.display = "none";
  };

  function changeBackground() {
    if (health == "low") {
      var background = document.getElementById('_bg__homepage_ek2');
      background.setAttribute('src', 'images/Homepage/Low Health BG.png');
      var character = document.getElementById('charactermodel');
      character.setAttribute('src', 'images/Homepage//sad_character.png');
      var pet = document.getElementById('pet');
      pet.setAttribute('src', 'images/Homepage/moneypet.png');
    } else if (health == "mid") {
      var background = document.getElementById('_bg__homepage_ek2');
      background.setAttribute('src', 'images/Homepage//character.png');
      var character = document.getElementById('charactermodel');
      character.setAttribute('src', 'images/Homepage//sad_character.png');
      var pet = document.getElementById('pet');
      pet.setAttribute('src', 'images/Homepage/moneypet.png');
    } else {
      var background = document.getElementById('_bg__homepage_ek2');
      background.setAttribute('src', 'images/Homepage/High Health BG.png');
      var character = document.getElementById('charactermodel');
      character.setAttribute('src', 'images/Homepage//happy_character.png');
      var pet = document.getElementById('pet');
      pet.setAttribute('src', 'images/Homepage/moneypet.png');
    };
  };