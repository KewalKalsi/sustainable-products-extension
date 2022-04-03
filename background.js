chrome.action.disable();
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete') {
        console.log(tab.url);
        if (tab.url.indexOf('amazon') != -1) {
            if (tab.url.indexOf('dp') != -1) {
                var baseUrl = "https://api.rainforestapi.com/request"
                var myUrl = new URL(baseUrl);
                myUrl.searchParams.append('api_key', '14E49F1A64804E339E2085E1FEC35DDB');
                myUrl.searchParams.append('type', 'product');
                myUrl.searchParams.append('url', tab.url);
                fetch(myUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    console.log(data.request_info.credits_remaining)
                    console.log(data.product.brand);
                    if (true == true) {
                        var username = '01c3a0fa839a03e7082f7fd75562a339';
                        var password = '616e68cca5bd5e8fbff19f99e12bc8bb'
                        $.ajax({
                            type: "GET",
                            url: "myapi.php",
                            dataType: 'json',
                            headers: {
                              "Authorization": "Basic " + btoa(username + ":" + password)
                            },
                            success: function (result){
                                console.log(result)
                            }
                          });

                        /*fetch('https://www.amee.com/api/companies?from_lat_lon=51.623,-0.0732&distance=20', {
                            headers: {
                                'Authorization': `Basic ${btoa(username)}:${btoa(password)}`,
                            }
                        })
                        .then(response => response.json())
                        .then(data => {
                            jsonData = data;
                            console.log(data);
                        })*/
                    }
                })
                .catch(error => console.error(error));
            }
            
        if (tab.url.indexOf('google') != -1) {
            console.log('Extension Enabled');
            chrome.action.enable(tabId);

            }
            
        } else {
            console.log('Extension Disabled');
            chrome.action.disable(tabId);
        }
    }
})

function searchForItem() {
    console.log("peepeepoopoo")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        //var obj = JSON.parse(response)
        //console.log(obj)
        console.log("ASOIDUGAISKDGFALS");
        return response.json();
    })
    .then(users => {
        console.log(users);
    })
}