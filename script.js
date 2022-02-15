//<span class="material-icons-round">
//dark_mode
//</span>
/**
function myFunction(x) {
  x.innerHTML.toggle('<i class ="fa fa-like">');
}

**/

var copyEle = ` Links--
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Caveat&family=Akaya+Telivigala&family=Concert+One&family=Cookie&family=Courgette&family=Dancing+Script&family=Dosis&family=Festive&family=Fredoka+One&family=Great+Vibes&family=Indie+Flower&family=Lobster&family=Mochiy+Pop+P+One&family=Oswald:wght@600&family=Patrick+Hand&family=Permanent+Marker&family=Quintessential&family=Roboto&family=Rock+3D&family=Rowdies&family=Secular+One&family=Shizuru&family=Tangerine&family=Yanone+Kaffeesatz:wght@400;500;546&display=swap" rel="stylesheet">
Fonts Name--
font-family: 'Akaya Telivigala', cursive;
font-family: 'Caveat', cursive;
font-family: 'Concert One', cursive;
font-family: 'Cookie', cursive;
font-family: 'Courgette', cursive;
font-family: 'Dancing Script', cursive;
font-family: 'Dosis', sans-serif;
font-family: 'Festive', cursive;
font-family: 'Fredoka One', cursive;
font-family: 'Great Vibes', cursive;
font-family: 'Indie Flower', cursive;
font-family: 'Lobster', cursive;
font-family: 'Mochiy Pop P One', sans-serif;
font-family: 'Oswald', sans-serif;
font-family: 'Patrick Hand', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Quintessential', cursive;
font-family: 'Roboto', sans-serif;
font-family: 'Rock 3D', cursive;
font-family: 'Rowdies', cursive;
font-family: 'Secular One', sans-serif;
font-family: 'Shizuru', cursive;
font-family: 'Tangerine', cursive;
font-family: 'Yanone Kaffeesatz', sans-serif;
`;

function copythecode(iij) {
    var el = document.createElement('textarea');
    el.value = iij;
    document.body.appendChild(el);
    el.select();
    alert(el.value)
    document.execCommand('copy');
    document.body.removeChild(el);
 }



var pr= window.pageYOffset;
window.onscroll= function(){
    var a=window.pageYOffset;
    if (pr>a){
 document.getElementById("Uparrow").style.bottom="20px"
 document.getElementById("nav").style="border-bottom:1px solid whitesmoke;"         

 }
    else if(pr<a && pr>40){ 
                 document.getElementById("Uparrow").style.bottom="-50px" 
   document.getElementById("nav").style="border-bottom:1px solid black;"                       
                           
    }
    
    pr=a;
}


function wind2(){
    window.scrollTo(0,0,600);
}

var loading, contents;



window.onload = function(){
              
    loading = document.getElementById("loader");
    contents = document.querySelector(".main_con");
                
};
            
setTimeout(function(){
    loading.style.display = 'none';
    contents.style.display = 'block';
}, 2000);


