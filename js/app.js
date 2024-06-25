    // JavaScript qismi
    document.addEventListener('DOMContentLoaded', function() {
        var darkBtn = document.getElementById('darkBtn');
        var lightBtn = document.getElementById('lightBtn');
        var container = document.querySelector('.container');

        darkBtn.addEventListener('click', function() {
            container.classList.remove('light-mode');
            container.classList.add('dark-mode');
        });

        lightBtn.addEventListener('click', function() {
            container.classList.remove('dark-mode');
            container.classList.add('light-mode');
        });
    });



    