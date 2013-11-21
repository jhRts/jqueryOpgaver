$(document).ready(function(){
    var url = (window.location.href).split("/").pop();
    console.log(url);
    $('nav a[href$="'+url+'"]').addClass('active');
});