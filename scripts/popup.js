chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage( tabs[0].id, { text: "get_data" }, function( response ) {
        const name = document.querySelector( "#name" );
        const nickname = document.querySelector( "#nickname" );
        const email = document.querySelector( "#email" );
        name.innerHTML = response.data.name;
        nickname.innerHTML = "nickname: " + response.data.nickname;
        email.innerHTML = "email: " + response.data.email;
    } );
} );
