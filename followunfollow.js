var totalCounter = 0;  
var actionCounter = 0; 
var maxActionsPerBatch = 13;  
var dialogSelector = "._4gt3b";  
var followButtonSelector = "._cx1ua button:contains('Following')"; 
var unfollowButtonSelector = "._cx1ua button:contains('Follow')"; 
var delayBetweenClicks = 4000; 
var delayRandomness = 4000;  
var delayBetweenBatches = 600000;  

var script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js";
document.getElementsByTagName('body')[0].appendChild(script);

function followUnfollow() {
    var delay = 5000; 
    
    if (actionCounter < maxActionsPerBatch) {
        if (jQuery(followButtonSelector).length) {
            jQuery(jQuery(followButtonSelector)[0]).click();
            actionCounter++;
            totalCounter++;
            console.log("Followed " + totalCounter + " person(s)");
        } else if (jQuery(unfollowButtonSelector).length) {
            jQuery(jQuery(unfollowButtonSelector)[0]).click();
            actionCounter++;
            totalCounter++;
            console.log("Unfollowed " + totalCounter + " person(s)");
        } else {
            jQuery(dialogSelector).scrollTop(100000000);
            console.log("No more buttons found. Scrolling down.");
        }
        delay = Math.random() * delayRandomness + delayBetweenClicks;
    } else {
        actionCounter = 0;
        delay = delayBetweenBatches;
        console.log("Pausing with execution for " + delay / 1000 + " seconds...");
    }
    
    // Recur with a delay
    setTimeout(function() {
        followUnfollow();
    }, delay);
}

function waitForjQuery(callback) {
    if (!window.jQuery) {
        setTimeout(function() {
            waitForjQuery(callback);
        }, 50);
    } else {
        callback();
    }
}

waitForjQuery(function() {
    if (!jQuery(dialogSelector).length) {
        alert("Open the 'Following' dialog!");
    }
    followUnfollow();  
});
