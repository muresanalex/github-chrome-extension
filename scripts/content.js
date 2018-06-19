chrome.runtime.onMessage.addListener( function ( message, sender, sendResponse ) {
    const name = getDetails( ".p-name" );
    const nickname = getDetails( ".p-nickname" );
    const email = getDetails( ".u-email" );
    
    function getDetails( className ) {
        const defaultValue = "Not available"; 
        const domElement = document.querySelector( className );
        if ( !domElement ) {
            return defaultValue;
        }
        return domElement.innerHTML;
    }

    sendResponse( { data: { name, nickname, email } } );
} );
