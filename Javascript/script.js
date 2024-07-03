document.addEventListener('DOMContentLoaded', () => {
    const dateDisplay = document.getElementById('date-display');
    
    // Function to get current day and date
    function getCurrentDayAndDate() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        const now = new Date();
        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const day = now.getDate();
        const year = now.getFullYear();
        
        return `${dayName}, ${monthName} ${day}, ${year}`;
    }
    
    // Display current day and date
    dateDisplay.textContent = getCurrentDayAndDate();
});
document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time-display');

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const currentTime = `${hours}:${minutes}:${seconds}`;
        
        timeDisplay.textContent = currentTime;
    }
    
    // Update the time every second
    setInterval(updateTime, 1000);

    // Initial call to display the time immediately
    updateTime();
});

// Hamburger menu Toggle
document.getElementById('hamburger').onclick = function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}


