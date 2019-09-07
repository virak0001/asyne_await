const url = 'https://gorest.co.in/public-api/users?_format=json&access-token=nK23wA4W9JGqBZBVizoMEyLxhwyY16rzDTKT';
async function userID() {
const table = document.querySelector('table');
const response = await fetch(url);
const data = await response.json();
    data.result.forEach(element => {
        const {id, first_name, last_name,gender} = element;
        table.innerHTML +=
        `
            <tr>
                <td>${id}</td>
                <td>${first_name}</td>
                <td>${last_name}</td>
                <td>${gender}</td>
            </tr>
        `
    });
}
userID();
