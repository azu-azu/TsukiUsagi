<?php
$tag = 'p';
$type = 'main';
$url = '';


if (get_post_type() === 'works') {
  $url = home_url('/') . 'works';
  if (is_archive()) {
    $title = "Works list";
  } elseif (is_single()) {
    $title = "Works";
  }
} else {
  $url = home_url('/') . 'blog';
  $title = "TsukiUsagiBlog";
}

echo usa_set_heading_linear_show($tag, $title, $type, $url);
