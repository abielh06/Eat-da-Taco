$("#add-burger").on("click", function(){
    var userData = {

        burger_name: $("#burger").val()
    }
     
    $.ajax({
        url:"api/burger", 
        method: "POST",
        data: userData
    })
    .then(function(serverData){
        location.reload()
    })
})