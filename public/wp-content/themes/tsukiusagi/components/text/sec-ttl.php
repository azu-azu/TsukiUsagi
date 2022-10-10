<?php
if (is_404()) {
  $title = "<span>お探しのページが</span><span>見つかりません</span><span>でした</span>";
  $tag = 'h1';
} elseif (get_post_type() === 'works') {
  $title = "WordPressテーマ開発";
  $tag = 'h2';
}
echo usa_set_heading_linear_show($tag, $title, 'sec');
