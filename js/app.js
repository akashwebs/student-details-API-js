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
    serachInput.value = ''
})
const studentDetailsContainer = document.getElementById('student-details-container');
const displayResult = data => {
    studentDetailsContainer.innerHTML = ''
    if (data.length == 0) {
        console.log('no data found')
    } else {
        data.forEach(res => {
            const div = document.createElement('div');
            div.classList.add('col');
            const title = res.title;
            const img = res.thumbnailUrl;

            div.innerHTML = `
                <div class="card">
                    <img src="${res.thumbnailUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <button onclick="seeDetails(${res.id})" class="btn btn-success">Details</button>
                        <button class="btn btn-danger">Remove</button>
                    </div>
                </div>
            `
            studentDetailsContainer.appendChild(div)
        })


    }
}
const seeDetails = (id) => {
    console.log(id);
}