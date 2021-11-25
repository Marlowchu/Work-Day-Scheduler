// if current time is < time block ... change class to future
// if current time is = time block ... change class to present
// if current time is > time block ... change class to past

var currentDayEl = $('#currentDay');

var row = $('.row')

var nineEl = $('#9');
var tenEl = $('#10');
var elevenEl = $('#11');
var twelveEl = $('#12');
var thirteenEl = $('#13');
var forteenEl = $('#14');
var fifteenEl = $('#15');
var sixteenEl = $('#16');
var seventeenEl = $('#17');


var timeBlocks = ['9', '10', '11', '12', '13', '14', '15','16','17']
var timeBlockEl = ['nineEl', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen','sixteen','seventeen']

// row.addClass ('future')




currentDayEl.text (moment().format('LL'))


past ()
present ()
future ()





function past () {
    

if (moment().format('k')> 9) {
    
nineEl.addClass ('past')

}

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


 function present () {
    

    if (moment().format('k')== 9) {
        
    nineEl.addClass ('present')
    
    }
    
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



     function future () {
    

        if (moment().format('k')< 9) {
            
        nineEl.addClass ('future')
        
        }
        
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
    






// for each
// if index is greater then time set index id to future
// if index is less then time set index id to past
// if index is = to time set index id to present




// if (moment().format('k') = 9) {
//     nineEl.addClass ('present')
// }

// if (moment().format('k') < 9) {
//     nineEl.addClass ('future')
// }