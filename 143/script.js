if(LGlobal.canTouch){
	LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
	LSystem.screen(LStage.FULL_SCREEN);
}
init(20,"legend",800,400,main);
var backLayer;
var bitmapData;
var snowBack;
var lightBack;
var _snow = [];
var gravity = 0.15;
var drag = 1;
var loader;
var rect;
function main(){
	LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
	LSystem.screen(LStage.FULL_SCREEN);
	rect = new LRectangle(0,0,LGlobal.width,LGlobal.height);
	var labelText = new LTextField();
	labelText.color = "#000000";
	labelText.weight = "bolder";
	labelText.text = getParameter("k");
	if(!labelText.text)labelText.text="Happy Birthday, Gullu";
	labelText.size = 20;
	while(labelText.getWidth() < LGlobal.width -200 && labelText.getHeight() < LGlobal.height - 100){
		labelText.size += 5;
	}
	var w = labelText.getWidth()*1.1;
	var h = labelText.size*1.5;
	labelText.width = w;
	labelText.setWordWrap(true,h);
	labelText.x = (LGlobal.width - w)*0.5;
	labelText.y = (LGlobal.height - h)*0.5;
	backLayer = new LSprite();
	addChild(backLayer);
	backLayer.addChild(labelText);
	bitmapData = new LBitmapData(null,0,0,LGlobal.width,LGlobal.height,LBitmapData.DATA_CANVAS);
	bitmapData.draw(backLayer);
	backLayer.removeChild(labelText);
	snowBack = new LBitmapData(null,0,0,LGlobal.width,LGlobal.height,LBitmapData.DATA_CANVAS);
	var bitmap = new LBitmap(snowBack);
	backLayer.addChild(bitmap);
	bitmapData.lock();
	backLayer.addEventListener(LEvent.ENTER_FRAME,run);
}
function getParameter(key) {
	var str = location.search.split("?");
	if (str.length < 2) {
		return "";
	}
	var params = str[1].split("&");
	for (var i = 0; i < params.length; i++) {
		var keyVal = params[i].split("=");
		if (keyVal[0] == key && keyVal.length == 2) {
				return decodeURIComponent(keyVal[1]);
		}
	}
		return "";
}
function run(){
	var n = _snow.length, d;
	snowBack.lock();
	snowBack.setPixels(rect,0x000000);
	while(n--){
		var p = _snow[n];
		p.vy += gravity * p.s;
		p.y += p.vy;
		if(checkPixel(p.x, p.y)){
			p.y -= p.vy;
			p.vy = 0;
			p.y += 0.2;
		}
		snowBack.setPixel(p.x, p.y, 0xffffff);
		if(p.y > LGlobal.height) {
			_snow.splice(n, 1);
		}
	}
	snowBack.unlock();
	n = 10;
	while(n--) {
		particle(Math.random() * LGlobal.width, 0, Math.random() + 0.5);
	}
}
function particle(px,py,ps,pvx,pvy){
	if(typeof ps == UNDEFINED)ps = 1;
	if(typeof pvx == UNDEFINED)pvx = 0;
	if(typeof pvy == UNDEFINED)pvy = 0;
	_snow.push({x:px,y:py,s:ps,vx:pvx,vy:pvy});
}
function checkPixel(x,y){
	var pixel = bitmapData.getPixel(x,y);
	for(var i=0;i<pixel.length;i++){
	if(pixel[i])return true;
	}
	return false;
}