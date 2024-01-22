/**
 * 
 * var extent = Cesium.Rectangle.fromDegrees(117.896284, 31.499028, 139.597380, 43.311528);

Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0.7;

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MTU5MWNmMy0yZjE0LTQ5YjUtOTBiYi0xN2I3ZWFjZGVlZWEiLCJpZCI6MTkxMDg1LCJpYXQiOjE3MDU4ODQ1NzB9.5NQB1bmWiTj-JHgLYOu3Z2TXjpksow0vt-TWQWuruls';
var viewer = new Cesium.Viewer('cesiumContainer',
	{
		timeline : false,
		animation : false,
		selectionIndicator : false,
		navigationHelpButton : false,
		infoBox : false,
		navigationInstructionsInitiallyVisible : false
	});
	
function makeBox(){
	var box = viewer.entities.add({
		name:'Box',
		position: Cesium.Cartesian3.fromDegress(126.924403, 37.524624, 255.0),
		box : {
			dimensions : new Cesium.Cartesian3(500.0, 500.0, 500.0),
			material : Cesium.Color.WHITE,
			outline : false,
			outlinecolor : Cesium.Color.BLACK
		}
	});
	
	viewer.zoomTo(viewer.entities);
	alert('3D 상자를 생성합니다.');
}

 */