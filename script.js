document.getElementById('fetch-data').addEventListener('click', () => {
    fetch('/api/example')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').innerText = data.message;
        });
});
