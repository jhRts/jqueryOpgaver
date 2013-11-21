    var url = (window.location.href).split("/").pop();
    $('nav a[href$="'+url+'"]').addClass('active');
