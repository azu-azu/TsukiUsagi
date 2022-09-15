<?php
$main_class = 'l-topic';

if (is_category()) {
    $cat = get_the_category();
    $name = $cat[0]->name;
} elseif (is_tag()) {
    $tags = get_the_tags();
    $name = $tags[0]->name;
} elseif (is_tax()) {
    $labels = get_taxonomy($taxonomy);
    $name = $labels->name;
}

$tag = 'h2';
$title = '「' . $name . '」の記事一覧';
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
            <?php get_template_part('components/parts/pagination'); ?>
        </section>
    <?php endif; ?>
    <?php get_template_part('components/contents/after'); ?>
</main>