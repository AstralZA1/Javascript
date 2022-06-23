var imgCount = 0;
var title;
var desc;
 var imgContent = [
    ["imgOption1", "BOM", "Lorem ipsum dolor sit amet."],
    ["imgOption2", "DOM", "Nullam fringilla imperdiet eleifend"],
    ["imgOption3", "Javascript", "Cras dapibus ipsum a consequat tincidunt"]
 ];
 function previewImg(imgSrc){
   document.getElementById("imgViewer").src = imgSrc.src;
   imgContent[imgCount][0] = imgSrc.id;
for (let i = 0; i < imgContent.length; i++){
if(imgContent[i][0] == imgSrc.id){
     document.getElementById("topicTtl").innerText = imgContent[i][1];
     document.getElementById("topicDescrpt").innerText =  imgContent[i][2];
     }
   }
}