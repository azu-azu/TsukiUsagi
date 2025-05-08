<?php
  if (get_post_type() === 'post') {
    $title = "記事一覧";
  } elseif (get_post_type() === 'works') {
    $title = "Works一覧";
  }

  echo usa_set_heading_linear_show('h2', $title, 'list');
