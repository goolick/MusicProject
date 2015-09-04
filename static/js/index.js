
/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
    
    // This controls the button for the c note.
    
    // This variable calls the cNote audio element in the HTML.
    "use strict";
    var cNote, dNote, eNote, fNote, gNote, aNote, bNote, c2Note, myonoffswitch, on;
    cNote = document.getElementById('cAudio');
    
    // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    $('#c').mousedown(function () {
        
        // This is a property that scrubs the audio file back to its start.
        cNote.currentTime = 0;
        
        // This plays the audio file.
        cNote.play();
    });
    
    // This controls the button for the d note.
    
    dNote = document.getElementById('dAudio');
    
    $('#d').mousedown(function () {
        dNote.currentTime = 0;
        dNote.play();
    });
    
    // This controls the button for the e note.
    
    eNote = document.getElementById('eAudio');
    
    $('#e').mousedown(function () {
        eNote.currentTime = 0;
        eNote.play();
    });
 
    // This controls the button for the f note.
    
    fNote = document.getElementById('fAudio');
    
    $('#f').mousedown(function () {
        fNote.currentTime = 0;
        fNote.play();
    });
    
    // This controls the button for the g note.
    
    gNote = document.getElementById('gAudio');
    
    $('#g').mousedown(function () {
        gNote.currentTime = 0;
        gNote.play();
    });
    
    // This controls the button for the a note.
    
    aNote = document.getElementById('aAudio');
    
    $('#a').mousedown(function () {
        aNote.currentTime = 0;
        aNote.play();
    });
    
    // This controls the button for the b note.
    
    bNote = document.getElementById('bAudio');
    
    $('#b').mousedown(function () {
        bNote.currentTime = 0;
        bNote.play();
    });
    
    c2Note = document.getElementById('c2Audio');
    
    $('#c2').mousedown(function () {
        c2Note.currentTime = 0;
        c2Note.play();
    });
    
    
    myonoffswitch = document.getElementById('myonoffswitch');
    on = myonoffswitch.isChecked();
});