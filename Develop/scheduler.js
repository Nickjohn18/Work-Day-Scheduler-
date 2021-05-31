var dayTime = [09, 10, 11, 12, 13, 14, 15, 16, 17];
 var timeNow = moment().format("HH");
 var container = document.querySelector(".container")
var getInput = localStorage.getItem


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
    hourInput.data("Hour");
    hourInput.addClass("form-control form col-md-9");
    hourDiv.append(hourInput);
    
    var hourSubmit = $("<button>").attr("type", 'submit');
    hourSubmit.addClass("col-md-1 btn saveBtn");
    hourDiv.append(hourSubmit);
    
    var hourIcon = $("<i class ='far fa-save fa-lg'></i>")     
    hourSubmit.append(hourIcon)

    $(".container").append(hourDiv);

    console.log(currentTime)
    console.log(dayTime)
 
        if (dayTime < timeNow) {
          hourInput.addClass("past");

      } else if (dayTime > timeNow) {
          hourInput.addClass("future");

      } else if (dayTime === timeNow) {
          hourInput.addClass("present");
      } 
    })


// still working on local storage! Value coming back as undefined
// get the localstorage to display even after refreshing.

//  for (var i = 0; i < dayTime.length; i++) {
//      var loadData = localStorage.getItem(dayTime[i]);
//     $(".form-control" + dayTime[i]).val(loadData)
//     container.append(loadData);
//  }
//  function loadTask() {
//     dayTime.forEach(function() {
//         localStorage.getItem(dayTime.length)
//         $('.form-control').val();
//     })
    
//  }
// console.log(loadTask)

// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();
//     var inputValue = $(this).siblings(".form").val();
//     var item = $(this).parent().data("hour")

//     localStorage.setItem(inputValue, item)

//     loadTask();
// })

// function savetask() {
//     localStorage.setItem("dayTime", dayTime)
// }

// function display() {
//     dayTime.forEach(function() {
//         localStorage.getItem("dayTime")
//     })
// }

// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();
//     var saveIndex = $(this).siblings(".form").val();
//     dayTime[saveIndex] = $(this).parent().data("hour")
//     console.log(saveIndex)
    
//     savetask();
//     display();


// })
