(function (){
    var row = 9;  
    var colum = 9;  
    document.write("<table>");  
    for(i = 1; i <= row; i++){            
        document.write("<tr>"); 
        for (j = 1; j <= colum; j++){
            if (j <= i){  
                document.write("<td>"+ i + "*" + j  + "=" + i*j + "</td>");  
            }else{  
                document.write("<td> </td>");  
            }  
        }  
        document.write("</tr>");  
    }  
    document.write("</table>");  
})();
