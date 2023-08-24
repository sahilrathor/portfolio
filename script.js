
$(document).ready(function(){
    animateDiv('.s1');
    animateDiv('.s2');
    animateDiv('.s3');
});

function newPosition(){
    
    var height = $("#skill-box").height() - 50;
    var width = $("#skill-box").width() - 50;
    
    var newHeight = Math.floor(Math.random() * height);
    var newWidth = Math.floor(Math.random() * width);
    
    return [newHeight,newWidth];    
}

function animateDiv(myclass){
    var newPos = newPosition();
    $(myclass).animate({ top: newPos[0], left: newPos[1] }, 5000,   function(){
        animateDiv(myclass);        
    });
    
};

// console.log($(".logo").text())

setInterval(() => {
    if($(document).width() <= 600){
        $(".logo").text("SR")
    } else {
        $(".logo").text("Sahil Rathor")
    }
}, 100);