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

document.addEventListener('mousemove', (e) => {
    blob.style.left = (e.pageX - 150) + 'px';
    blob.style.top = (e.pageY - 150) + 'px';
});




