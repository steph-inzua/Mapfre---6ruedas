$( document ).ready( function(){
	$( ".formularios" )
        .find( "input[type=text], input[type=tel], input[type=tel]" )
        .on( "keypress", function( evt ) {
            var $c = $(evt.currentTarget);
            var caracter, anterior, futuro, patron;
            var chc = evt.charCode;
            if ( chc > 0 ) {
                caracter = String.fromCharCode( chc );
                anterior = $c.val();
                patron = new RegExp( $c.data("restriccion") );
                futuro = anterior + caracter;
                if ( patron.test( futuro ) != true ) {
                    evt.preventDefault();
                }
            }
        });
});

 $( ".formularios .tipo-documento" ).on( "change", function(evt) {
        var tipo = $( this ).val();
        console.debug( tipo );

        switch ( tipo ) {
            case "DNI":
                $( this )
                    .parents( ".formulario" )
                    .find( ".nombre, .apellido" )
                    .hide();
                break;
            case "CE":
            case "RUC":
            default:
                $( this )
                    .parents( ".formulario" )
                    .find( ".nombre, .apellido" )
                    .show();
    }
})
