$(function() {
  $( ".sortable-list" ).sortable ({
  	axis: "y",
  	// start: function(event, ui) {
  	// 	// start = $(ui.item).index();
  	// 	// console.log(start)
  	// },
  	update: function(event, ui) {
      // item = $(ui.item).attr('id');
      // // console.log(item);
      // end = $(ui.item).index();
      // console.log(end);

      var sorted = $('.sortable-list').sortable("toArray");
      console.log(sorted);
      $.post("/", {order: sorted} )
    }
  });
  $( ".sortable-list" ).disableSelection();


  // $( "#submit-new").on('submit', function(e) {
  // 	e.preventDefault;
  	
  // 	console.log("worked");
  // })
});
