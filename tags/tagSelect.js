$(document).ready(function(){
    $("#tagSelectDiv").hide();
    $("#subTagSelectDiv").hide();

    $("#tag").click(function(){
     console.log("Button Clicked");
        $.get("http://pamda1ver2.16mb.com/ca/tagSearch.php",function(data){
           console.log(typeof data);
           console.log(data);
           $("#tagSelectDiv").show();
           $("#selectForTag").append('<option value="0" selected="selected"> Branch </option>')
             for (var key in data){
                     $("#selectForTag").append('<option value="'+key+'">'+ data[key]+"</option>")
         }

        })

    });






});
