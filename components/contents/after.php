<?php
$main_class = 'p-related-contents';
$ex_class = 'p-related-contents--ex';
$main_inner_class = $main_class . '__inner';
$ex_inner_class = $ex_class . '__inner';
// $bg_class = 'c-bg--gradient-transparent';
$bg_class = 'c-bg--before-footer';

// *section_start*
if (is_single()) {
  echo '<section class="' . $main_class . ' ' . $bg_class . '">';
} else {
  echo '<section class="' . $ex_class .  ' ' . $bg_class . '">';
};


// *article_start*
// var_single
if (is_single()) {
  echo '<article class="' . $main_inner_class . '">';
  get_template_part('components/bg/cosmos/crystal');

  if (get_post_type() === 'works') {
    get_template_part('components/parts/ball');
  }

  get_template_part('components/text/list-ttl');
  get_template_part('components/template/loop/sub');

  // var_archive
} elseif (is_post_type_archive('works')) {
  echo '<article class="' . $ex_inner_class . '">';
};

// *article & section_end*
get_template_part('components/text/offset-title');
echo '</article></section>';
