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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnZW5lcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uKCl7XHJcblx0JCggXCIuZm9ybXVsYXJpb3NcIiApXHJcbiAgICAgICAgLmZpbmQoIFwiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPXRlbF1cIiApXHJcbiAgICAgICAgLm9uKCBcImtleXByZXNzXCIsIGZ1bmN0aW9uKCBldnQgKSB7XHJcbiAgICAgICAgICAgIHZhciAkYyA9ICQoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICB2YXIgY2FyYWN0ZXIsIGFudGVyaW9yLCBmdXR1cm8sIHBhdHJvbjtcclxuICAgICAgICAgICAgdmFyIGNoYyA9IGV2dC5jaGFyQ29kZTtcclxuICAgICAgICAgICAgaWYgKCBjaGMgPiAwICkge1xyXG4gICAgICAgICAgICAgICAgY2FyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCBjaGMgKTtcclxuICAgICAgICAgICAgICAgIGFudGVyaW9yID0gJGMudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBwYXRyb24gPSBuZXcgUmVnRXhwKCAkYy5kYXRhKFwicmVzdHJpY2Npb25cIikgKTtcclxuICAgICAgICAgICAgICAgIGZ1dHVybyA9IGFudGVyaW9yICsgY2FyYWN0ZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHBhdHJvbi50ZXN0KCBmdXR1cm8gKSAhPSB0cnVlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn0pO1xyXG5cclxuICQoIFwiLmZvcm11bGFyaW9zIC50aXBvLWRvY3VtZW50b1wiICkub24oIFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgIHZhciB0aXBvID0gJCggdGhpcyApLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoIHRpcG8gKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICggdGlwbyApIHtcclxuICAgICAgICAgICAgY2FzZSBcIkROSVwiOlxyXG4gICAgICAgICAgICAgICAgJCggdGhpcyApXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudHMoIFwiLmZvcm11bGFyaW9cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoIFwiLm5vbWJyZSwgLmFwZWxsaWRvXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNFXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJSVUNcIjpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICQoIHRoaXMgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5wYXJlbnRzKCBcIi5mb3JtdWxhcmlvXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCBcIi5ub21icmUsIC5hcGVsbGlkb1wiIClcclxuICAgICAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgfVxyXG59KVxyXG4iXSwiZmlsZSI6ImdlbmVyYWwuanMifQ==
