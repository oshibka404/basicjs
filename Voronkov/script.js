var allo_egg1 = document.getElementById('egg1'),
    allo_egg2 = document.getElementById('egg2'),
    allo_pilman = document.getElementById('pilman'),
    allo_write_time = document.getElementById('timer'),
    time = 0;

allo_egg1.addEventListener('click', function() {
    allo = allo_egg1;
    time=300;
    timer();
}, false);
allo_egg2.addEventListener('click', function() {
    allo = allo_egg2;
    time = 600;
    timer();
}, false);
allo_pilman.addEventListener('click', function() {
    allo = allo_pilman;
    time = 330;
    timer();
}, false);

function timer() {
    var interval_egg1 = setInterval(timer, 1000);
    function timer() {
        time-=1;
        min = Math.floor(time/ 60);
        sek = time % 60;
        allo_write_time.textContent = min+":"+sek;
        if (time == 0) {
            allo.style.background = "#ff0000";
            allo_write_time.style.background = "#ff0000";
            clearInterval(interval_egg1);
        }
    }
}

