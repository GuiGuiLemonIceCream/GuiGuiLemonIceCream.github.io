window.onload = function(){
	banner();
	text();
	list();
	click();
	function click(){
		var btn = document.querySelector("nav>span");
		var num = true;
		var list = document.querySelector(".list");
		btn.onclick = function(){
			if (num) {
				list.style.transform = "translateY(0rem)";
				num=false;
			} else {
				list.style.transform = "translateY(-13.32rem)";
				num=true;
			}
		}
	}
//	function banner(){
//		var ban = document.querySelector(".banner>ul");
//		var num = 1;
//		var timer = null;
//		var onoff = true;
//		ban.innerHTML += ban.innerHTML;
//		timer = setInterval(move,2000);
//		function move(){
//			if (num==6) {
//				num=1;
//				ban.style.transition = null;
//				ban.style.left =  "0rem";
//				move()
//				return;
//			}
//			if (onoff) {
//				onoff = !onoff;
//				ban.style.left = -7.5*num + "rem";
//				ban.style.transition = "1s";
//				num++;
//				setTimeout(function () {
//					onoff = !onoff;
//				},2000)
//			}
//		}
//	}
	function text(){
		var data = {
			cont:[
				{text:"vivo《梦幻手游》2017全民PK争霸...",time:"06/21"},
				{text:"倩女手游东北服预约！同城专享福利提前...",time:"06/19"},
				{text:"全民减负福利升级《光明大陆》1.8版本...",time:"06/16"},
				{text:"仲夏之梦浪漫开启《天下》手游摘星楼...",time:"06/14"},
				{text:"新服即将开启！《大唐无双》手游新版...",time:"06/09"},
				{text:"三石精选-将复杂的人生用一张纸打包...",time:"05/17"}
			]
		}
		var txt = document.getElementsByClassName("text")[0];
		var ul = txt.getElementsByTagName("ul")[0];
		for (var i = 0;i<6;i++) {
			ul.innerHTML += "<li>"+
								"<a href='javascript:;'>"+data.cont[i].text+"</a>"+
								"<span>"+data.cont[i].time+"</span>"+
							"</li>";
		}
	}
	function list(){
		var data = {
			cont:[
				{pic:"img/144.png",tit:"迷雾世界",time:"3-23 全平台公测"},
				{pic:"img/144 (1).png",tit:"狩猎纪元",time:"4-18 集结首测"},
				{pic:"img/144 (2).png",tit:"魂之轨迹",time:"6-15 11：00 计费删档测试"},
				{pic:"img/144 (3).png",tit:"光明大陆",time:"3-31 ios公测"},
				{pic:"img/144 (4).png",tit:"小汪汪",time:"6-16 10:00 官网测试"},
				{pic:"img/144 (5).png",tit:"三少爷的剑",time:"5-4 全平台公测"}
			]
		}
		var bot = document.getElementsByClassName("bot_list")[0];
		var ol = bot.getElementsByTagName("ul")[0];
		for (var i = 0;i<6;i++) {
			ol.innerHTML += '<li>'+
								'<a href="javascript:;">'+
									'<img src="'+data.cont[i].pic+'"/>'+
									'<span>手机游戏</span>'+
									'<strong>'+data.cont[i].tit+'</strong>'+
									'<em>'+data.cont[i].time+'</em>'+
								'</a>'+
							'</li>';
		}
	}
	function banner(){
		var pic = document.getElementsByClassName('banner')[0];
		var list = pic.getElementsByTagName('ul')[0];
		var lis = pic.getElementsByTagName('li');
		var timer = 0;
		var num = 0;
		var w = view().w;
		var now = 0;
		
		
		var startx = 0;
		var x = 0;
		
		auto() //轮播图定时器
		function auto(){
			timer = setInterval(function(){
				num++;
				num = num%lis.length;
				tab()
			},2000)
		}
		
		
		
		bind(list,'touchstart',start);
		bind(list,'touchmove',move);
		bind(list,'touchend',end);
		
		function start(ev){
			clearInterval(timer);
			ev = ev.changedTouches[0];
			list.style.transition = 'none'
			startx = ev.pageX;
			x = now;
		}
		function move(ev){
			ev = ev.changedTouches[0];
			var disx = ev.pageX - startx;
			now = x + disx;
			list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
		}
		function end(){
			
			num = -Math.round(now/w);
			now = -num*w;
			list.style.transition = '.5s';
			list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
			if(num>=lis.length){
				num = lis.length-1;
			}
			if(num<=0){
				num=0;
			}
			tab();
			auto()
		}
		
		function tab(){
			now = -num*w;
			list.style.transition = '.5s';
			list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
			
		}
	}
}