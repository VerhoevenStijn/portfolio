jQuery(document).ready(function(){
    $(".targetDiv").hide();
});


jQuery(function(){
   jQuery('#showall').click(function(){
      jQuery('.targetDiv').show('.cnt');
   });
   jQuery('#hideall').click(function() {
      jQuery('.targetDiv').hide('.cnt');
   });

   jQuery('.showSingle').click(function(){
      jQuery('.targetDiv').hide('.cnt');
      jQuery('#div'+$(this).attr('target')).slideToggle();

   });
});
