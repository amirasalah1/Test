/* ==========================================================================

    Project: Project Template Test
    Author: XHTMLized.com
    Last updated: Fri May 09 2014 20:44:50

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.feature1();
      // App.feature2();
    },

    /**
     * Custom feature 1
     */
    feature1: function() {
      $(".openimg").colorbox({
        rel: 'group2',
        transition: "fade"
      });
    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
