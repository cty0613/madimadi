function redirectToNewPage() {
    setTimeout(function() {
        var newUrl = "../pages/result.html";
        window.location.href = newUrl;
    }, 5000); 
}

redirectToNewPage();