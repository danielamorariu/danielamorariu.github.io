var activePage = 'home';

var homePage = document.getElementById(activePage);
homePage.style.display = 'block';

function hidePage(id) {
    document.getElementById(id).style.display = 'none';
}

function showPage(id) {
    document.getElementById(id).style.display = 'block';
}

function showSkills () {
    hidePage("home");
    hidePage("languages");
    hidePage("projects");
    showPage("skills");
}

function showProjects () {
    hidePage("home");
    hidePage("languages");
    hidePage("skills");
    showPage("projects");
}

function showLanguages () {
    hidePage("home");
    hidePage("projects");
    hidePage("skills");
    showPage("languages");
}

function showHome () {
    hidePage("language");
    hidePage("projects");
    hidePage("skills");
    showPage("home");
}