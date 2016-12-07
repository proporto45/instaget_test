/**
 * Created by propo on 06.12.2016.
 */
document.addEventListener('DOMContentLoaded', function () {

    var token = '691623.1419b97.479e4603aff24de596b1bf18891729f3',
        userid = 691623,
        num_photos = 20;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + token, true);
    xhr.send();
    xhr.onload = function () {
        // var data = JSON.parse(xhr.response);
        console.log(xhr);
// xhr.onreadystatechange = function () {
        if (xhr.status != 200) {
            // обработать ошибку
            alert(xhr.status); // пример вывода: 404: Not Found
            // alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
            // вывести результат
            alert(xhr.response); // responseText -- текст ответа.
        }
    }

});
// $(function () {
//     var token = '691623.1419b97.479e4603aff24de596b1bf18891729f3',
//         userid = 691623,
//         num_photos = 20;
//     $.ajax({
//         url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
//         dataType: 'jsonp',
//         type: 'GET',
//         data: {access_token: token, count: num_photos},
//         success: function (data) {
//             console.log(data);
//             for (x in data.data) {
//                 $('#instaView').append('<p><img id="' + data.data[x].id + '" src="' + data.data[x].images.low_resolution.url + '"></p>');
//             }
//         },
//         error: function (data) {
//             console.log(data);
//         }
//     });
// });