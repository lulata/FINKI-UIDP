$(document).ready(function(){
	var clix = 1;
	var first, second;
	var totalClix=0, totalPoints=0;
	
	$('#content_container').children('div').find('p').each(function(){
		if(($(this).text())%2 == 0){
			$(this).parents('.live_tile').css('border','2px solid red');
		}
	});

	$('#content_container').children('div').hover(function(){
		$(this).toggleClass('live_tile_hover');
	},
	function(){
		$(this).toggleClass('live_tile_hover');
	});

	$('#content_container').children('div').click(function(){
		
		if(totalPoints==8){

			$('#per').text(parseFloat((totalPoints/totalClix)*100) + '%');
			$('#perc').css('display','inline');
			alert("F i n i t o");
			var con = confirm("Do you wanna play new game?");
			if (con) {
				location.reload();
			};
			return;
		}

		if(clix==3){
			$(first).find('p').toggle();
			$(second).find('p').toggle();
			clix=1;
			first=null;
			second=null;
		}
		
		if(clix==1){
			first = $(this);
			$(this).find('p').toggle();
			//$(this).off('click');
		}

		if(clix==2){
			second = $(this);
			$(this).find('p').toggle();
		
			if( (first.find('span').attr('title')) == (second.find('span').attr('title')) ){
				$(first).css('background','gray');
				$(first).css('pointer-events','none');
				$(second).css('background','gray');
				$(second).css('pointer-events','none');
				clix=1;
				first=null;
				second=null;
				totalPoints++;
				$('#totalPoints').text(totalPoints);
				totalClix++;
				$('#totalClix').text(totalClix);
			}else{
				clix++;
				totalClix++;
				$('#totalClix').text(totalClix);
			}

		}else{	
			clix++; 
			totalClix++;
			$('#totalClix').text(totalClix);
		}
		
	});
	// END click() func

}); // END ready() func