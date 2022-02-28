const serachInput = document.getElementById('search-value');
const serachButton = document.getElementById('serach-button');
const studentDetailsContainer = document.getElementById('student-details-container');
const studentDetails = document.getElementById('student-details');

serachButton.addEventListener('click', async function() {

    if (serachInput.value == null || serachInput.value.length == 0) {
        alert('pelase input wrong')
        studentDetailsContainer.innerHTML = ''
    } else {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        const searchValue = parseInt(serachInput.value)
        displayResult(data.splice(0, searchValue));
    }
    serachInput.value = ''
})
const displayResult = data => {
    studentDetailsContainer.innerHTML = ''
    studentDetails.innerHTML = ''
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

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => diaplayDetails(data, id))
}
const diaplayDetails = (data, id) => {
    studentDetails.innerHTML = ''
    studentDetailsContainer.innerHTML = ''
    data.forEach(data => {
        if (data.id === id) {
            const div = document.createElement('div');
            div.className = "card";
            div.innerHTML = `
                <img src="${data.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${data.title}</p>
                </div>
            `
            studentDetails.appendChild(div)
        }
    })
}