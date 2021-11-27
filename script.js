// var to grab elements 
var currentDayEl = $('#currentDay');
var nineEl = $('#9');
var tenEl = $('#10');
var elevenEl = $('#11');
var twelveEl = $('#12');
var thirteenEl = $('#13');
var forteenEl = $('#14');
var fifteenEl = $('#15');
var sixteenEl = $('#16');
var seventeenEl = $('#17');

// display current date
currentDayEl.text (moment().format('LL'))

// functions to set timeblocks to past, present, or future color
past ()
present ()
future ()


// var for specific timeblock textbox and button
var text9El = $('#text9');
var btn9El = $('#btn9');


// get stored value in textbox stored in local memory
result9 = localStorage.getItem("text9");
// display store value in text box
text9El.text(result9)
// specific timeblock button listener. when button is pressed...
      btn9El.on('click', function () {
        // get the values the user input into the textbox. 
        var x = document.getElementById("text9").value;
    //  save values in locale storage for specific timeblock
        localStorage.setItem("text9", x);
      });

// same sequence as above for all timeblocks to gather and display user input
      var text10El = $('#text10');
      var btn10El = $('#btn10');
      
      result10 = localStorage.getItem("text10");
      
      text10El.text(result10)
      
            btn10El.on('click', function () {
              
              var x = document.getElementById("text10").value;

              localStorage.setItem("text10", x);
            });


            var text11El = $('#text11');
            var btn11El = $('#btn11');
            
            result11 = localStorage.getItem("text11");
            
            text11El.text(result11)
            
                  btn11El.on('click', function () {
                    
                    var x = document.getElementById("text11").value;
      
                    localStorage.setItem("text11", x);
                  });


                  var text12El = $('#text12');
                  var btn12El = $('#btn12');
                  
                  result12 = localStorage.getItem("text12");
                  
                  text12El.text(result12)
                  
                        btn12El.on('click', function () {
                          
                          var x = document.getElementById("text12").value;
            
                          localStorage.setItem("text12", x);
                        });


                        var text13El = $('#text13');
                        var btn13El = $('#btn13');
                        
                        result13 = localStorage.getItem("text13");
                        
                        text13El.text(result13)
                        
                              btn13El.on('click', function () {
                                
                                var x = document.getElementById("text13").value;
                  
                                localStorage.setItem("text13", x);
                              });



                         

                                    var text14El = $('#text14');
                                    var btn14El = $('#btn14');
                                    
                                    result14 = localStorage.getItem("text14");
                                    
                                    text14El.text(result14)
                                    
                                          btn14El.on('click', function () {
                                            
                                            var x = document.getElementById("text14").value;
                              
                                            localStorage.setItem("text14", x);
                                          });




                                                var text15El = $('#text15');
                                                var btn15El = $('#btn15');
                                                
                                                result15 = localStorage.getItem("text15");
                                                
                                                text15El.text(result15)
                                                
                                                      btn15El.on('click', function () {
                                                        
                                                        var x = document.getElementById("text15").value;
                                          
                                                        localStorage.setItem("text15", x);
                                                      });



                                                      var text16El = $('#text16');
                                                      var btn16El = $('#btn16');
                                                      
                                                      result16 = localStorage.getItem("text16");
                                                      
                                                      text16El.text(result16)
                                                      
                                                            btn16El.on('click', function () {
                                                              
                                                              var x = document.getElementById("text16").value;
                                                
                                                              localStorage.setItem("text16", x);
                                                            });


                                                            var text17El = $('#text17');
                                                            var btn17El = $('#btn17');
                                                            
                                                            result17 = localStorage.getItem("text17");
                                                            
                                                            text17El.text(result17)
                                                            
                                                                  btn17El.on('click', function () {
                                                                    
                                                                    var x = document.getElementById("text17").value;
                                                      
                                                                    localStorage.setItem("text17", x);
                                                                  });


// function to test if the timeblock should be grey
function past () {
    
// if the current time is greater than 9 set the 9 oclock timeblock to grey
if (moment().format('k')> 9) {
    
nineEl.addClass ('past')

}

// check current time with all timeblocks to determine if timeblocks should be grey
if (moment().format('k')> 10) {
    
    tenEl.addClass ('past')
    
    }

if (moment().format('k')> 11) {
    
    elevenEl.addClass ('past')
        
        }

        if (moment().format('k')> 12) {
    
            twelveEl.addClass ('past')
                
                }

                if (moment().format('k')> 13) {
    
                    thirteenEl.addClass ('past')
                        
                        }

                        if (moment().format('k')> 14) {
    
                            forteenEl.addClass ('past')
                                
                                }

                                if (moment().format('k')> 15) {
    
                                    fifteenEl.addClass ('past')
                                        
                                        }

                                        if (moment().format('k')> 16) {
    
                                            sixteenEl.addClass ('past')
                                                
                                                }

                                                if (moment().format('k')> 17) {
    
                                                    seventeenEl.addClass ('past')
                                                        
                                                        }
 }

// function to test if the timeblock should be red
 function present () {
    
// if the current time is equal to 9 set the 9 oclock timeblock to red
    if (moment().format('k')== 9) {
        
    nineEl.addClass ('present')
    
    }
    // check current time with all timeblocks to determine if timeblocks should be red
    if (moment().format('k')== 10) {
        
        tenEl.addClass ('present')
        
        }
    
    if (moment().format('k')== 11) {
        
        elevenEl.addClass ('present')
            
            }
    
            if (moment().format('k')== 12) {
        
                twelveEl.addClass ('present')
                    
                    }
    
                    if (moment().format('k')== 13) {
        
                        thirteenEl.addClass ('present')
                            
                            }
    
                            if (moment().format('k')== 14) {
        
                                forteenEl.addClass ('present')
                                    
                                    }
    
                                    if (moment().format('k')== 15) {
        
                                        fifteenEl.addClass ('present')
                                            
                                            }
    
                                            if (moment().format('k')== 16) {
        
                                                sixteenEl.addClass ('present')
                                                    
                                                    }
    
                                                    if (moment().format('k')== 17) {
        
                                                        seventeenEl.addClass ('present')
                                                            
                                                            }
     }


// function to test if the timeblock should be green
     function future () {
    
// if the current time is less than 9 set the 9 oclock timeblock to green
        if (moment().format('k')< 9) {
            
        nineEl.addClass ('future')
        
        }
        // check current time with all timeblocks to determine if timeblocks should be green
        if (moment().format('k') < 10) {
            
            tenEl.addClass ('future')
            
            }
        
        if (moment().format('k')< 11) {
            
            elevenEl.addClass ('future')
                
                }
        
                if (moment().format('k')< 12) {
            
                    twelveEl.addClass ('future')
                        
                        }
        
                        if (moment().format('k')< 13) {
            
                            thirteenEl.addClass ('future')
                                
                                }
        
                                if (moment().format('k') < 14) {
            
                                    forteenEl.addClass ('future')
                                        
                                        }
        
                                        if (moment().format('k') < 15) {
            
                                            fifteenEl.addClass ('future')
                                                
                                                }
        
                                                if (moment().format('k') < 16) {
            
                                                    sixteenEl.addClass ('future')
                                                        
                                                        }
        
                                                        if (moment().format('k') < 17) {
            
                                                            seventeenEl.addClass ('future')
                                                                
                                                                }
         }
