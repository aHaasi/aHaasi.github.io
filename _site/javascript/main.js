function getImageId(imagePath){
    var splittedBySlash = imagePath.split('/');
    var imageName = splittedBySlash[splittedBySlash.length-1];
    var splittedByUnderline = imageName.split('_');
    var imageWithEnding = splittedByUnderline[splittedByUnderline.length -1];
    var splittedByDot = imageWithEnding.split('.');
    return splittedByDot[0];
}

function addIdToGalleryItems(){
    var items = $('.gal-item');
    for(var i=0; i<items.length; i++){
        var item = items[i];
        var src = $(item).find('.image-link').children().attr('src');

        var newId = getImageId(src);
        $(item).attr('data-id', newId);
        $(item).find('.image-link').attr('data-target', '#' + newId);
        $(item).find('.modal').attr('id', newId);
        $(item).find('.gallery-image').attr('data-id', newId);
        $(item).find('.gallery-image').attr('data-old-id', newId);
    }
}

function setActionInSlideShow(){
    var slideItems = $('#slideShow').children();
    $(slideItems[0]).addClass('active');
}

$( document ).ready(function() {

    var imagePath = '/images/Gallerie/DSC_';

    setActionInSlideShow();
    addIdToGalleryItems();

    $('.carousel').carousel({
        interval: 4000
    });

    $('.gallerie-prev-bnt').click(function(event){
        var nodeName = event.target.nodeName;
        var parent = null;

        if(nodeName === 'SPAN'){
            parent = $(event.target).parent().parent('.modal-content');
        }else{
            parent = $(event.target).parent('.modal-content');
        }
        var image = $(parent[0]).children('.modal-body').children()[0];
        var id = $(image).attr('data-id');

        var firstContainer = $('.gal-item').first();
        var firstId = $(firstContainer).attr('data-id');

        if(id === firstId){
            var lastContainer = $('.gal-item').last();
            var lastId = $(lastContainer).attr('data-id');
            $(image).attr('src', imagePath + lastId + '.JPG');
            $(image).attr('data-id', lastId);
        }else{
            var prevElement = $('.gal-item[data-id='+id+']').prev();
            var newId = $(prevElement).attr('data-id');
            $(image).attr('src', imagePath + newId + '.JPG');
            $(image).attr('data-id', newId);
        }
    });

    $('.gallerie-next-bnt').click(function(event){
        var nodeName = event.target.nodeName;
        var parent = null;

        if(nodeName === 'SPAN'){
            parent = $(event.target).parent().parent('.modal-content');
        }else{
            parent = $(event.target).parent('.modal-content');
        }
        var image = $(parent[0]).children('.modal-body').children()[0];
        var id = $(image).attr('data-id');

        var lastContainer = $('.gal-item').last();
        var lastId = $(lastContainer).attr('data-id');

        if(id === lastId){
            var firstContainer = $('.gal-item').first();
            var firstId = $(firstContainer).attr('data-id');
            $(image).attr('src', imagePath + firstId + '.JPG');
            $(image).attr('data-id', firstId);
        }else{
            var nextElement = $('.gal-item[data-id='+id+']').next();
            var newId = $(nextElement).attr('data-id');
            $(image).attr('src', imagePath + newId + '.JPG');
            $(image).attr('data-id', newId);
        }
    });

    $('.modal-close-bnt').click(function(event){
        var parent = $(event.target).parent().parent('.modal-content');
        var image = $(parent[0]).children('.modal-body').children()[0];
        var id = $(image).attr('data-old-id');
        $(image).attr('src', imagePath + id +'.JPG');
        $(image).attr('data-id', id);
    });

    $(document).click(function(e) {
        //click event of the user click beside the picture
        var targetID = e.target.id;

        var blackList = ['gallerie-prev', 'gallerie-prev-span', 'gallerie-next-span', 'gallerie-next-span', 'gallerie-next'];

        if (blackList.indexOf(targetID) === -1) {
            //reset all elements
            var modals = $('.modal');
            for(var i=0; i<modals.length; i++){
                var id = modals[i].id;
                var image = $(modals[i]).children().children().children('.modal-body').children()[0];
                $(image).attr('src', imagePath + id +'.JPG');
                $(image).attr('data-id', id);
            }
        }
    });


});