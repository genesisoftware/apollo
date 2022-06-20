require(["jquery"], function($) {
  $(document).ready(function() {
    $(".nav-sections .bss-megamenu li.dropdown > ul")
      .parents(".dropdown")
      .find(".level-top")
      .addClass("has-sub");

    $(".mestre-magento-table h3").click(function() {
      $(this)
        .parent()
        .find("table")
        .slideToggle("slow");
    });

    $("body").append(
      "<a href='javascript:;' class='scrolltop'><i class='fas fa-arrow-up'></i></a>"
    );
    $(".scrolltop").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
    $(".bss-megamenu .level-top span:first").click(function(event) {
      $target = $(this);
      href = $target.parent(".level-top").attr("href");
      window.location.href = href;
      return false;
    });
  });
});
