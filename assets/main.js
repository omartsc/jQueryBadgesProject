$(function() {

  // your code will go here
    $.ajax('https://www.codeschool.com/users/tapior.json', {
        dataType: 'jsonp',
        success: function(response) {
            var compCourses = $.map(response.courses.completed,function(index,course) {
                var item = $('<div class=".course"> </div>');
                item.append(course);
                return item;
            });
            $('#badges').appendChild(compCourses);
        }
    });
});
