var coll = document.getElementsByClassName("section");
var i;

console.log(coll.length);
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        console.log("test");
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}