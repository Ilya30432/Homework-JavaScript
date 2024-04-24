const bth = $(".bth");
const info = $(".info");
const bthClose = $(".bth-close");


bth.on("click",function(){
    info.addClass("block");
});

bthClose.on("click",function(){
    info.removeClass("block")
});