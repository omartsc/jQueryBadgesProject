$(function() {

  // your code will go here
    $.ajax({
        url: "https://www.codeschool.com/users/tapior.json",
        dataType: 'jsonp',
        success: function(response) {
            response.courses.completed.forEach(function(index,course) {
               $('#badges').append("<div class="course">" +
                "<h3>"+course.title+"</h3>" +
                "</div>");
            });
        }
    });
});
