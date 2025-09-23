<?php
$main_container_class = 'l-main__container';
?>

<?php if (is_category() || is_tag()) : ?>
    <?php get_template_part('components/archive/taxonomy'); ?>
<?php else : ?>
    <article class="<?php echo $main_container_class; ?>">
        <?php if (is_front_page() || is_home() || is_page('home')) : ?>
            <?php usa_set_extra_sub_loop_cat(2); ?>

        <?php elseif (is_search()) : ?>
            <?php get_template_part('components/archive/search'); ?>

        <?php elseif (get_post_type() === 'post') : ?>
            <!-- https://tsukiusagi.biz/blog/ -->
            <?php usa_set_extra_sub_loop_cat(wp_is_mobile() ? 2 : 4); ?>

        <?php elseif (get_post_type() === 'works') : ?>
            <?php get_template_part('components/archive/works'); ?>
        <?php endif; ?>
    </article>
<?php endif; ?>