function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function saveList() {
    localStorage.storedText = document.getElementById("textarea").value;
    console.log("localstorage worked");
}

function loadList() {
    console.log(localStorage.storedText)
    document.getElementById("stored_text2").innerHTML = localStorage.storedText;
}