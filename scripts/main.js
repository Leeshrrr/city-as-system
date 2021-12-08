 // init controller
 var controller = new ScrollMagic.Controller();

 {
     // 封面图消失
     new ScrollMagic.Scene({
             triggerElement: "#trigger01",
             duration: 1000,
             offset: 460
         })
         .setTween(".cover", {
             opacity: 0
         })
         // .addIndicators()
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
         //.addIndicators()
         .addTo(controller);

     // ebony照片停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger02",
             duration: 800,
             offset: 350
         })
         .setPin("#pin01")
         //.addIndicators()
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
         // .addIndicators()
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
         //.addIndicators()
         .addTo(controller);

     //ebony图片介绍停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger03",
             duration: 300,
             offset: -150
         })
         .setPin("#pin02")
         // .addIndicators()
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
         //.addIndicators()
         .addTo(controller);

     // ebony text01 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger04",
             duration: 800,
             offset: 320
         })
         .setPin("#pin03")
         //.addIndicators()
         .addTo(controller);

     // ebony text02 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger05",
             duration: 150,
             offset: -100
         })
         .setTween(".ebony-text02", {
             opacity: 1
         })
         //.addIndicators()
         .addTo(controller);

     // ebony text03 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger05",
             duration: 150,
             offset: -300
         })
         .setTween(".ebony-text03", {
             opacity: 1
         })
         // .addIndicators()
         .addTo(controller);

     // ebony text01 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger05",
             duration: 400,
             offset: 0
         })
         .setPin(".ebony-text02")
         // .addIndicators()
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
         // .addIndicators()
         .addTo(controller);

     //more events 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger06",
             duration: 2500,
             offset: -50
         })
         .setPin("#pin04")
         //.addIndicators()
         .addTo(controller);

     //more events 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger06",
             duration: 2000,
             offset: 450
         })
         .setPin("#pin05")
         //.addIndicators()
         .addTo(controller);


     // image pile 变亮
     {
         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 70
             })
             .setTween("#f01", {
                 opacity: 1
             })
             // .addIndicators()
             .addTo(controller);


         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 270
             })
             .setTween("#f03", {
                 opacity: 1
             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 470
             })
             .setTween("#f04", {
                 opacity: 1
             })
             //.addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 670
             })
             .setTween("#f05", {
                 opacity: 1
             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 870
             })
             .setTween("#n02", {
                 opacity: 1
             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 1070
             })
             .setTween("#n03", {
                 opacity: 1
             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 1270
             })
             .setTween("#n04", {
                 opacity: 1
             })
             //.addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 1470
             })
             .setTween("#n05", {
                 opacity: 1
             })
             //.addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 1670
             })
             .setTween("#s01", {
                 opacity: 1
             })
             //.addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 1870
             })
             .setTween("#s02", {
                 opacity: 1
             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 2070
             })
             .setTween("#s04", {
                 opacity: 1
             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger06",
                 duration: 150,
                 offset: 2270
             })
             .setTween("#s05", {
                 opacity: 1
             })
             //.addIndicators()
             .addTo(controller);
     }

     // image pile 变暗
     new ScrollMagic.Scene({
             triggerElement: "#trigger06",
             duration: 400,
             offset: 2500
         })
         .setTween(".image-pile", {
             opacity: 0
         })
         // .addIndicators()
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
         // .addIndicators()
         .addTo(controller);

     // 字 和 header边框 变深色
     new ScrollMagic.Scene({
             triggerElement: "#trigger06",
             duration: 0,
             offset: 1270
         })
         .setTween("a", {
             color: "#000000"

         })
         //.addIndicators()
         .addTo(controller);
     // 字 和 header边框 变深色
     new ScrollMagic.Scene({
             triggerElement: "#trigger06",
             duration: 0,
             offset: 1270
         })
         .setTween("a", {
             color: "#000000"

         })
         //.addIndicators()
         .addTo(controller);

     // 字 和 header边框 变深色
     new ScrollMagic.Scene({
             triggerElement: "#trigger06",
             duration: 0,
             offset: 1270
         })
         .setTween("body", {
             color: "#000000"

         })
         //.addIndicators()
         .addTo(controller);

     new ScrollMagic.Scene({
             triggerElement: "#trigger06",
             duration: 0,
             offset: 1270
         })
         .setTween(".header", {
             borderBottomColor: "#000000"

         })
         //.addIndicators()
         .addTo(controller);

     new ScrollMagic.Scene({
             triggerElement: "#trigger06",
             duration: 0,
             offset: 1270
         })
         .setTween(".menu", {
             borderRightColor: "#000000"

         })
         //.addIndicators()
         .addTo(controller);




     // 删除图片
     new ScrollMagic.Scene({
             triggerElement: "#trigger08",
             offset: 300
         })
         .setTween(".delete-image", {
             opacity: 0

         })
         //  .addIndicators()
         .addTo(controller);
     //harm text01 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger08",
             duration: 1300,
             offset: 330
         })
         .setPin("#pin06")
         //  .addIndicators()
         .addTo(controller);

     // harm text01 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger08",
             offset: 300
         })
         .setTween(".harm-text01", {
             opacity: 1

         })
         //  .addIndicators()
         .addTo(controller);

     // harm text01 变字体
     new ScrollMagic.Scene({
             triggerElement: "#trigger08",
             offset: 700
         })
         .setClassToggle(".highlight01", "active-highlight")
         // .addIndicators()
         .addTo(controller);

     // harm text01 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger08",
             offset: 700
         })
         .setClassToggle(".underline01", "active-underline")
         // .addIndicators()
         .addTo(controller);

     // harm text01 412000 变字体
     new ScrollMagic.Scene({
             triggerElement: "#trigger08",
             offset: 1000
         })
         .setClassToggle(".highlight02", "active-highlight")
         // .addIndicators()
         .addTo(controller);


     //death image 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger09",
             duration: 3800,
             offset: 400
         })
         .setPin("#pin07")
         // .addIndicators()
         .addTo(controller);


     // death image 变换
     {
         new ScrollMagic.Scene({
                 triggerElement: "#trigger09",
                 offset: 700
             })
             .setTween(".death-image01", {
                 opacity: 0

             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger09",
                 offset: 700
             })
             .setTween(".death-image02", {
                 opacity: 1

             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger09",
                 offset: 1600
             })
             .setTween(".death-image02", {
                 opacity: 0

             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger09",
                 offset: 1600
             })
             .setTween(".death-image03", {
                 opacity: 1

             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger09",
                 offset: 2500
             })
             .setTween(".death-image02", {
                 opacity: 0

             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger09",
                 offset: 2500
             })
             .setTween(".death-image03", {
                 opacity: 1

             })
             // .addIndicators()
             .addTo(controller);


         new ScrollMagic.Scene({
                 triggerElement: "#trigger09",
                 offset: 3000
             })
             .setTween(".death-image03", {
                 opacity: 0

             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger09",
                 offset: 3000
             })
             .setTween(".death-image04", {
                 opacity: 1

             })
             // .addIndicators()
             .addTo(controller);

     }

     //harm text02 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger10",
             duration: 1300,
             offset: 330
         })
         .setPin("#pin08")
         // .addIndicators()
         .addTo(controller);

     // harm text02 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger10",
             offset: 300
         })
         .setTween(".harm-text02", {
             opacity: 1

         })
         // .addIndicators()
         .addTo(controller);

     // harm text02 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger10",
             offset: 700
         })
         .setClassToggle(".underline02", "active-underline")
         //.addIndicators()
         .addTo(controller);

     // harm text02变字体
     new ScrollMagic.Scene({
             triggerElement: "#trigger10",
             offset: 700
         })
         .setClassToggle(".highlight03", "active-highlight")
         // .addIndicators()
         .addTo(controller);

     // disease image 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger10",
             offset: 1000
         })
         .setTween(".p-holder", {
             opacity: 1

         })
         // .addIndicators()
         .addTo(controller);


     // disease image 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger10",
             offset: 1200
         })
         .setTween(".turn01", {
             opacity: 0
         })
         //.addIndicators()
         .addTo(controller);


     //harm text03 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger15",
             duration: 1200,
             offset: 300
         })
         .setPin("#pin13")
         //.addIndicators()
         .addTo(controller);

     // harm text03 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger15",
             offset: 200
         })
         .setClassToggle(".underline03", "active-underline")
         //.addIndicators()
         .addTo(controller);


     // disease image 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger15",
             offset: 500
         })
         .setTween(".list1", {
             opacity: 1

         })
         //.addIndicators()
         .addTo(controller);

     // disease image 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger15",
             offset: 700
         })
         .setTween("#cause1", {
             opacity: 1

         })
         //.addIndicators()
         .addTo(controller);

     // disease image 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger15",
             offset: 900
         })
         .setTween(".list2", {
             opacity: 1

         })
         //.addIndicators()
         .addTo(controller);


     //source-lead-text text02 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger12",
             duration: 3100,
             offset: 400
         })
         .setPin("#pin10")
         // .addIndicators()
         .addTo(controller);

     //in danger text 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger13",
             duration: 500,
             offset: 330
         })
         .setPin("#pin11")
         //.addIndicators()
         .addTo(controller);

     // in danger text 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger13",
             offset: 300
         })
         .setTween(".in-danger-text", {
             opacity: 1

         })
         // .addIndicators()
         .addTo(controller);
     // in danger text 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger13",
             offset: 400
         })
         .setClassToggle(".underline04", "active-underline")
         // .addIndicators()
         .addTo(controller);

     // harm text01 变字体
     new ScrollMagic.Scene({
             triggerElement: "#trigger13",
             offset: 400
         })
         .setClassToggle(".highlight04", "active-highlight")
         // .addIndicators()
         .addTo(controller);

     // house image 变换
     {
         new ScrollMagic.Scene({
                 triggerElement: "#trigger12",
                 offset: 600
             })
             .setTween("#h01", {
                 opacity: 1

             })
             // .addIndicators()
             .addTo(controller);

         // harm text01 变字体
         new ScrollMagic.Scene({
                 triggerElement: "#trigger12",
                 offset: 600
             })
             .setClassToggle(".highlight06", "active-highlight")
             // .addIndicators()
             .addTo(controller);


         new ScrollMagic.Scene({
                 triggerElement: "#trigger12",
                 offset: 1300
             })
             .setTween("#h01", {
                 opacity: 0

             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger12",
                 offset: 1300
             })
             .setTween("#h02", {
                 opacity: 1

             })
             // .addIndicators()
             .addTo(controller);

         // harm text01 变字体
         new ScrollMagic.Scene({
                 triggerElement: "#trigger12",
                 offset: 1300
             })
             .setClassToggle(".highlight07", "active-highlight")
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger12",
                 offset: 2000
             })
             .setTween("#h02", {
                 opacity: 0

             })
             // .addIndicators()
             .addTo(controller);

         new ScrollMagic.Scene({
                 triggerElement: "#trigger12",
                 offset: 2000
             })
             .setTween("#h03", {
                 opacity: 1

             })
             // .addIndicators()
             .addTo(controller);
         // harm text01 变字体
         new ScrollMagic.Scene({
                 triggerElement: "#trigger12",
                 offset: 2000
             })
             .setClassToggle(".highlight08", "active-highlight")
             // .addIndicators()
             .addTo(controller);

     }

     //map 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger14",
             duration: 500,
             offset: 420
         })
         .setPin("#pin12")
         // .addIndicators()
         .addTo(controller);

     //map 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger14",
             duration: 400,
             offset: 200
         })
         .setTween(".map-container", {
             opacity: 1
         })
         //.addIndicators()
         .addTo(controller);

     //map 变暗
     new ScrollMagic.Scene({
             triggerElement: "#trigger14",
             duration: 300,
             offset: 1000
         })
         .setTween(".map-container", {
             opacity: 0
         })
         // .addIndicators()
         .addTo(controller);


     //history 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger11",
             duration: 700,
             offset: 320
         })
         .setPin("#pin09")
         // .addIndicators()
         .addTo(controller);

     //history 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger11",

             offset: 450
         })
         .setTween(".history-text", {
             opacity: 1
         })
         //.addIndicators()
         .addTo(controller);

     // harm text01 变字体
     new ScrollMagic.Scene({
             triggerElement: "#trigger11",
             offset: 700
         })
         .setClassToggle(".highlight05", "active-highlight")
         // .addIndicators()
         .addTo(controller);

     //paint text 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger16",

             offset: 50
         })
         .setTween(".paint-text01", {
             opacity: 1
         })
         // .addIndicators()
         .addTo(controller);


     //viz container 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger17",
             duration: 1500,
             offset: 420
         })
         .setPin(".viz-container")
         // .addIndicators()
         .addTo(controller);

     //viz text 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger17",

             offset: 50
         })
         .setTween("#viz-text", {
             opacity: 1
         })
         // .addIndicators()
         .addTo(controller);
     //viz chart 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger17",

             offset: 650
         })
         .setTween("#my_dataviz", {
             opacity: 1
         })
         // .addIndicators()
         .addTo(controller);
     //viz chart 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger17",

             offset: 1500
         })
         .setTween(".viz-container", {
             opacity: 0
         })
         // .addIndicators()
         .addTo(controller);

     //effort 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger18",
             duration: 500,
             offset: 300
         })
         .setPin("#pin15")
         // .addIndicators()
         .addTo(controller);

     //effort 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger18",
             duration: 400,
             offset: 300
         })
         .setTween("#effort-text", {
             opacity: 1
         })
         // .addIndicators()
         .addTo(controller);

     new ScrollMagic.Scene({
             triggerElement: "#trigger19",
             duration: 500,
             offset: 430
         })
         .setPin("#pin16")
         // .addIndicators()
         .addTo(controller);

     new ScrollMagic.Scene({
             triggerElement: "#trigger19",
             duration: 400,
             offset: 1000
         })
         .setTween(".full-container", {
             opacity: 0
         })
         // .addIndicators()
         .addTo(controller);

     //reachout 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger20",
             duration: 1000,
             offset: 300
         })
         .setPin("#pin17")
         // .addIndicators()
         .addTo(controller);

     // evaluation 01 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger20",
             duration: 400,
             offset: 400
         })
         .setTween(".evaluation-text01", {
             opacity: 1
         })
         //.addIndicators()
         .addTo(controller);

     //reachout 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger21",
             duration: 1000,
             offset: 300
         })
         .setPin(".evaluation-text02")
         // .addIndicators()
         .addTo(controller);

     // harm text01 变字体
     new ScrollMagic.Scene({
             triggerElement: "#trigger21",
             offset: 600
         })
         .setClassToggle(".highlight10", "active-highlight")
         //  .addIndicators()
         .addTo(controller);

     // harm text01 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger21",
             offset: 600
         })
         .setClassToggle(".underline05", "active-underline")
         // .addIndicators()
         .addTo(controller);


     // harm text01 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger21",
             offset: 750
         })
         .setClassToggle(".underline06", "active-underline")
         //.addIndicators()
         .addTo(controller);

     //reachout 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger22",
             duration: 1000,
             offset: 300
         })
         .setPin(".evaluation-text03")
         //  .addIndicators()
         .addTo(controller);

     // harm text01 变字体
     new ScrollMagic.Scene({
             triggerElement: "#trigger22",
             offset: 600
         })
         .setClassToggle(".highlight11", "active-highlight")
         //.addIndicators()
         .addTo(controller);

     // harm text01 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger22",
             offset: 750
         })
         .setClassToggle(".underline07", "active-underline")
         //.addIndicators()
         .addTo(controller);


     // harm text01 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger22",
             offset: 900
         })
         .setClassToggle(".underline08", "active-underline")
         //.addIndicators()
         .addTo(controller);

     //reachout 停留
     new ScrollMagic.Scene({
             triggerElement: "#trigger23",
             duration: 1000,
             offset: 300
         })
         .setPin(".evaluation-text04")
         // .addIndicators()
         .addTo(controller);


     // harm text01 变字体
     new ScrollMagic.Scene({
             triggerElement: "#trigger23",
             offset: 600
         })
         .setClassToggle(".highlight12", "active-highlight")
         // .addIndicators()
         .addTo(controller);

     // harm text01 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger23",
             offset: 750
         })
         .setClassToggle(".underline09", "active-underline")
         //.addIndicators()
         .addTo(controller);

     // harm text01 下划线
     new ScrollMagic.Scene({
             triggerElement: "#trigger23",
             offset: 900
         })
         .setClassToggle(".underline10", "active-underline")
         //.addIndicators()
         .addTo(controller);

     // evaluation 01 变亮
     new ScrollMagic.Scene({
             triggerElement: "#trigger24",
             duration: 400,
             offset: 0
         })
         .setTween(".reference", {
             opacity: 1
         })
         //.addIndicators()
         .addTo(controller);







     // evaluation 01 变亮
     new ScrollMagic.Scene({
             triggerElement: "#section1",


         })
         .setTween("#menu01 a", {
             color: "#8f0909"
         })
         //  .addIndicators()
         .addTo(controller);
     // evaluation 01 变亮
     new ScrollMagic.Scene({
             triggerElement: "#section2",

         })
         .setTween("#menu02 a", {
             color: "#8f0909"
         })
         //  .addIndicators()
         .addTo(controller);


     // evaluation 01 变亮
     new ScrollMagic.Scene({
             triggerElement: "#section3",


         })
         .setTween("#menu03 a", {
             color: "#8f0909"
         })
         //   .addIndicators()
         .addTo(controller);

     new ScrollMagic.Scene({
             triggerElement: "#section3",


         })
         .setTween("#menu02 a", {
             color: "#000000"
         })
         //  .addIndicators()
         .addTo(controller);

     // evaluation 01 变亮
     new ScrollMagic.Scene({
             triggerElement: "#section4",


         })
         .setTween("#menu04 a", {
             color: "#8f0909"
         })
         // .addIndicators()
         .addTo(controller);

     new ScrollMagic.Scene({
             triggerElement: "#section4",


         })
         .setTween("#menu03 a", {
             color: "#000000"
         })
         // .addIndicators()
         .addTo(controller);

     // evaluation 01 变亮
     new ScrollMagic.Scene({
             triggerElement: "#section5"


         })
         .setTween("#menu05 a", {
             color: "#8f0909"
         })
         // .addIndicators()
         .addTo(controller);


     new ScrollMagic.Scene({
             triggerElement: "#section5"


         })
         .setTween("#menu04 a", {
             color: "#000000"
         })
         // .addIndicators()
         .addTo(controller);

     // evaluation 01 变亮
     new ScrollMagic.Scene({
             triggerElement: "#section6"


         })
         .setTween("#menu06 a", {
             color: "#8f0909"
         })
         // .addIndicators()
         .addTo(controller);


     new ScrollMagic.Scene({
             triggerElement: "#section6"


         })
         .setTween("#menu05 a", {
             color: "#000000"
         })
         // .addIndicators()
         .addTo(controller);

 }