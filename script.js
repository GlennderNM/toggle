let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

toggleBtn.oncllick = function() {
    container.classList.toggle('active');
}