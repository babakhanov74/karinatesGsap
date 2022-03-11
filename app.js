const tl = gsap.timeline()

tl.from(".right_wrapper",2,{
    width:"100%",
    ease:Expo.easeIn
})

.from(".left_wrapper",2,{
    width:"0%"
})



.from(".right_wrapper .center h1",0.7,{
    x:'500px'
},"-=0.4")
.from(".right_wrapper .center p",0.7,{
    x:'500px'
},"-=0.2")
.from(".left_nav h5",0.7,{
    y:"-50px"
})

.from(".left_nav :last-child",0.7,{
    y:"-50px"
},"-=0.5")

.from(".right_nav :first-child",0.7,{
    y:"-50px"
},"-=0.5")

.from(".right_nav :last-child",0.7,{
    y:"-50px"
},"-=0.5")

.from(".nav_center a",0.7,{
    y:"-50px"
},"-=0.5")

.from(".nav_center img",0.7,{
    y:"-50px"},"-=0.5")
.from(".right_wrapper .bottom p:first-child",0.7,{

    x:'500px'
},"-=0.5")
.from(".right_wrapper .bottom .line",0.7,{

    x:'500px'
},"-=0.5")
.from(".right_wrapper .bottom p:nth-child(3)",0.7,{

    x:'500px'
},"-=0.7")
.from(".right_wrapper .bottom p:last-child",0.7,{

    x:'500px'
},"-=0.5");
tl.from(".left_wrapper .image",3,{
    width:'0%'

    
})
.to(".left_wrapper .image",1,{
    width:'580px',
    height:'426px'

    
})
.to(".left_wrapper .image img",1,{
    width:'580px',
    height:'426px'

    
},"-=1")
.from(".left_wrapper h1",1,{
   x:'-500px'

    
},"-=1")
.from(".left_wrapper .bottom",1.2,{
   y:'100px'

    
},"-=1")