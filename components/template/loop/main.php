<?php
if (have_posts()) : while (have_posts()) : the_post();

    // field-list
    switch (get_post_type()) {
      case 'post':
        $tags = get_the_tags();
        if (!empty($tags)) {
          echo '<ul class="field-list">';
          foreach ($tags as $tag) {
            echo '<li><a class="text" href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a></li>';
          }
          echo '</ul>';
        }
        break;

      case 'works':
        echo usa_set_tax_terms_links('works-category', false);
        break;
    };

    // post-title
    echo '<article class="p-title">';
    echo '<h1 class="c-title--section c-pseudo--sec-ttl c-anim-box--down txt js-scroll-show">';
    the_title();
    echo '</h1></article>';

    // post-date
    if (is_single()) {
      echo '<p class="c-post-date">';
      echo '記事更新日：';
      the_time(get_option('date_format'));
      echo '</p>';
    };

    // thumbnail
    echo usa_set_the_post_thumbnail('large', 'main');

    // ===content-parts===
    if (get_post_type() === 'works') {
      get_template_part('components/parts/works-field');
    };

    echo '<article class="wp-post-article-part">';
    the_content();
    echo '</article>';
  // ===content-parts_end===

  endwhile;
endif;
