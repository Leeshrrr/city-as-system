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