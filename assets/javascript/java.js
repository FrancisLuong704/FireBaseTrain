//Initialize Firebase
var config = {
    apiKey: "AIzaSyD8YPfXY9oUqPEp-2OrWSoW21oZpQMsof8",
    authDomain: "test-database-395f1.firebaseapp.com",
    databaseURL: "https://test-database-395f1.firebaseio.com",
    projectId: "test-database-395f1",
    storageBucket: "test-database-395f1.appspot.com",
    messagingSenderId: "490535248720"
  };
  firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added", function (snapshot) {
    var newRow = $("<tr>");
    var nameRow = $("<td>").text(snapshot.val().name);
    var destinationRow = $("<td>").text(snapshot.val().destination);
    var frequencyRow = $("<td>").text(snapshot.val().frequency);
    var nextArrivalRow = $("<td>").text(snapshot.val().nextArrival);
    var minutesAwayRow = $("<td>").text(snapshot.val().minutesAway);

    newRow.append(nameRow);
    newRow.append(destinationRow);
    newRow.append(frequencyRow);
    newRow.append(nextArrivalRow);
    newRow.append(minutesAwayRow);
    $('#trainInfo').append(newRow);
    
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

$("#submit").on('click', function () {
    event.preventDefault();

    var name = $("#trainName-input").val().trim();
    var destination = $('#destination-input').val().trim();
    var frequency = $('#frequency-input').val().trim();
    var nextArrival = $('#nextArrival-input').val().trim();
    var minutesAway = $('#minutesAway-input').val().trim();

    database.ref().push({
        name: name,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival,
        minutesAway: minutesAway
    });

})
