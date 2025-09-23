<article class="c-offset-title">
  <?php
  if (is_front_page() || is_home() || is_page('home') || get_post_type() === 'works') {
    echo '<p data-splitting>ＴｓｕｋｉＵｓａｇｉ</p>';
  } else {
    echo '<p data-splitting>ＴｓｕｋｉＵｓａｇｉ</p>';
  }
  ?>
</article>