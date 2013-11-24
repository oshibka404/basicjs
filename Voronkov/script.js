var allo_egg1 = document.getElementById('egg1'),
    allo_egg2 = document.getElementById('egg2'),
    allo_pilman = document.getElementById('pilman'),
    allo_write_time = document.getElementById('timer');

allo_egg1.addEventListener('click', timer_egg1, false);
allo_egg2.addEventListener('click', timer_egg2, false);
allo_pilman.addEventListener('click', timer_pilman, false);

function timer_egg1() {
    var time = 300;
    var interval_egg1 = setInterval(timer, 1000);
    function timer() {
        time-=1;
        min = Math.floor(time/ 60);
        sek = time % 60;
        allo_write_time.textContent = min+":"+sek;
        if (time == 0) {
            allo_egg1.style.background = "#ff0000";
            allo_write_time.style.background = "#ff0000";
            clearInterval(interval_egg1);
        }
    }
}

function timer_egg2() {
    var time = 600;
    var interval_egg2 = setInterval(timer, 1000);
    allo_egg1_timer = document.getElementById('egg2_timer');
    function timer() {
        time-=1;
        min = Math.floor(time/ 60);
        sek = time % 60;
        allo_write_time.textContent = min+":"+sek;
        if (time == 0) {
            allo_egg2.style.background = "#ff0000";
            allo_write_time.style.background = "#ff0000";
            clearInterval(interval_egg2);
        }
    }
}

function timer_pilman() {
    var time = 330;
    var interval_pilman = setInterval(timer_p, 1000);
    allo_egg1_timer = document.getElementById('pilman_timer');
    function timer_p() {
        time-=1;
        min = Math.floor(time/ 60);
        sek = time % 60;
        allo_write_time.textContent = min+":"+sek;
        if (time == 0) {
            allo_pilman.style.background = "#ff0000";
            allo_write_time.style.background = "#ff0000";
            clearInterval(interval_pilman);
        }
    }
}