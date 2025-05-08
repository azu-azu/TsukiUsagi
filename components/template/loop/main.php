<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <?php if (get_post_type() === 'post') : ?>
      <?php $tags = get_the_tags(); ?>
      <?php if (!empty($tags)) : ?>
        <ul class="c-field-list--white">
          <?php foreach ($tags as $tag) : ?>
            <li>
              <a class="text" href="<?php echo get_tag_link($tag->term_id); ?>"><?php echo $tag->name; ?></a>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>

    <?php elseif (get_post_type() === 'works') : ?>
      <?php echo usa_set_tax_terms_links('works-category', false); ?>
    <?php endif; ?>

    <?php echo usa_set_heading_linear_show('h1', get_the_title(), 'post'); ?>

    <?php if (is_single()) : ?>
      <p class="c-post-date">作成日：<?php echo the_time(get_option('date_format')); ?></p>
      <p class="c-post-date">更新日：<?php echo the_modified_time(get_option('date_format')); ?></p>
    <?php endif; ?>

    <?php echo usa_set_the_post_thumbnail('large', 'main'); ?>

    <?php if (get_post_type() === 'works') : ?>
      <?php echo get_template_part('components/parts/works-field'); ?>
    <?php endif; ?>

    <article class="wp-post-article-part">
      <?php echo the_content(); ?>
    </article>

  <?php endwhile; ?>
<?php endif; ?>