window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context =canvas.getContext("2d");
    var s = window.screen;
    var W = canvas.width = s.width;
    var H = canvas.height;
    canvas.width = W;
    canvas.height = H;
   
    var fontSize = 12;
   
    var colunms = Math.floor(W /fontSize);  
    
    var drops = [];
    
    for(var i=0;i<colunms;i++){
        drops.push(0);
    }
    
    var str ="WELCOME TO WWW.ITRHX.COM";
    function draw(){
        context.fillStyle = "rgba(238,238,238,.08)";
        context.fillRect(0,0,W,H);
        
        context.font = "600 "+fontSize+"px  Georgia";
        
        context.fillStyle = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"][parseInt(Math.random() * 10)];//randColor();可以rgb,hsl, 标准色，十六进制颜色
        
        for(var i=0;i<colunms;i++){
            var index = Math.floor(Math.random() * str.length);
            var x = i*fontSize;
            var y = drops[i] *fontSize;
            context.fillText(str[index],x,y);
            
            if(y >= canvas.height && Math.random() > 0.99){
                drops[i] = 0;
            }
            drops[i]++;
        }
    };
    function randColor(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb("+r+","+g+","+b+")";
    }
    draw();
    setInterval(draw,35);
};