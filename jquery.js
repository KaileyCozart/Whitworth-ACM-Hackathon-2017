// Hide and Show Message And List
var $div = $('div.preShoppingListDiv');
var $button = $('input#message');
var $listContent = $('div.shoppingListDiv');

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

/* Add New Items To List And Fade Out Added Li Tags On Click For Each List */

// List One
$(function() {
    
    var $newItemButton = $('#newItemButtonOne');
    var $newItemForm = $('#newItemFormOne');
    var $textInput = $('input.inputNewItemOne:text');
    
    $newItemButton.show();
    $newItemForm.hide();
    
    $('#showFormOne').on('click', function(){
        $newItemButton.hide();
        $newItemForm.show();
    });
    
    $newItemForm.on('submit', function(event){
        event.preventDefault();
        var newText = $textInput.val();
        $('ul.ulOne li:last').after('<li>' + '<em>' + newText + '</em>' + '</li>');
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

// List Two
$(function() {
    
    var $newItemButton = $('#newItemButtonTwo');
    var $newItemForm = $('#newItemFormTwo');
    var $textInput = $('input.inputNewItemTwo:text');
    
    $newItemButton.show();
    $newItemForm.hide();
    
    $('#showFormTwo').on('click', function(){
        $newItemButton.hide();
        $newItemForm.show();
    });
    
    $newItemForm.on('submit', function(event){
        event.preventDefault();
        var newText = $textInput.val();
        $('ul.ulTwo li:last').after('<li>' + '<em>' + newText + '</em>' + '</li>');
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

// List Three
$(function() {
    
    var $newItemButton = $('#newItemButtonThree');
    var $newItemForm = $('#newItemFormThree');
    var $textInput = $('input.inputNewItemThree:text');
    
    $newItemButton.show();
    $newItemForm.hide();
    
    $('#showFormThree').on('click', function(){
        $newItemButton.hide();
        $newItemForm.show();
    });
    
    $newItemForm.on('submit', function(event){
        event.preventDefault();
        var newText = $textInput.val();
        $('ul.ulThree li:last').after('<li>' + '<em>' + newText + '</em>' + '</li>');
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
        var contentsOne = $(".ulOne").html();
        var contentsTwo = $("ul.ulTwo").html();
        var contentsThree = $("ul.ulThree").html();
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
        //First List
        var headerOne = $("ul.ulOne li:first").html();
        frameDoc.document.write('<h2 class="printH2">');
        frameDoc.document.write(headerOne);
        frameDoc.document.write('</h2>');
        frameDoc.document.write(contentsOne);
        //Second List
        var headerTwo = $("ul.ulTwo li:first").html();
        frameDoc.document.write('<h2 class="printH2">');
        frameDoc.document.write(headerTwo);
        frameDoc.document.write('</h2>');
        frameDoc.document.write(contentsTwo);
        //Third List
        var headerThree = $("ul.ulThree li:first").html();
        frameDoc.document.write('<h2 class="printH2">');
        frameDoc.document.write(headerThree);
        frameDoc.document.write('</h2>');
        frameDoc.document.write(contentsThree);
        //Close Document
        frameDoc.document.write('</div></body></html>');
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            frame1.remove();
        }, 500);
    });
});

// Draggable List Items
$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

$( function() {
    $( "#sortableTwo" ).sortable();
    $( "#sortableTwo" ).disableSelection();
});

$( function() {
    $( "#sortableThree" ).sortable();
    $( "#sortableThree" ).disableSelection();
});