var dayTime = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var hours = document.getElementById("hours")



moment(Date)
 $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));


function getTime(){
var currentTime = moment();
currentTime = currentTime.startOf("hour");
}

dayTime.forEach(function(time) {
    console.log(time)

    var dayHours = [];
    dayHours.push(moment().hour(time).minutes("00").format('hh:mm A'));

    var hourDiv = $("<div>");
    hourDiv.addClass("input-group input-group-lg pb-1 hour");
    
    var hourSpan = $("<span>");
    hourSpan.text(dayTime.length)
    hourSpan.addClass("input-group-text time-block block");
    hourDiv.append(hourSpan); 
    
    var hourInput = $("<input>").attr('type', 'text');
    hourInput.addClass("form-control form");
    hourInput.data("Hour");
    hourDiv.append(hourInput);


    var hourSubmit = $("<button>").attr("type", 'click');
    hourSubmit.addClass("btn saveBtn");
    hourDiv.append(hourSubmit);


    var hourIcon = $("<i class ='far fa-save fa-lg'></i>")
    hourSubmit.append(hourIcon)


    $(".container").append(hourDiv);
    
})
