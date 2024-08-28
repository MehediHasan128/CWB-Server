function splitTimeSlots(start, end) {
    const startTime = new Date(`1970-01-01T${convertTo24HourFormat(start)}`);
    const endTime = new Date(`1970-01-01T${convertTo24HourFormat(end)}`);
    const slots = [];

    let current = new Date(startTime);

    while (current < endTime) {
        const next = new Date(current);
        next.setHours(current.getHours() + 1);

        slots.push({
            startTime: formatTime(current),
            endTime: formatTime(next),
        });

        current = next;
    }

    return slots;
}

function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function convertTo24HourFormat(time) {
    const [timePart, modifier] = time.split(' ');
    let [hours, minutes] = timePart.split(':');

    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
}

// Example usage
const startTime = "08:00 AM";
const endTime = "01:00 PM";
const response = splitTimeSlots(startTime, endTime);
console.log(response);