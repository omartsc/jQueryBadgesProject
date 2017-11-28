$(function() {

  // your code will go here
    $.ajax({
        url: "https://www.codeschool.com/users/tapior.json",
        dataType: 'jsonp',
        success: function(response) {
            response.courses.completed.forEach(function(course) {
               $('#badges').append('<div class="course">' +
                        '<h3>'+course.title+'</h3>' +
                        '<img src="'+course.badge+'" alt="badge">' +
                        '<a href="'+course.url+'" target="_blank" class="btn btn-primary">See course</a>' +
                   '</div>');
            });
        }
    });
});
