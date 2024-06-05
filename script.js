//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);
    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = '';  // Clear any previous output

    if (isNaN(delay) || delay < 0) {
        outputDiv.innerHTML = 'Please enter a valid delay.';
        return;
    }

    await displayMessageAfterDelay(text, delay);
});

async function displayMessageAfterDelay(text, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    document.getElementById('output').innerHTML = text;
}
