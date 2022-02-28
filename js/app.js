const serachInput = document.getElementById('search-value');
const serachButton = document.getElementById('serach-button');
serachButton.addEventListener('click', async function() {

    if (serachInput.value == null || serachInput.value.length == 0) {
        alert('pelase input wrong')
    } else {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        const searchValue = parseInt(serachInput.value)
        displayResult(data.splice(0, searchValue));
    }
})