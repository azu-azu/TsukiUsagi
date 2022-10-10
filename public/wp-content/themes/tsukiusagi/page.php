<?php
get_header();

// is_page(ページのスラッグ)
if (is_page('about')) {
  get_template_part('components/page/about');
} elseif (is_page('policy')) {
  get_template_part('components/page/policy');
} elseif (is_page('thanks')) {
  get_template_part('components/page/thanks');
}

get_footer();
