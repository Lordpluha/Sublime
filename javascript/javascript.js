jQuery(document).ready(function($) {

	// Настроики scrollbar-а на всей странице
	$(window).on("load",function(){
	    $(".content").mCustomScrollbar({
	    	autoHideScrollbar: true,
	    	keyboard:{
	    		enable: true
	    	},
	    	live: true,
	    	callbacks: true,
	    	callbacks:{
			    onInit:function(){
			      console.log("Scrollbars was initialized successfully");
			    },

      			onCreate: function(){
      				console.log("Plugin markup generated");
      			}
			},
	    });
	});

	// Another code
	

	
});