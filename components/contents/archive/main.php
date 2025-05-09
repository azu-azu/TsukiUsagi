<?php
$main_container_class = 'l-main__container';
?>

<?php if (is_category() || is_tag()) : ?>
    <?php get_template_part('components/contents/archive/taxonomy'); ?>
<?php else : ?>
    <article class="<?php echo $main_container_class; ?>">
        <?php if (is_front_page() || is_home() || is_page('home')) : ?>
            <?php usa_set_extra_sub_loop_cat(2); ?>

        <?php elseif (is_search()) : ?>
            <?php get_template_part('components/contents/archive/search'); ?>

            <!-- /blogページ -->
        <?php elseif (get_post_type() === 'post') : ?>
            <!-- <?php usa_set_extra_sub_loop_cat(4); ?> -->
            <?php usa_set_extra_sub_loop_post(10); ?>

        <?php elseif (get_post_type() === 'works') : ?>
            <?php get_template_part('components/contents/archive/works'); ?>
        <?php endif; ?>
    </article>
<?php endif; ?>