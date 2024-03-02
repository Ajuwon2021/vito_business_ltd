
document.addEventListener( "DOMContentLoaded", function ()
{
    // Initial filter value
    let currentFilter = "all";

    // Add click event listeners to filter buttons
    document.querySelectorAll( ".filter-btn" ).forEach( function ( btn )
    {
        btn.addEventListener( "click", function ()
        {
            // Set the current filter based on the data-filter attribute
            currentFilter = this.getAttribute( "data-filter" );

            // Call the filterCards function
            filterCards();
        } );
    } );

    // Function to filter cards based on the current filter
    function filterCards ()
    {
        document.querySelectorAll( ".filter-card" ).forEach( function ( card )
        {
            const cardCategory = card.getAttribute( "data-category" );

            // Show all cards if the filter is "all" or if the card matches the current filter
            if ( currentFilter === "all" || cardCategory === currentFilter )
            {
                card.style.display = "block";
            } else
            {
                card.style.display = "none";
            }
        } );
    }
} );


function myFunction ()
{
    var dots = document.getElementById( "dots" );
    var moreText = document.getElementById( "more" );
    var btnText = document.getElementById( "myBtn" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_1 ()
{
    var dots = document.getElementById( "dots_1" );
    var moreText = document.getElementById( "more_1" );
    var btnText = document.getElementById( "myBtn_1" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_2 ()
{
    var dots = document.getElementById( "dots_2" );
    var moreText = document.getElementById( "more_2" );
    var btnText = document.getElementById( "myBtn_2" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_3 ()
{
    var dots = document.getElementById( "dots_3" );
    var moreText = document.getElementById( "more_3" );
    var btnText = document.getElementById( "myBtn_3" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_4 ()
{
    var dots = document.getElementById( "dots_4" );
    var moreText = document.getElementById( "more_4" );
    var btnText = document.getElementById( "myBtn_4" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_5 ()
{
    var dots = document.getElementById( "dots_5" );
    var moreText = document.getElementById( "more_5" );
    var btnText = document.getElementById( "myBtn_5" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_6 ()
{
    var dots = document.getElementById( "dots_6" );
    var moreText = document.getElementById( "more_6" );
    var btnText = document.getElementById( "myBtn_6" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_7 ()
{
    var dots = document.getElementById( "dots_7" );
    var moreText = document.getElementById( "more_7" );
    var btnText = document.getElementById( "myBtn_7" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_8 ()
{
    var dots = document.getElementById( "dots_8" );
    var moreText = document.getElementById( "more_8" );
    var btnText = document.getElementById( "myBtn_8" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_9 ()
{
    var dots = document.getElementById( "dots_9" );
    var moreText = document.getElementById( "more_9" );
    var btnText = document.getElementById( "myBtn_9" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_10 ()
{
    var dots = document.getElementById( "dots_10" );
    var moreText = document.getElementById( "more_10" );
    var btnText = document.getElementById( "myBtn_10" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_11 ()
{
    var dots = document.getElementById( "dots_11" );
    var moreText = document.getElementById( "more_11" );
    var btnText = document.getElementById( "myBtn_11" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_12 ()
{
    var dots = document.getElementById( "dots_12" );
    var moreText = document.getElementById( "more_12" );
    var btnText = document.getElementById( "myBtn_12" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_13 ()
{
    var dots = document.getElementById( "dots_13" );
    var moreText = document.getElementById( "more_13" );
    var btnText = document.getElementById( "myBtn_13" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_14 ()
{
    var dots = document.getElementById( "dots_14" );
    var moreText = document.getElementById( "more_14" );
    var btnText = document.getElementById( "myBtn_14" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_15 ()
{
    var dots = document.getElementById( "dots_15" );
    var moreText = document.getElementById( "more_15" );
    var btnText = document.getElementById( "myBtn_15" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_16 ()
{
    var dots = document.getElementById( "dots_16" );
    var moreText = document.getElementById( "more_16" );
    var btnText = document.getElementById( "myBtn_16" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction_17 ()
{
    var dots = document.getElementById( "dots_17" );
    var moreText = document.getElementById( "more_17" );
    var btnText = document.getElementById( "myBtn_17" );

    if ( dots.style.display === "none" )
    {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else
    {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
