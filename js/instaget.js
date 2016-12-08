/**
 * Created by propo on 06.12.2016.
 */
document.addEventListener('DOMContentLoaded', function () {
    var token = '691623.1419b97.479e4603aff24de596b1bf18891729f3',
        userid = 691623,
        num_photos = 20;
    var Grid__col, cardHeader, cardAvatar, cardAvatarPic, cardTitle, cardTitle__title, cardTitle__subtitle, cardDate, cardIcons;
    var instaCard, instaItemParent, instaItem, instaPic, instaComment;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + token + '&count=' + num_photos, true);
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(xhr.response);
        var instaBlock = document.getElementById('instaView');
        console.log(data.data);
        for (var x in data.data) {

            Grid__col = document.createElement('div');
            Grid__col.setAttribute('class', 'Grid__col');


            instaPic = document.createElement('img');
            instaPic.setAttribute('id', data.data[x].id);
            instaPic.src = data.data[x].images.low_resolution.url;

            instaItemParent = document.createElement('div');
            instaItemParent.setAttribute('class', 'Card__primary-title');

            instaComment = document.createElement('h2');
            instaComment.setAttribute('class', 'title');
            instaComment.innerHTML = data.data[x].caption.text;


            cardHeader = document.createElement('div');
            cardHeader.setAttribute('class', 'Card__header');

            cardAvatar = document.createElement('div');
            cardAvatar.setAttribute('class', 'Card__avatar');

            cardAvatarPic = document.createElement('img');
            cardAvatarPic.setAttribute('id', data.data[x].id);
            cardAvatarPic.src = data.data[x].user.profile_picture;

            cardTitle = document.createElement('div');
            cardTitle.setAttribute('class', 'Card__title');

            cardTitle__title = document.createElement('div');
            cardTitle__title.setAttribute('class', 'title');
            cardTitle__title.innerHTML = data.data[x].user.full_name;

            cardTitle__subtitle = document.createElement('div');
            cardTitle__subtitle.setAttribute('class', 'subtitle');
            if (data.data[x].location != null) cardTitle__subtitle.innerHTML = data.data[x].location.name;

            cardDate = document.createElement('div');
            cardDate.setAttribute('class', 'Card__primary-title');

            cardIcons = document.createElement('div');
            cardIcons.setAttribute('class', 'Card__primary-title');
            // cardIcons.innerHTML = data.data[x].caption.text;

            instaItem = document.createElement('div');
            instaItem.setAttribute('class', 'Card__media');

            instaCard = document.createElement('div');
            instaCard.setAttribute('class', 'Card');


            cardAvatar.appendChild(cardAvatarPic);



            cardTitle.appendChild(cardTitle__title);
            cardTitle.appendChild(cardTitle__subtitle);

            cardHeader.appendChild(cardAvatar);
            cardHeader.appendChild(cardTitle);
            cardHeader.appendChild(cardDate);
            cardHeader.appendChild(cardIcons);


            instaItem.appendChild(instaPic);
            instaItemParent.appendChild(instaItem);
            instaItemParent.appendChild(instaComment);

            instaCard.appendChild(cardHeader);
            instaCard.appendChild(instaItemParent);
            Grid__col.appendChild(instaCard);


            instaBlock.appendChild(Grid__col);
        }
    }
});
