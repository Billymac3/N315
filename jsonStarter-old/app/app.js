function trace(fName, arg) {
    console.log(fName, arg);
}

function initNav(){
    $("a").click(function(e){
        var btnID = e.currentTarget.id;
        loadContent(btnID);
    })
}

function loadContent(pageName){
    console.log('loadContent ' + pageName);
    
    var pageContent = PROVIDER.getPageContent(pageName);
    console.log('loadcontent ' + pageContent);

    $(".content").html(pageContent);
    
    initNav();
}

function populateNav() {
    var nav = PROVIDER.getMainNav();

    $.each(nav, function(idx, link) {
       $("nav").append(`<a id="${link.path}" href="#">${link.linkName}</a>`)
    })
    // console.log(navArray);
}

loadContent("home");


function dataIsLoaded(){
    // console.log("loaded")
    populateNav();
}

$(document).ready(function()
{
    PROVIDER.getData(dataIsLoaded);
});