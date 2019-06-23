(function (){
    document.write("<table>");  
    for(i = 1; i <= 20; i++){            
        document.write("<tr>"); 
        if(i%2==0){
          document.write(i+"是偶数");
        }
        else{
         document.write(i+"是奇数");
        }
        document.write("</tr>");  
    }  
    document.write("</table>");  
})();
