var dayTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeNow = moment().format("HH:mm")


moment(Date)
 $("#currentDay").text(moment().format('dddd MMMM Do, h:mm a'));
  
var currentTime = moment()
currentTime = currentTime.startOf("hour");

dayTime.forEach(function(dayTime) {

    var dayHours = [];
    dayHours.push(moment().hour(dayTime).minutes("00").format('hh:mm A'));

    var hourDiv = $("<div>");
    hourDiv.addClass("form-group input-group input-group-lg pb-1 form-rounded");
    
    var hourSpan = $("<span>");
    hourSpan.text(dayHours);
    hourSpan.addClass("input-group-text time-block block");
    hourDiv.append(hourSpan); 
    
    var hourInput = $("<input>").attr('type', 'text');
    hourInput.addClass("form-control form col-md-9");
    hourInput.data("Hour");
    hourDiv.append(hourInput);


    var hourSubmit = $("<button>").attr("type", 'submit');
    hourSubmit.addClass("col-md-1 btn saveBtn");
    hourDiv.append(hourSubmit);


    var hourIcon = $("<i class ='far fa-save fa-lg'></i>")   
    hourSubmit.append(hourIcon)

    $(".container").append(hourDiv);

     console.log(timeNow)
 
        if (timeNow < dayTime) {
          hourInput.addClass("past");
      } else if (timeNow > dayTime) {
          hourInput.addClass("future");
      } else if (timeNow === dayTime) {
          hourInput.addClass("present")
      } 
   
    
})

