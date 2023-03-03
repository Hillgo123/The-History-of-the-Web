document.addEventListener("DOMContentLoaded", function () {
    var events = document.querySelectorAll(".events");
    var descriptions = document.querySelectorAll(".description-flex-container p");

    events.forEach(function (input) {
        input.addEventListener("click", function () {
            var t = this;
            var index = Array.from(events).indexOf(t);
            var matched_descriptions = descriptions[index];

            t.classList.add("active");
            matched_descriptions.classList.add("active");

            Array.from(events).forEach(function (input) {
                if (input !== t) {
                    input.classList.remove("active");
                }
            });

            Array.from(descriptions).forEach(function (desciprion) {
                if (desciprion !== matched_descriptions) {
                    desciprion.classList.remove("active");
                }
            });
        });
    });
});

const blob = document.querySelector('.blob');


const move_blob = (e) => {
    const x = e.pageX - blob.offsetWidth / 2,
        y = e.pageY - blob.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }

    blob.animate(keyframes, {
        duration: 1500,
        fill: 'forwards'
    });
}


document.addEventListener('mousemove', (e) => {
    move_blob(e);
});
