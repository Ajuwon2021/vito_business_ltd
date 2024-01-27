
         function storeVisitorName ()
         {
            // Get the value entered by the visitor in the "name" field
            var firstName = document.getElementsByName( 'name' )[ 0 ].value;

            // Store the visitor's name in localStorage
            localStorage.setItem( 'visitorName', firstName );
         }
      
// Retrieve visitor's name from localStorage
var visitorName = localStorage.getItem( 'visitorName' );

// Update the span with the visitor's name
document.getElementById( 'visitorName' ).innerText = visitorName;