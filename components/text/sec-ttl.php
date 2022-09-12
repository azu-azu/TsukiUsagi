<?php
  if (is_404()) {
    $title = "<span>お探しのページが</span><span>見つかりません</span><span>でした</span>";
    echo usa_set_heading_linear_show('h1', $title, 'sec');

  } elseif (get_post_type() === 'works') {
    $title = "WordPressテーマ開発";
    echo usa_set_heading_linear_show('h2', $title, 'sec');
  }
?>