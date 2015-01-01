var WebView = require('./webview/webview');
var webView = new WebView();
var wv = webView.getWebView();

var window = Titanium.UI.createWindow({
	title: 'Test Window',
	backgroundColor: '#fff'
});
	
window.open();

window.add(wv);

/*
var TextGrid = require('./view/textgrid');
var TextGridTest = require('./view/textgridtest');*/


/*
var textGrid = new TextGrid();
textGrid.initialize();*/

/*
var textGridTest = new TextGridTest();
textGridTest.create();*/

