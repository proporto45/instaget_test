/**
 * Created by propo on 06.12.2016.
 */
var token = '691623.1419b97.479e4603aff24de596b1bf18891729f3',
    userid = 691623,
    num_photos = 20;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.instagram.com/v1/users/' + userid + '/media/recent?access_token = 691623.1419b97.479e4603aff24de596b1bf18891729f3&count = 20&callback=getJSONP', true);
xhr.onload = function () {
   // var data = JSON.parse(xhr.response);
    alert(data);
};


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