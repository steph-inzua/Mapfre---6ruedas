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