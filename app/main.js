let date = new Date();
let year = $("#year")

$(window).on('load', function() {
    setYear();
    
});
function setYear(){
  year.text(date.getFullYear());
}