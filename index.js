

function updateTime() {
    const now = new Date();
    const utcTime = now.toISOString().split('T')[1].split('.')[0]; 
    document.getElementById('current-time').innerText = utcTime;
}


updateTime();

setInterval(updateTime, 1000);
