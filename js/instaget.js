/**
 * Created by propo on 06.12.2016.
 */
document.addEventListener('DOMContentLoaded', function () {
    var token = '691623.1419b97.479e4603aff24de596b1bf18891729f3',
        userid = 691623,
        num_photos = 20;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + token + '&count=' + num_photos, true);
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(xhr.response);
        var instaBlock = document.getElementById('instaView');
        var instaItem, instaPic;
        for (x in data.data) {
            instaPic = document.createElement('img');
            instaPic.setAttribute('id',data.data[x].id);
            instaPic.src = data.data[x].images.low_resolution.url;
            instaItem = document.createElement('p');
            instaItem.appendChild(instaPic);
            instaBlock.appendChild(instaItem);
            }
    }

});
