 // init controller
 var controller = new ScrollMagic.Controller();

 // 封面图消失
 new ScrollMagic.Scene({
         triggerElement: "#trigger01",
         duration: 1000,
         offset: 460
     })
     .setTween(".cover", {
         opacity: 0
     })
     .addIndicators()
     .addTo(controller);

 // 标题消失
 new ScrollMagic.Scene({
         triggerElement: "#trigger01",
         duration: 1000,
         offset: 460
     })
     .setTween(".cover-image", {
         opacity: 0
     })
     .addIndicators()
     .addTo(controller);

 // ebony照片停留
 new ScrollMagic.Scene({
         triggerElement: "#trigger02",
         duration: 800,
         offset: 350
     })
     .setPin("#pin01")
     .addIndicators()
     .addTo(controller);

 // ebony照片变亮
 new ScrollMagic.Scene({
         triggerElement: "#trigger02",
         duration: 300,
         offset: 0
     })
     .setTween(".ebony-image", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 // ebony照片变暗
 new ScrollMagic.Scene({
         triggerElement: "#trigger03",
         duration: 300,
         offset: -500
     })
     .setTween(".ebony-image", {
         opacity: 0.5
     })
     .addIndicators()
     .addTo(controller);

 //ebony图片介绍停留
 new ScrollMagic.Scene({
         triggerElement: "#trigger03",
         duration: 300,
         offset: -150
     })
     .setPin("#pin02")
     .addIndicators()
     .addTo(controller);

 // ebony text01 变亮
 new ScrollMagic.Scene({
         triggerElement: "#trigger04",
         duration: 300,
         offset: -200
     })
     .setTween(".ebony-text01", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 // ebony text01 停留
 new ScrollMagic.Scene({
         triggerElement: "#trigger04",
         duration: 800,
         offset: 290
     })
     .setPin("#pin03")
     .addIndicators()
     .addTo(controller);

 // ebony text01 变亮
 new ScrollMagic.Scene({
         triggerElement: "#trigger05",
         duration: 150,
         offset: -300
     })
     .setTween(".ebony-text02", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 // ebony text01 变亮
 new ScrollMagic.Scene({
         triggerElement: "#trigger05",
         duration: 150,
         offset: -300
     })
     .setTween(".ebony-text03", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 // more events 变亮
 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 250,
         offset: -350
     })
     .setTween(".more-events", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 //more events 停留
 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 2500,
         offset: -50
     })
     .setPin("#pin04")
     .addIndicators()
     .addTo(controller);


 // image pile 变亮
 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 70
     })
     .setTween("#f01", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);


 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 270
     })
     .setTween("#f03", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 470
     })
     .setTween("#f04", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 670
     })
     .setTween("#f05", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 870
     })
     .setTween("#n02", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 1070
     })
     .setTween("#n03", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 1270
     })
     .setTween("#n04", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 1470
     })
     .setTween("#n05", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 1670
     })
     .setTween("#s01", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 1870
     })
     .setTween("#s02", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 2070
     })
     .setTween("#s04", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 150,
         offset: 2270
     })
     .setTween("#s05", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 // image pile 变暗
 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 400,
         offset: 2500
     })
     .setTween(".image-pile", {
         opacity: 0
     })
     .addIndicators()
     .addTo(controller);


 // 背景变浅色
 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 1800,
         offset: 470
     })
     .setTween("body", {
         backgroundColor: "#EEEAE7"

     })
     .addIndicators()
     .addTo(controller);

 // 字 和 header边框 变浅色
 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 0,
         offset: 1270
     })
     .setTween("body", {
         color: "#000000"

     })
     .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#trigger06",
         duration: 0,
         offset: 1270
     })
     .setTween(".header", {
         borderBottomColor: "#000000"

     })
     .addIndicators()
     .addTo(controller);