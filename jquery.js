// Hide and Show Message And List

var $div = $('div.openingMessage');
var $button = $('input#message');
var $listContent = $('div.listContent');

$(function(){
    $listContent.hide();
    $button.on('click', function(){
        $div.hide();
        $listContent.show();
    });
});

// Fade Out Original Li Tags On Click

$(function(){
    $('li').on('click', function(){
        $(this).fadeOut(0);
    });
    $('li').addClass('defaultItem');
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
        $('li:last').after('<li>' + '<em>' + newText + '</em>' + '</li>');
        $newItemButton.show();
        $newItemForm.hide();
        $textInput.val('');
        
        $(function(){
            $('li').on('click', function(){
                // $(this).hide();
                $(this).fadeOut(0);
            });
        });
        
    });
    
});


// Print Page Function
$(function () {
    $(".printPage").click(function () {
        var contents = $("ul").html();
        var frame1 = $('<iframe />');
        frame1[0].name = "frame1";
        frame1.css({ "position": "absolute", "top": "-1000000px" });
        $("body").append(frame1);
        //Create a HTML document
        var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
        frameDoc.document.open();
        frameDoc.document.write('<html><head><title>BLACK FRIDAY SHOPPING LIST</title>');
        frameDoc.document.write('</head><body><div class="printBkgrd">');
        frameDoc.document.write('<h1 class="printH1">My Black Friday Shopping List:</h1>');
        //Link to a sepatate CSS file
        frameDoc.document.write('<link href="printStyles.css" rel="stylesheet" type="text/css" />');
        //Add the list items
        frameDoc.document.write(contents);
        frameDoc.document.write('</div></body></html>');
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            frame1.remove();
        }, 500);
    });
});