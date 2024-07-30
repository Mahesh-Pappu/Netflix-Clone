$(document).ready(function() {
    var tabItem = $('.tab-item');
    var tabContentItem = $('.tab-content-item');

    tabItem.click(function() {
        // Remove active class from all tab items and tab content items
        $('.tab-item').removeClass('tab-border');
        tabContentItem.removeClass('show');

        // Add active class to the clicked tab item
        $(this).addClass('tab-border');

        // Get the id of the associated tab content item
        var tabContentId = $(this).attr('id') + '-content';

        // Add the show class to the associated tab content item
        $('#' + tabContentId).addClass('show');
    });
});
