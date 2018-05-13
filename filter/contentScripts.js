chrome.runtime.onConnect.addListener((port)=>{
    if(port.name == "filter"){
        port.onMessage.addListener((msg)=>{
			filter(msg.kw,msg.tag)
        });
    }
});
var remove = (t)=>{
	t.parentNode.removeChild(t)
}
var filter = (keyword,tag)=>{
	var row = document.querySelectorAll(tag)
	for(var i=0;i<row.length;i++){
		if(row[i].textContent.includes(keyword))
			remove(row[i])
	}
	
}