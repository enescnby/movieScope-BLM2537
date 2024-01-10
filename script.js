function zoomIn(image){
    /*
    İmleç ile resmin üstüne gelindiğinde resmin
    ölçeğini büyüten fonksiyon
    */
    image.style.transition = "transform 1s";
    image.style.transform = "scale(1.2)";
    image.style.zIndex = "2";

}

function zoomOut(image){
    /*
    İmleç resmin üstünden çekildiğinde eski hâline
    dönmesini sağlayan fonksiyon
    */
    image.style.transition = "transform 1s";
    image.style.transform = "scale(1)";
    image.style.zIndex = "1";
}

var theme = localStorage.getItem("theme");

function changeTheme(){
    /*
    Temayı değiştir butonuna tıklandığında
    mevcut temayı değiştiren fonksiyon
    */
    if (theme == "white") {
        if(document.title == "Ana Sayfa" || document.title == "Main Page"){
            document.body.style.transition = "background-image 1.2s";
            document.body.style.backgroundImage = "url(images/newbgwhite.png)";
            document.getElementById("head").style.transition = "color 1.2s";
            document.getElementById("head").style.color = "black";
        }
        else if(document.title == "Hakkında" || document.title == "About"){
            document.body.style.transition = "background-color 1.2s";
            document.body.style.backgroundColor = "white";
            document.getElementById("footer").style.transition = "background-color 1.2s";
            document.getElementById("footer").style.backgroundColor = "black";
            document.getElementById("about_box").style.color = "black";
            document.getElementById("about_box").style.transition = "color 1.2s"
        }
        else{
            document.body.style.transition = "background-color 1.2s";
            document.body.style.backgroundColor = "black";
            document.getElementById("head").style.transition = "color 1.2s";
            document.getElementById("head").style.color = "white";

            var elements = document.getElementsByClassName("info");
            for (let index = 0; index < elements.length; index++) {
                elements[index].style.transition = "color 1.2s";;
                elements[index].style.color = "white";
            }
        }

        document.getElementsByClassName("navbar")[0].style.transition = "background-image 1.2s";
        document.getElementsByClassName("navbar")[0].style.backgroundImage = "url(images/bgcolorful.jpg)";


        localStorage.setItem("theme", "dark");
        theme = "dark";

    }else{
        if(document.title == "Ana Sayfa" || document.title == "Main Page"){
            document.body.style.transition = "background-image 1.2s";
            document.body.style.backgroundImage = "url(images/newbg.png)";
            document.getElementById("head").style.transition = "color 1.2s";
            document.getElementById("head").style.color = "white";
        }
        else if(document.title == "Hakkında" || document.title == "About"){
            document.body.style.transition = "background-color 1.2s";
            document.body.style.backgroundColor = "black";
            document.getElementById("about_box").style.color = "white";
            document.getElementById("about_box").style.transition = "color 1.2s"
        }
        else{
            document.body.style.transition = "background-color 1.2s";
            document.body.style.backgroundColor = "white";
            document.getElementById("head").style.transition = "color 1.2s";
            document.getElementById("head").style.color = "black";

            var elements = document.getElementsByClassName("info");
            for (let index = 0; index < elements.length; index++) {
                elements[index].style.transition = "color 1.2s";;
                elements[index].style.color = "black";
            }
        }

        document.getElementsByClassName("navbar")[0].style.transition = "background-image 1.2s";
        document.getElementsByClassName("navbar")[0].style.backgroundImage = "url(images/bgcolorful2.jpg)";


        localStorage.setItem("theme", "white");
        theme = "white";
    }

}

function onloadChangeTheme(){
    /*
    Seçili temayı localStorage'da depolayarak
    sayfa yüklendiğinde güncelleyen fonksiyon
    */
    if (localStorage.getItem("theme") == "dark") {
        if(document.title == "Ana Sayfa" || document.title == "Main Page"){
            document.body.style.backgroundImage = "url(images/newbgwhite.png)";
            document.getElementById("head").style.color = "black";
        }
        else if(document.title == "Hakkında" || document.title == "About"){
            document.body.style.backgroundColor = "white";
            document.getElementById("footer").style.backgroundColor = "black";
            document.getElementById("about_box").style.color = "black";
        }
        else{
            document.body.style.transition = "background-color 1.2s";
            document.body.style.backgroundColor = "white";
            document.getElementById("head").style.transition = "color 1.2s";
            document.getElementById("head").style.color = "black";

            var elements = document.getElementsByClassName("info");
            for (let index = 0; index < elements.length; index++) {
                elements[index].style.transition = "color 1.2s";;
                elements[index].style.color = "black";
            }
        }
        document.getElementsByClassName("navbar")[0].style.backgroundImage = "url(images/bgcolorful.jpg)"

        localStorage.setItem("theme", "dark");

    }else{
        if(document.title == "Ana Sayfa" || document.title == "Main Page"){
            document.body.style.backgroundImage = "url(images/newbg.png)";
            document.getElementById("head").style.color = "white";
        }
        else if(document.title == "Hakkında" || document.title == "About"){
            document.body.style.backgroundColor = "black";
            document.getElementById("about_box").style.color = "white";
        }
        else{
            document.body.style.transition = "background-color 1.2s";
            document.body.style.backgroundColor = "black";
            document.getElementById("head").style.transition = "color 1.2s";
            document.getElementById("head").style.color = "white";

            var elements = document.getElementsByClassName("info");
            for (let index = 0; index < elements.length; index++) {
                elements[index].style.transition = "color 1.2s";;
                elements[index].style.color = "white";
            }
        }

        document.getElementsByClassName("navbar")[0].style.backgroundImage = "url(images/bgcolorful2.jpg)"

        localStorage.setItem("theme", "white");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    /*
    Sayfa yüklendiğinde onloadChangeTheme()
    fonksiyonunu çağıran blok
    */
    onloadChangeTheme();
});
