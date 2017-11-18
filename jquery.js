// Hide and Show Message And List

var $div = $('div.openingMessage');
var $button = $('input#message');
var $content = $('div.content');

$(function(){
    $content.hide();
    $button.on('click', function(){
        $div.hide();
        $content.show();
    });
});

// Add New Items To List And Fade Out Added Li Tags On Click

$(function() {

var $newItemButton = $('#newItemButton');
var $newItemForm = $('#newItemForm');
var $textInput = $('input:text');

$newItemButton.show();
$newItemForm.hide();

$('#showForm').on('click', function(){
    $newItemButton.hide();
    $newItemForm.show();
});

$newItemForm.on('submit', function(event){
    event.preventDefault();
    var newText = $textInput.val();
    $('li:last').after('<li>' + newText + '</li>');
    $newItemButton.show();
    $newItemForm.hide();
    $textInput.val('');

    $(function(){
        $('li').on('click', function(){
            $(this).hide();
            // $(this).fadeOut(800);
        });
    });

});

});

// Fade Out Original Li Tags On Click

$(function(){
    $('li').on('click', function(){
        $(this).hide();
    });
    $('li').addClass('defaultItem');
});