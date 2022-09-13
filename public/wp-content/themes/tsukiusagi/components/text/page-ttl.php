<?php
$tag = 'p';
$type = 'page';

if (is_archive()) {
  switch (get_post_type()) {
    case 'post':
      $title = "Blog list";
      break;

    case 'works':
      $title = "Works list";
      break;
  }
} elseif (is_single()) {
  switch (get_post_type()) {
    case 'post':
      $title = "月うさぎBlog";
      $type = "single";
      break;

    case 'works':
      $title = "Works";
      break;
  }
};

echo usa_set_heading_linear_show($tag, $title, $type);
