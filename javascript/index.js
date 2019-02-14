document.getElementById('date').innerHTML = new Date().toDateString();

 $("#cancel_edit").click(function(){
        window.open('','_parent',''); 
        window.close(); 
    });