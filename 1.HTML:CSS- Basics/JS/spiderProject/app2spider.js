/*let smallImages=document.getElementsByClassName("old-img");
for(let i=0;i<smallImages.length;i++)
//{console.dir(smallImages[i].src);}
{
    smallImages[i].src="assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed.`)
}*/

let links= document.querySelectorAll(".box a");

    for(link of links){
        link.style.color="orange";
    }
