// Function to display current date and time
function displayCurrentDateTime() {
    var currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text("Current Date and Time: " + currentDateTime);
}

// Function to update the clock every second
function updateClock() {
    var clockElement = $("#currentDay");
    setInterval(function () {
        var currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        clockElement.text("Current Date and Time: " + currentDateTime);
    }, 1000); // Update every second
}

// Function to dynamically create time blocks
function createTimeBlocks() {
    var currentTime = moment().hour(); // Get the current hour

    for (var hour = 9; hour <= 17; hour++) {
        var timeBlock = $('<div class="row time-block" data-time="' + hour + '">');
        var hourDisplay = $('<div class="col-1 hour">').text((hour > 12 ? hour - 12 : hour) + (hour >= 12 ? ' PM' : ' AM'));
        var textarea = $('<textarea class="col-10 description">').attr('id', 'hour-' + hour);
        var saveBtn = $('<button class="col-1 saveBtn"><i class="fas fa-save"></i></button>');

        timeBlock.append(hourDisplay, textarea, saveBtn);
        $('.container').append(timeBlock);

        // Color code time blocks based on past, present, or future
        if (hour < currentTime) {
            textarea.addClass('past');
        } else if (hour === currentTime) {
            textarea.addClass('present');
        } else {
            textarea.addClass('future');
        }

        // Add click event for the save button (example event logger)
        saveBtn.on('click', function () {
            var savedHour = $(this).parent().data('time');
            console.log("Save button clicked for hour: " + savedHour);
        });
    }
}

// Call functions when the document is ready
$(document).ready(function () {
    displayCurrentDateTime();
    updateClock();
    createTimeBlocks();
});
