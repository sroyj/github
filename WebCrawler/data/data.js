
let myData = {
    toBeCrawled: [],        //sites to be crawled are placed here until they are crawled, then they're removed.

    successLinks: [],       //success....we'll store links here as they are found

    skippedLinks: [],       //duplicates...store duplicate links here

    errorLinks:   [],       //errors....broken/invalid links stored here


    logSuccessLink: (link) => { 
        myData.successLinks.push(link);
    },
    logSkippedLink: (link) => {
        myData.skippedLinks.push(link);
    },
    logErrorLink:   (link) => {
        myData.errorLinks.push(link);
    },
    logToBeCrawled: (links) => {
        links.forEach((link) => { // Add all links found on page to the toBewCrawled array
        if(myData.toBeCrawled.find((element) => { return element === link })===undefined && // only add if it's not in the toBeCrawled queue 
            myData.successLinks.find((element) => { return element === link })===undefined ){ //and hasn't already been crawled
            myData.toBeCrawled.push(link);
        }
        else{
            if(myData.skippedLinks.find((element) => { return element === link })===undefined){ // if it's already in skippedLinks, don't add it again.
                myData.skippedLinks.push(link);
            }
         }
    });
    },
    getNextAddressToCrawl: () => {
        if(myData.toBeCrawled.length===0) return undefined; // this indicated we've reached the end of the road.
        let nextToCrawl = myData.toBeCrawled[0];// Grab the next site off the top
        myData.toBeCrawled.shift(); // remove it from the top of the array
        return nextToCrawl; //pass it back
    },
    getSuccessLinks: () => {
        return myData.successLinks
    },
    getSkippedLinks: () => {
        return myData.skippedLinks
    },
    getErrorLinks: () => {
        return myData.errorLinks
    },
    resetData:() => {
        myData.successLinks = [];
        myData.skippedLinks = [];
        myData.errorLinks   = [];
    } 
  }