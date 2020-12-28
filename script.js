var modal = document.getElementById('myModal');
var myIMG = ['myimg1', 'myimg2', 'myimg3', 'myimg4', 'myimg5','myimg6','myimg7','myimg8','myimg9','myimg10','myimg11', 'myimg12','myimg13','myimg14','myimg15', 'myimg16', 'myimg17', 'myimg18', 'myimg19', 'myimg20', 'myimg21', 'myimg22', 'myimg23']
    for (var i = 0; i < myIMG.length; i++) {
        var img = document.getElementById(myIMG[i]);
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}