( function ( $ )
{
	var $container = $( '.portfolio' ),
		colWidth = function ()
		{
			var w = $container.width(),
				columnNum = 1,
				columnWidth = 50;
			if ( w > 1200 )
			{
				columnNum = 5;
			}
			else if ( w > 900 )
			{
				columnNum = 3;
			}
			else if ( w > 600 )
			{
				columnNum = 2;
			}
			else if ( w > 300 )
			{
				columnNum = 1;
			}
			columnWidth = Math.floor( w / columnNum );
			$container.find( '.pitem' ).each( function ()
			{
				var $item = $( this ),
					multiplier_w = $item.attr( 'class' ).match( /item-w(\d)/ ),
					multiplier_h = $item.attr( 'class' ).match( /item-h(\d)/ ),
					width = multiplier_w ? columnWidth * multiplier_w[ 1 ] - 0 : columnWidth - 5,
					height = multiplier_h ? columnWidth * multiplier_h[ 1 ] * 1 - 5 : columnWidth * 0.5 - 5;
				$item.css( {
					width: width,
					height: height
				} );
			} );
			return columnWidth;
		}
	function refreshWaypoints ()
	{
		setTimeout( function ()
		{
		}, 3000 );
	}
	$( 'nav.portfolio-filter ul a' ).on( 'click', function ()
	{
		var selector = $( this ).attr( 'data-filter' );
		$container.isotope( { filter: selector }, refreshWaypoints() );
		$( 'nav.portfolio-filter ul a' ).removeClass( 'active' );
		$( this ).addClass( 'active' );
		return false;
	} );
	function setPortfolio ()
	{
		setColumns();
		$container.isotope( 'reLayout' );
	}
	$container.imagesLoaded( function ()
	{
		$container.isotope();
	} );
	isotope = function ()
	{
		$container.isotope( {
			resizable: true,
			itemSelector: '.pitem',
			layoutMode: 'masonry',
			gutter: 10,
			masonry: {
				columnWidth: colWidth(),
				gutterWidth: 0
			}
		} );
	};
	isotope();
	$( window ).smartresize( isotope );
}( jQuery ) );

// Gallery Filter
var Container = $( '.container' );
Container.imagesLoaded( function ()
{
	var portfolio = $( '.gallery-menu' );
	portfolio.on( 'click', 'button', function ()
	{
		$( this ).addClass( 'active' ).siblings().removeClass( 'active' );
		var filterValue = $( this ).attr( 'data-filter' );
		$grid.isotope( {
			filter: filterValue
		} );
	} );
	var $grid = $( '.gallery-list' ).isotope( {
		itemSelector: '.gallery-grid'
	} );

} );

document.addEventListener( 'DOMContentLoaded', function ()
{
	// Initial display of all projects
	filterSelection( 'all_projects' );
} );

document.addEventListener( 'DOMContentLoaded', function ()
{
	// Initial display of all projects
	filterSelection( 'all_projects' );
} );

document.addEventListener( 'DOMContentLoaded', function ()
{
	// Initial display of all projects
	filterSelection( 'all_projects' );
} );

document.addEventListener( 'DOMContentLoaded', function ()
{
	// Initial display of all projects
	filterSelection( 'all_projects' );
} );

function filterSelection ( category )
{
	var projects = document.getElementsByClassName( 'portfolio_gallery' );
	var buttons = document.getElementsByClassName( 'btn' );

	// Remove 'active' class and background from all buttons
	for ( var i = 0; i < buttons.length; i++ )
	{
		buttons[ i ].classList.remove( 'active' );
	}

	for ( var i = 0; i < projects.length; i++ )
	{
		var project = projects[ i ];

		if ( category === 'all_projects' || project.classList.contains( category ) )
		{
			project.style.display = 'block';
		} else
		{
			project.style.display = 'none';
		}
	}

	// Add 'active' class and background to the clicked button
	var activeButton = document.querySelector( '.btn[data-filter="' + category + '"]' );
	if ( activeButton )
	{
		activeButton.classList.add( 'active' );
	}
}