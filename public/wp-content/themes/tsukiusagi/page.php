<?php
get_header();
get_template_part('components/common/to-top');

// is_page(ページのスラッグ)
if (is_page('policy')) {
  get_template_part('components/page/policy');
} elseif (is_page('thanks')) {
  get_template_part('components/page/thanks');
}

get_footer();
