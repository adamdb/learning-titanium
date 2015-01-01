var WebView = function WebView() {
};

WebView.prototype.getWebView = function () {
	return Titanium.UI.createWebView({url:'./webview/test.html'});  
};

module.exports = WebView;