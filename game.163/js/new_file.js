$(function(){
//	$(".list_content").css("height","875px");
	list();
	pic();
	more();
	banner();
	botgame();
	function list(){
		var onoff = true;
		$(".top_list").click(function(){
			if (onoff) {
				$(this).find("span").css("display","none");
				$(this).find("i").css("background","url(img/topBar_1_z_e7632fe.png) -34px 0");
				$(this).css("background","#282b2d");
				$(".list_content").slideDown(300);
				onoff = false;
			} else{
				$(this).find("span").css("display","block");
				$(this).find("i").css("background","");
				$(this).css("background","");
				$(".list_content").slideUp(300);
				onoff = true;
			}
		});
		$(".list_btn").click(function(){
			if (onoff) {
				$(".top_list").find("span").css("display","none");
				$(".top_list").find("i").css("background","url(img/topBar_1_z_e7632fe.png) -34px 0");
				$(".top_list").css("background","#282b2d");
				$(".list_content").slideDown(300);
				onoff = false;
			} else{
				$(".top_list").find("span").css("display","block");
				$(".top_list").find("i").css("background","");
				$(".top_list").css("background","");
				$(".list_content").slideUp(300);
				onoff = true;
			}
		});
		$(".list_btn").hover(function(){
			$(this).find("i").css("background","url(img/topBar_1_z_e7632fe.png) 0 -48px");
		},function(){
			$(this).find("i").css("background","");
		});
		$(".list_content").find("a").hover(function(){
			$(this).css("color","#fff");
		},function(){
			$(this).css("color","");
		});
		$(".top_nav").find("a").hover(function(){
			$(this).css("color","#dd1136");
		},function(){
			$(this).css("color","");
		});
	}
	
	
	function pic(){
		var spic = ["url(img/pic_pic2.jpg)","url(img/pic_pic5.jpg)","url(img/pic_pic3.jpg)","url(img/pic_pic1.jpg)","url(img/pic_pic4.jpg)"];
		var li = document.querySelectorAll(".pic>li");
		$(".pic_pic").find("a").css("background","url(img/pic_pic2.jpg)");
		$(".pic").find("li").eq(0).find("i").css("display","block");
		$(".pic").find("li").eq(0).find("a").css({"background-color":"#080909","border-color":"#cf0f32"});
		$(".pic").find("li").eq(0).find("a").find("em").find("strong").css("color","#fff");
		$(".pic").find("li").each(function(i){
			$(".pic").find("li").find("a").eq(i).click(function(){
				$(".pic").find("li").find("a").css({"background-color":"","border-color":""});
				$(".pic").find("li").find("a").find("i").css("display","");
				$(".pic").find("li").find("a").find("em").find("strong").css("color","");
				$(this).find("i").css("display","block");
				$(this).css({"background-color":"#080909","border-color":"#cf0f32"});
				$(this).find("em").find("strong").css("color","#fff");
				$(".pic_pic").find("a").css("background",spic[i]);
			})
		})
	}
	function more(){
		var onoff = true;
		$(".more>a").click(function(){
			if (onoff) {
				$(".bottom_list").css("height","760px");
				$(this).html("收起");
				onoff = false;
			} else{
				$(".bottom_list").css("height","");
				$(this).html("查看更多");
				onoff = true;
			}
		})
	}
	function banner(){
		var ban = document.getElementsByTagName("header")[0];
		var bpic = ["url(img/banner1.jpg)","url(img/banner2.jpg)","url(img/banner3.jpg)","url(img/banner4.jpg)","url(img/banner5.jpg)"];
		var lis = document.querySelectorAll(".banner>ul>li");
		var timer = null;
		var num = 0;
		ban.style.transition = "1s";
		ban.style.background = bpic[num];
		lis[num].style.border = "3px solid #fff";
		lis[num].style.background = "#f00";
		timer = setInterval(picmove,4000);
		var btn1 = document.getElementsByClassName("left")[0];
		var btn2 = document.getElementsByClassName("right")[0];
		btn1.onclick = function(){
			clearInterval(timer);
			num--;
			if (num==-1) {
				num=4;
			}
			ban.style.background = bpic[num];
			timer = setInterval(picmove,4000);
			$(".banner>ul>li").css({"border":"","background":""})
			$(".banner>ul>li").eq(num).css({"border":"3px solid #fff","background":"#f00"});
			console.log(111)
		}
		btn2.onclick = function(){
			clearInterval(timer);
			num++;
			if (num==5) {
				num=0;
			}
			ban.style.background = bpic[num];
			$(".banner>ul>li").css({"border":"","background":""})
			$(".banner>ul>li").eq(num).css({"border":"3px solid #fff","background":"#f00"});
			timer = setInterval(picmove,4000);
		}
		for (var i = 0;i<lis.length;i++) {
			lis[i].index = i;
			lis[i].onclick = function(){
				clearInterval(timer);
				ban.style.background = bpic[this.index];
				num = this.index;
				$(".banner>ul>li").css({"border":"","background":""})
				this.style.border = "3px solid #fff";
				this.style.background = "#f00";
				console.log(this.index)
				timer = setInterval(picmove,4000);
			}
		}
		function picmove(){
			num++;
			if (num==5) {
				num=0;
			}
			ban.style.background = bpic[num];
			$(".banner>ul>li").css({"border":"","background":""})
			$(".banner>ul>li").eq(num).css({"border":"3px solid #fff","background":"#f00"});
		}
	}
	function botgame(){	
		var txt = {
			tit1:[
				{one:"镇魔曲手游",two:"“原汁原味”的MMO乐趣，满足你对顶级MMO的所有幻想。",three:"img/11.jpg",four:"url(img/1.png)"},
				{one:"全新大话2口袋版",two:"手机上的大话2，全平台开放性测试火热开启！多端互通，经典还原！",three:"img/22.jpg",four:"url(img/4.png)"},
				{one:"《阴阳师》",two:"《阴阳师》六一儿童节活动上线。副本挑战，掉落爱的糖果；福利多多，惊喜不",three:"img/33.jpg",four:"url(img/6.jpg)"},
				{one:"《格罗亚传奇》",two:"网易高自由魔幻MMO手游《格罗亚传奇》告别无尽日常，四职业并肩作战。5月31日",three:"img/44.jpg",four:"url(img/2.png)"},
				{one:"《大话西游》手游",two:"欢庆端午，见闻录珍稀神兽卡大放送",three:"img/55.jpg",four:"url(img/3.png)"},
				{one:"《光明大陆 》",two:"3D魔幻史诗手游《光明大陆》，全新版本“阵营对决 光影之战”全面上线",three:"img/66.jpg",four:"url(img/5.png)"},
			],
			tit2:[
				{one:"《潮人篮球》手游",two:"网易首款篮球竞技手游，主打3V3实时对抗，超真实打击感让你嗨爆球场！",three:"img/aa.jpg",four:"url(img/aaa.jpg)"},
				{one:"《天启联盟》",two:"暗夜无边，并肩而战！网易团队动作射击手游《天启联盟》集结开测！",three:"img/ee.jpg",four:"url(img/eee.png)"},
				{one:"《倩女幽魂》手游",two:"新一代国民玄幻手游，“三生有幸遇到你”资料片精彩开启，新主角剧情新职业",three:"img/cc.jpg",four:"url(img/ccc.jpg)"},
				{one:"《大富翁9》",two:"国民经典游戏《大富翁9》即将迎来一周岁生日，仙剑角色景天也强势登场！",three:"img/dd.jpg",four:"url(img/ddd.jpg)"},
				{one:"《天下》手游",two:"天下热爱者告白季开启，地表最强势力人气战今日开战，人气皇冠限量头饰参赛就",three:"img/ff.jpg",four:"url(img/fff.png)"},
				{one:"《秘宝猎人》",two:"回归游戏本质，告别重度乏味，打造充满热血和乐趣的冒险体验！",three:"img/bb.jpg",four:"url(img/bbb.png)"},
			]
		}
		$(".hotgame_pic>i").each(function(i){
			$(".explain").eq(i).html(txt.tit1[i].one);
			$(".explain_txt").eq(i).html(txt.tit1[i].two);
			$(".hotgame_pic>i").eq(i).css("background",txt.tit1[i].four);
			$(".hotgame_pic>img").eq(i).attr("src",txt.tit1[i].three);
		})
		var btn = $(".hotgame_top>a")[0];
		var num = 0;
		btn.onclick = function(){
			num++;
			$("article li").css("transform","scale(0)");
			setTimeout(function(){
				$("article li").css("transform","scale(1)");
				if (num==1) {
					$(".hotgame_pic>i").each(function(i){
						$(".explain").eq(i).html(txt.tit2[i].one);
						$(".explain_txt").eq(i).html(txt.tit2[i].two);
						$(".hotgame_pic>i").eq(i).css("background",txt.tit2[i].four);
						$(".hotgame_pic>img").eq(i).attr("src",txt.tit2[i].three);
					})
				} else{
					$(".hotgame_pic>i").each(function(i){
						$(".explain").eq(i).html(txt.tit1[i].one);
						$(".explain_txt").eq(i).html(txt.tit1[i].two);
						$(".hotgame_pic>i").eq(i).css("background",txt.tit1[i].four);
						$(".hotgame_pic>img").eq(i).attr("src",txt.tit1[i].three);
					})
					num=0;
				}
			
			},700)
			console.log(num)
			
//			if (num==1) {
//				$(".hotgame_pic>i").each(function(i){
//					$(".explain").eq(i).html(txt.tit2[i].one);
//					$(".explain_txt").eq(i).html(txt.tit2[i].two);
//					$(".hotgame_pic>i").eq(i).css("background",txt.tit2[i].four);
//					$(".hotgame_pic>img").eq(i).attr("src",txt.tit2[i].three);
//				})
//			} else{
//				$(".hotgame_pic>i").each(function(i){
//					$(".explain").eq(i).html(txt.tit1[i].one);
//					$(".explain_txt").eq(i).html(txt.tit1[i].two);
//					$(".hotgame_pic>i").eq(i).css("background",txt.tit1[i].four);
//					$(".hotgame_pic>img").eq(i).attr("src",txt.tit1[i].three);
//				})
//				num=0;
//			}
		}
	}
})