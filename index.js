let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent = count;
};

function save() {
    savedCount = count + " - ";
    resetCount = count = 0;
    countEl.textContent = resetCount;
    let currentDate = new Date();
    let options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    let formattedDate = currentDate.toLocaleString('en-US', options);
    let dateSpan = document.createElement('span')
    let recordedCount = savedCount + formattedDate;
    saveEl.appendChild(dateSpan)
    dateSpan.textContent += recordedCount;
        console.log(formattedDate)
};

function reset(){
    savedCount = 0;
    resetCount = 0;
    recordedCount = 0
    countEl.textContent = 0;
    saveEl.textContent = "";
}

