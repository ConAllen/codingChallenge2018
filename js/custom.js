// the ".loaded" has been changed to ready. Now the jquery loads
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    // $('#modal2').modal('open');
    $(".closeSide").hide();

});
