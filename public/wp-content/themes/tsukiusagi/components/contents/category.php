<?php
$main_class = 'l-topic';

$cat = get_the_category();
$cat_name = $cat[0]->cat_name;

$tag = 'h2';
$title = '「' . $cat_name . '」の記事';
?>

<main class="<?php echo $main_class; ?> list-contents">
    <?php echo usa_set_heading_linear_show($tag, $title, 'page'); ?>
    <?php if (have_posts()) : ?>
        <section class="p-related-contents">
            <article class="p-related-contents__inner">
                <ul class="post-sub-loop">
                    <?php while (have_posts()) : the_post(); ?>
                        <?php $delay = 0; ?>
                        <li class="c-anim-box--down js-scroll-show" data-js_delay="<?php echo $delay; ?>">
                            <?php echo usa_set_the_post_thumbnail('medium', 'sub'); ?>
                        </li>
                        <?php $delay += 150; ?>
                    <?php endwhile; ?>
                </ul>
            </article>
            <?php the_posts_pagination(array(
                'mid_size' => 1,
                'prev_text' => '',
                'next_text' => '',
                'screen_reader_text' => ''
            )); ?>
        </section>
    <?php endif; ?>
    <?php get_template_part('components/contents/after'); ?>
</main>