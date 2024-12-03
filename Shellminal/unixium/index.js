function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.style.display === '' || section.style.display === 'none') {
        section.style.display = 'block'; // Visa sektionen
    } else {
        section.style.display = 'none'; // Dölj sektionen
    }
}

function saveList() {
    localStorage.storedText = document.getElementById("textarea").value;
    console.log("localstorage worked");
}

function loadList() {
    console.log(localStorage.storedText)
    document.getElementById("stored_text2").innerHTML = localStorage.storedText;
}
