<?php
$tag = 'p';
$type = 'main';

if (is_front_page() || is_home() || is_page('home')) {
  $title = "月うさぎBlog";
} elseif (get_post_type('works')) {
  $title = "Works list";
} elseif (is_single()) {
  switch (get_post_type()) {
    case 'post':
      $title = "月うさぎBlog";
      break;

    case 'works':
      $title = "Works";
      break;
  }
};

echo usa_set_heading_linear_show($tag, $title, $type);
