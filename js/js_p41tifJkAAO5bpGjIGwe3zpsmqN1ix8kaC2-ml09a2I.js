/**
 * @file
 * Contains logic for language menu switcher.
 */

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.ucbLanguageSwitcher = {
    attach() {
      var masterPageTree = drupalSettings.multilingualPage.masterTree;
      var $languageMenuLinks = $('ul.multilanguage-nav li a');
      if (typeof masterPageTree !== 'undefined') {
        if ($languageMenuLinks.length) {
          $languageMenuLinks.each(function () {
            var drupalLinkPath = $(this).attr('data-drupal-link-system-path');
            if (drupalLinkPath) {
              var menuLinkNodeId = drupalLinkPath.length ? drupalLinkPath.split('/')[1] : '';
              var s = Object.values(masterPageTree).find(function (e) {
                return e === menuLinkNodeId;
              });
              if (s) {
                $(this).addClass('is-active');
              }
            }
          });
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Adds the active class to active links, for proper top bar rendering.
 *
 */
(function ($, Drupal) {

  /**
   * Adds the "active" class to top bar <li> elements with active child links.
   */
  Drupal.behaviors.foundationTopBarActive = {
    attach: function (context, settings) {
      var $active_links = $(context).find('.top-bar .menu-item > a.is-active');
      if ($active_links.length) {
        $active_links.once('foundationTopBarActive').each(function() {
          $(this).parent().addClass('active');
        });
      }
    }
  };

})(jQuery, Drupal);
;
