$( document ).ready(function() {

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
        var parsedId = parseInt(id);
        if(parsedId > 1){
            var newId = parsedId - 1;
            $(image).attr('src', '/images/GallerieSortier/DSC_'+ newId.toString() +'.JPG');
            $(image).attr('data-id', newId.toString());
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
        var parsedId = parseInt(id);
        if(parsedId > 1){
            var newId = parsedId + 1;
            $(image).attr('src', '/images/GallerieSortier/DSC_'+ newId.toString() +'.JPG');
            $(image).attr('data-id', newId.toString());
        }
    });

    $('.modal-close-bnt').click(function(event){
        var parent = $(event.target).parent().parent('.modal-content');
        var image = $(parent[0]).children('.modal-body').children()[0];
        var id = $(image).attr('data-old-id');
        $(image).attr('src', '/images/GallerieSortier/DSC_'+ id +'.JPG');
        $(image).attr('data-id', id);
    });

    $(document).click(function(e) {
        var targetID = e.target.id;
        if (targetID != 'gallerie-prev' && targetID != 'gallerie-prev-span' && targetID && 'gallerie-next-span' && targetID != 'gallerie-next-span') {
            //todo: reset all elements
            var modals = $('.modal');
            for(var i=0; i<modals.length; i++){
                var id = modals[i].id;
                var image = $(modals[i]).children().children().children('.modal-body').children()[0];
                $(image).attr('src', '/images/GallerieSortier/DSC_'+ id +'.JPG');
                $(image).attr('data-id', id);
            }
        }
    });

});