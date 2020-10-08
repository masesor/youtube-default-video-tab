chrome.runtime.onConnect.addListener(port => {
	console.log('connected ', port);

	if (port.name === 'check_url') {
		port.onMessage.addListener(this.processMessage);
	}
});