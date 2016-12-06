/**
 * Created by propo on 06.12.2016.
 */
$(function () {
    var token = '691623.1419b97.479e4603aff24de596b1bf18891729f3',
        userid = 691623,
        num_photos = 20;
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: token, count: num_photos},
        success: function (data) {
            console.log(data);
            for (x in data.data) {
                $('#instaView').append('<p><img src="' + data.data[x].images.low_resolution.url + '" data-id="' + data.data[x].id + '"></p>');
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
});