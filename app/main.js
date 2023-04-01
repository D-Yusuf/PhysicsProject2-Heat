let date = new Date();
let year = $("#year")
// year.text() = ;
function setYear(){
    year.text(date.getFullYear())
    console.log(year.text())
}
setYear()