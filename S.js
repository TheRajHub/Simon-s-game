var a=["green","red","yellow","blue"];
 var s=[];
 var z=[];
 var h=false;
 level=-1;

 document.addEventListener("keypress",function(){
        if(!h){
            h=true;
            addseq();
            
           
        }
    
 });

 function addseq(){
    console.log("hi");
     var t=Math.floor(Math.random()*4);
     
    //  document.querySelector("."+a[t]).classList.add("selected");
      setTimeout(function(){
        $("."+a[t]).fadeIn(200).fadeOut(200).fadeIn(200);
      },400);
     s.push(a[t]);
     level++;
     document.querySelector("h1").innerHTML="Level "+(level+1);
 }
 function cheak(curr){
    if(s[curr]==z[curr]){
        if(s.length==z.length){
            z=[];
            addseq();
        }
    }
    else{
        s=[];
        z=[];
        $("html").addClass("redd");
        setTimeout(function(){
            $("html").removeClass("redd");
          },400);
        
        h=false;
        document.querySelector("h1").innerHTML="Game Over";

        level=-1;
    }
    
 }
for(i=0;i<a.length;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        f=this;
        this.classList.add("click");
        setTimeout(function(){
            f.classList.remove("click");
        },100);
        z.push(this.id);
        cheak(z.length-1);
    });
}