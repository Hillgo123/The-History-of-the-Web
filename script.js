const blob = document.querySelector('.blob');

const move_blob = (e) => {
    const x = e.pageX - blob.offsetWidth / 2,
        y = e.pageY - blob.offsetHeight / 2;

    // create a keyframes object with the transform property
    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }

    // animate the blob element
    blob.animate(keyframes, {
        duration: 1500,
        fill: 'forwards'
    });
}

const change_blob_color = (color) => {
    const keyframes = {
        background: color
    }

    blob.animate(keyframes, {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards'
    });
}


document.addEventListener('DOMContentLoaded', () => {
    change_blob_color("#FFEB3B");
});

document.addEventListener('mousemove', (e) => {
    move_blob(e);
});


var events = document.querySelectorAll(".events");
var descriptions = document.querySelectorAll(".description-flex-container p");

// Loop through each event
events.forEach(function (e) {
    // Add click event to each event
    e.addEventListener("click", function () {
        // Get the index of the event that was clicked
        var index = Array.from(events).indexOf(e);
        // Get the description that corresponds to the index of the event
        var matched_descriptions = descriptions[index];

        // Add the class "active" to the event that was clicked
        e.classList.add("active");
        // Add the class "active" to the description that corresponds to the index of the event
        matched_descriptions.classList.add("active");

        // Loop through each event
        Array.from(events).forEach(function (event) {
            // If the event is not the event that was clicked
            if (event !== e) {
                // Remove the class "active" from the event
                event.classList.remove("active");
            }
        });

        // Loop through each description
        Array.from(descriptions).forEach(function (desciprion) {
            // If the description is not the description that corresponds to the index of the event
            if (desciprion !== matched_descriptions) {
                // Remove the class "active" from the description
                desciprion.classList.remove("active");
            }
        });

        // change the color of the blob depending on the event that was clicked
        switch (index) {
            case 0:
                change_blob_color("#FFEB3B");
                break;
            case 1:
                change_blob_color("#4CAF50");
                break;
            case 2:
                change_blob_color("#F44336");
                break;
            case 3:
                change_blob_color("#E91E63");
                break;
            case 4:
                change_blob_color("#2196F3");
                break;
            case 5:
                change_blob_color("#FF9800");
                break;
            case 6:
                change_blob_color("#3F51B5");
                break;
            case 7:
                change_blob_color("#009688");
                break;
            case 8:
                change_blob_color("#FF5722");
                break;
            case 9:
                change_blob_color("#9C27B0");
                break;
            case 10:
                change_blob_color("#00BCD4");
                break;
            case 11:
                change_blob_color("#795548");
                break;
        }
    });
});