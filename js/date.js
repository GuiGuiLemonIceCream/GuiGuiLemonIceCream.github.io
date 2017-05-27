(function($){
	var link = $('<link rel="stylesheet" type="text/css" href="css/date.css"/>');
	$("head").append(link);
	var opaction = {
		week:["日","一","二","三","四","五","六"],
		dir:["<",">"]
	}
	var setting = {};
	var parent = null;
	var num = 0;
	function rili(obj){
		obj = obj||{};
		setting = $.extend(opaction,obj);
		parent = this;
		createBox();
		time();
		lr();
		createLi();
	}
	function createBox(){
		var box =   '<div class="frame">'
						+'<div class="timestamp">'
							+'<p class="time"></p>'
							+'<p class="date"></p>'
						+'</div>'
						+'<div class="operation">'
							+'<div class="top">'
								+'<p class="yearmonth"></p>'
								+'<p class="flip">'
									+'<span class="left">'+setting.dir[0]+'</span>'
									+'<span class="right">'+setting.dir[1]+'</span>'
								+'</p>'
							+'</div>'
							+'<ul class="week">';
								for (var i = 0;i<setting.week.length;i++) {
									box +=  "<li>"+setting.week[i]+"</li>";
								}
								console.log(setting.week)
							box +='</ul>'
						+'</div>'
						+'<ul class="day">'
							
						+'</ul>'
					+'</div>';
		parent.html(box);
	}
	function createLi(){
		var list = $(".day");
		list.html("")
		//
		var date = new Date();
		date.setMonth(date.getMonth()+1+num);
		date.setDate(0);
		var nowday = date.getDate();
		//
		var date = new Date();
		date.setMonth(date.getMonth()+num);
		
		var ym = $(".yearmonth");
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var str3 = y+"年"+toTime(m)+"月";
		ym.html(str3)
		
		
		date.setDate(1);
		var qd = date.getDay();
		//
		var date = new Date();
		date.setMonth(date.getMonth()+num);
		date.setDate(0);
		var preday = date.getDate();
		//上月
		console.log(preday)
		for(var i=(preday-qd);i<preday;i++){
			var li = $('<li>'+(i+1)+'</li>');
			li.addClass('not');
			list.append(li);
			
		}
		//当前月
		var date = new Date();
		var nd = date.getDate();
		for (var i = 0;i<nowday;i++) {
			var li = $('<li>'+(i+1)+'</li>');
			if (i == nd-1&&num==0) {
				li.addClass("checked")
			}
			list.append(li);
		}
		//下月
		var longs = 42;
		var yet = list.find("li").length;
		for (var i = 0;i<(42-yet);i++) {
			var li = $("<li>"+(i+1)+"</li>");
			li.addClass("not");
			list.append(li);
		}
	}
	function time(){
		changetime();
		setInterval(changetime,1000)
		function changetime(){
			var date = new Date();
			var timeP = $(".time");
			var dateP = $(".date");
			var y = date.getFullYear();
			var mon = date.getMonth()+1;
			var d = date.getDate();
			var w = date.getDay();
			var str2 = y + "/" + toTime(mon) + "/" + toTime(d) + "  星期  " + setting.week[w];
			dateP.html(str2);
			var s = date.getSeconds();
			var m = date.getMinutes();
			var h = date.getHours();
			var str1 = toTime(h) + ":" + toTime(m) + ":" + toTime(s);
			timeP.html(str1);
		}
		
	}
	function lr(){
		var l = $(".left");
		l.click(function(){
			num--;
			createLi();
		})
		var r = $(".right");
		r.click(function(){
			num++;
			createLi();
		})
	}
	function toTime(n){
		return n>=10?""+n:"0"+n;
	}
	$.fn.extend({
		rili:rili
	})
})(jQuery)
