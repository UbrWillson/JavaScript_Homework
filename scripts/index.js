




    document.getElementById("button").addEventListener('click', function funcBtn(start){
        console.log('btn is working');
        let time = 2;
        start++

       

        setTimeout(() => {
            
            alert("повідомлення вивелось через 5 секунд", start);
            
        }, 5000);
       
        
    });
   
