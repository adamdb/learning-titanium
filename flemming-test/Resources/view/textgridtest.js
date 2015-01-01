var TextGridTest = function TextGridTest() {
};

var copy = ['lorem', 'ipsum', 'dolar', 'sit'],
		x = 0,
		y = 20,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth,
		total = 0;

TextGridTest.prototype.create = function () {
	
	function getTextField() {
		var rand = Math.floor(Math.random() * (3 - 0)) + 0;
		var text = copy[rand];
		
		total = total + 1;
		
		return Ti.UI.createTextField({
  		color: '#000',
  		top: y, 
  		left: x,
  		value: text,
  	});
	}
	
	function addTextField() {
		var tf = getTextField();
		
		var onPostLayout = function onPostLayout() {
			tf.removeEventListener('postlayout', onPostLayout);
								
			if ((x + tf.size.width) >= width) {
				tf.left = x = 0;
				tf.top = y = (y + tf.size.height);
								
				addTextField();
			}
			else if ((y + tf.size.height) >= height) {
				// Do nothing
				console.log(total);
			}
			else {
				tf.left = x;
				
				x = x + tf.size.width;
								
				addTextField();
			}
		};
		
		tf.addEventListener('postlayout', onPostLayout);
		
		window.add(tf);
	}
	
	var window = Titanium.UI.createWindow({
		title: 'Test',
		backgroundColor: '#fff'
	});
	
	window.open();
	
	addTextField();
};

module.exports = TextGridTest;