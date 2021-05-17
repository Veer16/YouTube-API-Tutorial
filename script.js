$(document).ready(function(){
    var API_KEY = "AIzaSyB1mufL8PY6qGg9Z06GUPxSbeiS4AyS6yQ";
    

    $("#form").submit(function(event){
        event.preventDefault();
        var search = $("#search").val();

        videoSearch(API_KEY,search,10)
    })
    function videoSearch(key,search, maxResults){
        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search , function(data){
            console.log(data)
        })
    }
})