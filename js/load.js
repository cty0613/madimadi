function redirectToNewPage() {
    setTimeout(function() {
        var newUrl = "../pages/result.html";
        window.location.href = newUrl;
    }, 2000); 
}

redirectToNewPage();