chrome.tabs.query(
    {active: true, currentWindow: true},
    function (tabs) {
        var port = chrome.tabs.connect(
            tabs[0].id,
            {name: "filter"}
        )
        $("#popup").click(()=>{
			if($("#keyword").val().length && $("#tag").val().length)
				port.postMessage({kw:$("#keyword").val(),tag:$("#tag").val()})
        })
        port.onMessage.addListener((msg)=>{})
		port.onDisconnect.addListener((msg)=>{})
    });