
function isStringContains(str1, str2)
{
    let counter = 0;
    for(let i = 0; i < str1.length; i++ )
    {
        
        if(str1.at(i) === str2.at(counter))
        {
            counter++;
        }
        if(counter == str2.length)
        {
            return true;
        }
        
    }
    return false;
}





$(document).ready(function(){
    
    $("#mailSection").hide();

    
    document.querySelector("#mailTab").addEventListener("click", OnMailTabClick);

    document.querySelector("#mailSection button").addEventListener("click", OnMailSendClick);

    
    $(".SecondSection p, .SecondSection div").hide();
    document.querySelectorAll(".SecondSection h3").forEach((element) => {element.addEventListener("click", OnHeaderClick); 
        element.setAttribute("isShowing", "false");
    });
 
    function OnHeaderClick(event){
        const current = event.currentTarget;

        if($(current).attr("data-isShowing") === "true")
        {
            $(current).nextAll().hide();
            $(current).attr("data-isShowing", "false");
            
        }
        else
        {
            $(current).nextAll().show();
            $(current).attr("data-isShowing", "true");
         
        }        
    }

    function OnMailSendClick()
    {
        let emailAdress = document.querySelector("#mailSection input").value;
        let text = document.querySelector("#mailSection textarea").value;

        if(isStringContains(emailAdress, "@"))
        {
            console.log(emailAdress);
            console.log(text);
            SendDataToBackend(emailAdress, text);
        }
        else
        {
            console.log("Format error");
        }

       
        
      
    }

    function OnMailTabClick()
    {

        if($("#mailTab").attr("data-isShowing") === "true")
        {
            $("#mailSection").hide();
            $("#mailTab").attr("data-isShowing", "false");
        }
        else
        {
            $("#mailSection").show();
            $("#mailTab").attr("data-isShowing", "true");
        }
    }


    function SendDataToBackend(email, t)
    {
        const info = {
            mailAdress: email,
            text: t
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        };

        fetch("http://localhost:3000/info", options).then(response => {
        if(!response.ok)
        {
            throw new Error("Network response was not ok");
        }
        return response.json();
        
        }).then(data => {alert("veri başarıyla gönderildi: "+ data)}).catch(error => console.error("hata oluştu: ", error));
        

        
    }

});




