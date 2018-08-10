
let internet;

function init(){
    internet = internet1;
    $( "button" ).bind( "click", cleanUpAndRunInternet2 );
    startCrawling();
}
function startCrawling(){
    const startingPoint = "http://foo.bar.com/p1";
        validateAddress(startingPoint);
}

function keepCrawlingTilDone(){
    let nextAddress = myData.getNextAddressToCrawl();
    if(nextAddress !== undefined){
        validateAddress(nextAddress);
    }
    else{
        //wrap it up...display the results.
        success = document.getElementById("ul-success"); // this is the div where we'll add our successes
        myData.getSuccessLinks().forEach((item) => { 
        let liSuccess = document.createElement('li');
        liSuccess.appendChild(document.createTextNode(item));
        success.appendChild(liSuccess);
        });

        skipped = document.getElementById("ul-skipped"); // this is the div where we'll add our skips
        myData.getSkippedLinks().forEach((item) => { 
        let liSkipped = document.createElement('li');
        liSkipped.appendChild(document.createTextNode(item));
        skipped.appendChild(liSkipped);  
        });

        error = document.getElementById("ul-error"); // this is the div where we'll add our errors
        myData.getErrorLinks().forEach((item) => { 
        let liError = document.createElement('li');
        liError.appendChild(document.createTextNode(item));
        error.appendChild(liError); 
        }); 
    }
}

function validateAddress(crawlAddress){
    let isValidAddress = false;
    internet.pages.forEach((address) => { 
        if(crawlAddress === address.address){ // if address exists on internet, 
            myData.logSuccessLink(crawlAddress); // log that this is a good address
            myData.logToBeCrawled(address.links); // log all the links found to be crawled.
            isValidAddress = true;
        }
    });
    if(!isValidAddress){ 
        // 404 Not found ... log it
           myData.logErrorLink(crawlAddress);           
    }
        keepCrawlingTilDone();
}

function cleanUpAndRunInternet2(){
    internet = internet2;
    myData.resetData(); // cleanup old data
    $("li").remove();   // cleanup ui
    $( "button" ).bind( "click", cleanUpAndRunInternet1 );
    $( "button" ).unbind( "click", cleanUpAndRunInternet2 );
    $( "button" ).text("Click for Internet 1");
    startCrawling();    // start over
}
// the button was a late after thought, needs refactoring..
function cleanUpAndRunInternet1(){
    internet = internet1;
    myData.resetData(); // cleanup old data
    $("li").remove();   // cleanup ui
    $( "button" ).bind( "click", cleanUpAndRunInternet2 );
    $( "button" ).unbind( "click", cleanUpAndRunInternet1 );
    $( "button" ).text("Click for Internet 2");
    startCrawling();    // start over
}





