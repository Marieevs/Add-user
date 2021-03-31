const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];

let table = document.getElementById('myTable');
for (let i = 0; i < data.length; i++) {
    const line = document.createElement('tr');
    table.append(line);
    const fName = document.createElement('td');
    fName.innerHTML = `${data[i].firstName}`;
    table.append(fName);
    const lName = document.createElement('td');
    lName.innerHTML = `${data[i].lastName}`;
    table.append(lName);
    const ageUser = document.createElement('td');
    ageUser.innerHTML = `${data[i].age}`;
    table.append(ageUser);
}

const cancel = document.querySelector('.cancel');
const close = document.querySelector('.close_window');
const addUser = document.querySelector('.add_user');
const modalWindow = document.querySelector('.info');
const submitUser = document.querySelector('.submit');

const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const ageInput = document.getElementById('age');

addUser.addEventListener('click', () => {
    modalWindow.classList.add('modal_window');
});

cancel.addEventListener('click', () => {
    modalWindow.classList.remove('modal_window');
});
close.addEventListener('click', () => {
    modalWindow.classList.remove('modal_window');
});


submitUser.addEventListener('click', () => {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const row = table.insertRow(-1);
    const firstNameUser = row.insertCell(0);
    const lastNameUser = row.insertCell(1);
    const ageUser = row.insertCell(2);
    firstNameUser.innerHTML = firstName;
    lastNameUser.innerHTML = lastName;
    ageUser.innerHTML = age;
    firstNameInput.value = '';
    lastNameInput.value ='';
    ageInput.value ='';
});


