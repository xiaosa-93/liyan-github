window.onload=function(){
    var t=null;
    showtime();
     function showtime(){
        var dt=new Date();
        var y=dt.getFullYear();
        var mt=dt.getMonth()+1;
        mt=mt<10 ? '0'+mt :mt;
        var day=dt.getDate();
        day=day<10 ? '0'+day :day;
        var h=dt.getHours();
        h=h<10 ? '0'+h :h;
        var m=dt.getMinutes();
        m=m<10 ? '0'+m :m;
        var s=dt.getSeconds();
        s=s<10 ? '0'+s :s;
    
       var show=document.getElementsByClassName('showTime')[0];
        show.innerHTML='当前时间：'+y+'年'+mt+'月'+day+'日'+'-'+h+'时'+m+"分"+s+'秒';
     };
    t=setInterval(function(){
        showtime();
    },1000)
}