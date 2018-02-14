$( document ).ready( function(){
	var tl = new TimelineMax();
	tl.add( TweenLite.from( "#letra1", 1, { alpha: 0} ));
	tl.add( TweenLite.from( "#letra2", 1, { alpha: 0, y:"-30"}));
	tl.add( TweenLite.from( "#letra3", 1, { alpha: 0}), "-=0.5" );
	tl.add( TweenLite.from( "#letra4", 1, { alpha: 0}), "-=0.5" );
	tl.add( TweenLite.from( "#letra5", 1, { alpha: 0}), "-=0.5" );
	tl.add( TweenLite.from( "#letra6", 1, { alpha: 0}), "-=0.5" );
});

//scroll down
$( "#tyc" ).hide( "fast" );
	$( "#pie .enlace.terminos").on( "click", function( evt ){
		$( "#tyc" ).toggle( "fast", function(){
			//$( window ).scrollTo( $( window ).innerHeight() );
		});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbigpe1xyXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiI2xldHJhMVwiLCAxLCB7IGFscGhhOiAwfSApKTtcclxuXHR0bC5hZGQoIFR3ZWVuTGl0ZS5mcm9tKCBcIiNsZXRyYTJcIiwgMSwgeyBhbHBoYTogMCwgeTpcIi0zMFwifSkpO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiI2xldHJhM1wiLCAxLCB7IGFscGhhOiAwfSksIFwiLT0wLjVcIiApO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiI2xldHJhNFwiLCAxLCB7IGFscGhhOiAwfSksIFwiLT0wLjVcIiApO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiI2xldHJhNVwiLCAxLCB7IGFscGhhOiAwfSksIFwiLT0wLjVcIiApO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiI2xldHJhNlwiLCAxLCB7IGFscGhhOiAwfSksIFwiLT0wLjVcIiApO1xyXG59KTtcclxuXHJcbi8vc2Nyb2xsIGRvd25cclxuJCggXCIjdHljXCIgKS5oaWRlKCBcImZhc3RcIiApO1xyXG5cdCQoIFwiI3BpZSAuZW5sYWNlLnRlcm1pbm9zXCIpLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCBldnQgKXtcclxuXHRcdCQoIFwiI3R5Y1wiICkudG9nZ2xlKCBcImZhc3RcIiwgZnVuY3Rpb24oKXtcclxuXHRcdFx0Ly8kKCB3aW5kb3cgKS5zY3JvbGxUbyggJCggd2luZG93ICkuaW5uZXJIZWlnaHQoKSApO1xyXG5cdFx0fSk7XHJcbn0pOyJdLCJmaWxlIjoiaW5kZXguanMifQ==
