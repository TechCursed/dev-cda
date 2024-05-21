
// var next_click = document.querySelectorAll(".next_button");
// var main_form = document.querySelectorAll(".main");
// var step_list = document.querySelectorAll(".progress-bar li");
// var num = document.querySelector(".step-number");
// let formnumber = 0;

// const newProjectInput = document.getElementById('newProjectInput');
// const existingProjectSelect = document.getElementById('existingProjectSelect');
// const fileInput = document.getElementById('file-upload');
// const fileList = document.getElementById('fileList');

// Disable/Enable inputs based on user selection
// newProjectInput.addEventListener('input', () => {
// if (newProjectInput.value.trim() !== '') {
// existingProjectSelect.disabled = true;
// next_click[formnumber].disabled = false;
// } else {
// existingProjectSelect.disabled = false;
// if (existingProjectSelect.value === '') {
// next_click[formnumber].disabled = true;
// } else {
// next_click[formnumber].disabled = false;
// }
// }
// });

// existingProjectSelect.addEventListener('change', () => {
// if (existingProjectSelect.value !== '') {
// newProjectInput.disabled = true;
// next_click[formnumber].disabled = false;
// } else {
// newProjectInput.disabled = false;
// if (newProjectInput.value.trim() === '') {
// next_click[formnumber].disabled = true;
// } else {
// next_click[formnumber].disabled = false;
// }
// }
// });

// Update file list and enable/disable next button
// fileInput.addEventListener('change', () => {
// fileList.innerHTML = '';
// const files = fileInput.files;

// if (files.length > 0) {
// const fileNames = Array.from(files).map(file => file.name).join(', ');
// fileList.textContent = fileNames;
// next_click[1].disabled = false;
// } else {
// next_click[1].disabled = true;
// }
// });

// Remaining JavaScript code ...
// next_click.forEach(function (next_click_form) {
// next_click_form.addEventListener('click', function () {
// if (!validateform()) {
// return false;
// }
// formnumber++;
// updateform();
// progress_forward();
// contentchange();
// });
// });

// var back_click = document.querySelectorAll(".back_button");
// back_click.forEach(function (back_click_form) {
// back_click_form.addEventListener('click', function () {
// formnumber--;
// updateform();
// progress_backward();
// contentchange();
// });
// });

// var submit_click = document.querySelectorAll(".submit_button");
// submit_click.forEach(function (submit_click_form) {
// submit_click_form.addEventListener('click', function () {
// if (!validateform()) {
// return false;
// }
// formnumber++;
// updateform();
// });
// });

// function updateform() {
// main_form.forEach(function (mainform_number) {
// mainform_number.classList.remove('active');
// });
// main_form[formnumber].classList.add('active');
// }
// function progress_forward() {
// num.innerHTML = formnumber + 1;
// step_list[formnumber].classList.add('active');
// }
// function progress_backward() {
// var form_num = formnumber + 1;
// step_list[form_num].classList.remove('active');
// num.innerHTML = form_num;
// if (form_num === 5) {
// num.innerHTML = "Summary";
// }
// }
// var step_num_content = document.querySelectorAll(".step-number-content");
// function contentchange() {
// step_num_content.forEach(function (content) {
// content.classList.remove('active');
// content.classList.add('d-none');
// });
// step_num_content[formnumber].classList.add('active');
// }
// function validateform() {
// validate = true;
// var validate_inputs = document.querySelectorAll(".main.active input[required], .main.active select[required]");
// validate_inputs.forEach(function (validate_input) {
// validate_input.classList.remove('warning');
// Check if both input fields are empty
// if (validate_inputs.length === 2 && validate_input.value.length === 0 && validate_inputs[0].value.length === 0 && validate_inputs[1].value.length === 0) {
// validate = false;
// validate_input.classList.add('warning');
// }
// });
// return validate;
// }
// const inputDiv = document.querySelector('.input-div');
// inputDiv.addEventListener('dragover', (e) => {
// e.preventDefault();
// inputDiv.style.backgroundColor = '#f0f0f0';
// });
// inputDiv.addEventListener('dragleave', () => {
// inputDiv.style.backgroundColor = 'transparent';
// });
// inputDiv.addEventListener('drop', (e) => {
// e.preventDefault();
// inputDiv.style.backgroundColor = 'transparent';
// const files = e.dataTransfer.files;
// fileInput.files = files;
// });

// Update file statistics in step 3

// fileInput.addEventListener('change', () => {
// const files = fileInput.files;
// const fileNames = Array.from(files).map(file => file.name).join(', ');
// const totalFileSize = Array.from(files).reduce((total, file) => total + file.size, 0);
// const totalRows = 0; // Replace with actual row count
// const totalColumns = 0; // Replace with actual column count
// document.getElementById('file_names').textContent = fileNames;
// document.getElementById('total_file_size').textContent = `${formatFileSize(totalFileSize)}`;
// document.getElementById('total_rows').textContent = totalRows;
// document.getElementById('total_columns').textContent = totalColumns;
// });

// Helper function to format file size

// function formatFileSize(bytes) {
// const units = ['B', 'KB', 'MB', 'GB', 'TB'];
// let size = bytes;
// let unitIndex = 0;
// while (size >= 1024 && unitIndex < units.length - 1) {
// size /= 1024;
// unitIndex++;
// }

// return `${size.toFixed(2)} ${units[unitIndex]}`;
// }   

var next_click = document.querySelectorAll(".next_button");
var main_form = document.querySelectorAll(".main");
var step_list = document.querySelectorAll(".progress-bar li");
var num = document.querySelector(".step-number");
let formnumber = 0;

const newProjectInput = document.getElementById('newProjectInput');
const existingProjectSelect = document.getElementById('existingProjectSelect');
const fileInput = document.getElementById('file-upload');
const fileList = document.getElementById('fileList');

// Disable/Enable inputs based on user selection
newProjectInput.addEventListener('input', () => {
    if (newProjectInput.value.trim() !== '') {
        existingProjectSelect.disabled = true;
        next_click[formnumber].disabled = false;
    } else {
        existingProjectSelect.disabled = false;
        if (existingProjectSelect.value === '') {
            next_click[formnumber].disabled = true;
        } else {
            next_click[formnumber].disabled = false;
        }
    }
});

existingProjectSelect.addEventListener('change', () => {
    if (existingProjectSelect.value !== '') {
        newProjectInput.disabled = true;
        next_click[formnumber].disabled = false;
    } else {
        newProjectInput.disabled = false;
        if (newProjectInput.value.trim() === '') {
            next_click[formnumber].disabled = true;
        } else {
            next_click[formnumber].disabled = false;
        }
    }
});

// Update file list and enable/disable next button
fileInput.addEventListener('change', () => {
    fileList.innerHTML = '';
    const files = fileInput.files;

    if (files.length > 0) {
        const fileNames = Array.from(files).map(file => file.name).join(', ');
        fileList.textContent = fileNames;
        next_click[1].disabled = false;
    } else {
        next_click[1].disabled = true;
    }
});

// Remaining JavaScript code ...
next_click.forEach(function (next_click_form) {
    next_click_form.addEventListener('click', function () {
        if (!validateform()) {
            return false;
        }
        formnumber++;
        updateform();
        progress_forward();
        contentchange();

        // Call the appropriate backend function based on the current step
        switch (formnumber) {
            case 1:
                createDatabase();
                break;
            case 2:
                uploadFilesAndGetInfo();
                break;
            case 3:
                // No backend call needed for step 3 (File Stats)
                break;
            case 4:
                sanitizeData();
                break;
            case 5:
                createTablesAndInsertData();
                break;
            default:
                break;
        }
    });
});

var back_click = document.querySelectorAll(".back_button");
back_click.forEach(function (back_click_form) {
    back_click_form.addEventListener('click', function () {
        formnumber--;
        updateform();
        progress_backward();
        contentchange();
    });
});

var submit_click = document.querySelectorAll(".submit_button");
submit_click.forEach(function (submit_click_form) {
    submit_click_form.addEventListener('click', function () {
        if (!validateform()) {
            return false;
        }
        formnumber++;
        updateform();
    });
});

function updateform() {
    main_form.forEach(function (mainform_number) {
        mainform_number.classList.remove('active');
    });
    main_form[formnumber].classList.add('active');
}
function progress_forward() {
    num.innerHTML = formnumber + 1;
    step_list[formnumber].classList.add('active');
}
function progress_backward() {
    var form_num = formnumber + 1;
    step_list[form_num].classList.remove('active');
    num.innerHTML = form_num;
    if (form_num === 5) {
        num.innerHTML = "Summary";
    }
}
var step_num_content = document.querySelectorAll(".step-number-content");
function contentchange() {
    step_num_content.forEach(function (content) {
        content.classList.remove('active');
        content.classList.add('d-none');
    });
    step_num_content[formnumber].classList.add('active');
}
function validateform() {
    validate = true;
    var validate_inputs = document.querySelectorAll(".main.active input[required], .main.active select[required]");
    validate_inputs.forEach(function (validate_input) {
        validate_input.classList.remove('warning');
        // Check if both input fields are empty
        if (validate_inputs.length === 2 && validate_input.value.length === 0 && validate_inputs[0].value.length === 0 && validate_inputs[1].value.length === 0) {
            validate = false;
            validate_input.classList.add('warning');
        }
    });
    return validate;
}
const inputDiv = document.querySelector('.input-div');
inputDiv.addEventListener('dragover', (e) => {
    e.preventDefault();
    inputDiv.style.backgroundColor = '#f0f0f0';
});
inputDiv.addEventListener('dragleave', () => {
    inputDiv.style.backgroundColor = 'transparent';
});
inputDiv.addEventListener('drop', (e) => {
    e.preventDefault();
    inputDiv.style.backgroundColor = 'transparent';
    const files = e.dataTransfer.files;
    fileInput.files = files;
});

// Update file statistics in step 3
fileInput.addEventListener('change', () => {
    const files = fileInput.files;
    const fileNames = Array.from(files).map(file => file.name).join(', ');
    const totalFileSize = Array.from(files).reduce((total, file) => total + file.size, 0);
    const totalRows = 0; // Replace with actual row count
    const totalColumns = 0; // Replace with actual column count
    document.getElementById('file_names').textContent = fileNames;
    document.getElementById('total_file_size').textContent = `${formatFileSize(totalFileSize)}`;
    document.getElementById('total_rows').textContent = totalRows;
    document.getElementById('total_columns').textContent = totalColumns;
});

// Helper function to format file size
function formatFileSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

// Backend integration functions
async function createDatabase() {
    const projectName = newProjectInput.value.trim() || existingProjectSelect.value;
    const response = await fetch('http://127.0.0.1:8000/docs#/default/create_db_create_db_post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ db_name: projectName })
    });
    const data = await response.json();
    console.log(data);
}

async function uploadFilesAndGetInfo() {
    const formData = new FormData();
    for (const file of fileInput.files) {
        formData.append('files', file);
    }

    const response = await fetch('http://127.0.0.1:8000/docs#/default/upload_file_info', {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    console.log(data);
}

async function sanitizeData() {
    const response = await fetch('http://127.0.0.1:8000/docs#/default/upload_and_clean', {
        method: 'POST'
    });
    const data = await response.json();
    console.log(data);
}

async function createTablesAndInsertData() {
    const response = await fetch('http://127.0.0.1:8000/docs#/default/create_tables_with_relationships', {
        method: 'POST'
    });
    const data = await response.json();
    console.log(data);
 }