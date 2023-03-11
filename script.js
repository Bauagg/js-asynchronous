
function dataBases(data) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            let tabel = ''
            data.forEach(element => {
                tabel +=
                    `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.addres}</td>
            <td>${element.compani}</td>
        </tr>`
            });
            document.querySelector('tbody').innerHTML = tabel;
        })
}
dataBases()






