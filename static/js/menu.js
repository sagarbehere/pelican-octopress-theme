function initializeMenu() {
  var posOpts = {
    position: {
      my: "left top",
      at: "center bottom"
    }
  };

  jQuery('.main-navigation').menu(posOpts);
  var childLists = jQuery('.main-navigation > li.ui-menu-item > ul');
  jQuery.each(childLists, function(index, childList) {
    jQuery(childList)
      .parent('li.ui-menu-item')
      .addClass('ui-menu-parent');
  });
}

$('document').ready(function() {
  initializeMenu();
});
