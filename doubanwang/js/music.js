$(document).ready(function() {
	var ipt = $('#txt');
	var list = $('#list');
		ipt.on("keyup", function() {
			var value = ipt.val();
			list.css("display", "block");
			var sc = $('<script>')
			if(value&&value!==''){
			sc.attr('src', 'https://api.douban.com/v2/music/search?q='+ value+'&callback=hunt&count=10');
			sc.attr('class','musicSearch')
			$('body').append(sc)
			}else{
				list.css("display", "none");
			}
			
		})
		$(document).on('click',function(){
			list.css("display", "none");
			
		})
	})
//https://m.douban.com/rexxar/api/v2/music/25927970/interests?count=4&order_by=hot&start=0&ck=&for_mobile=1