var activePage = 'home';

var homePage = document.getElementById(activePage);
homePage.style.display = 'block';

function hidePage(id) {
    document.getElementById(id).style.display = 'none';
}

function showPage(id) {
    document.getElementById(id).style.display = 'block';
}

function hideAllPages() {
    hidePage("home");
    hidePage("languages");
    hidePage("projects");
    hidePage("skills");
}

function showSkills () {
    hideAllPages();
    showPage("skills");
}

function showProjects () {
    hideAllPages();
    showPage("projects");
}

function showLanguages () {
    hideAllPages();
    showPage("languages");
}

function showHome () {
    hideAllPages();
    showPage("home");
}