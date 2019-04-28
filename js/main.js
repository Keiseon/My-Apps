// Animate Smooth Scrool not working yet though (*_*)
$('#view-work').on('click',function(){
    const images = $('#images').positon().top;

    $('html, body').animate({
        scrollTop: images
    }, 
    1000
    ),    
});