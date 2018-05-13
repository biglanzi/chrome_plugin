chrome.runtime.onConnect.addListener((port)=>{//建立监听
    if(port.name == "filter"){//判断通道名称
        port.onMessage.addListener((msg)=>{//监听消息
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