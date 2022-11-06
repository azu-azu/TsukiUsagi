<?php
$main_container_class = 'l-main__container';
?>

<?php if (is_category() || is_tag()) : ?>
    <?php get_template_part('components/contents/archive/taxonomy'); ?>
<?php else : ?>
    <article class="<?php echo $main_container_class; ?>">
        <?php if (is_front_page() || is_home() || is_page('home')) : ?>
            <?php get_template_part('components/contents/archive/front'); ?>

            <?php
            // できあがるまでは、ここはコメントアウトする
            get_template_part('components/contents/archive/vba-cat'); ?>

        <?php elseif (is_search()) : ?>
            <?php get_template_part('components/contents/archive/search'); ?>
        <?php elseif (get_post_type() === 'post') : ?>
            <?php get_template_part('components/contents/archive/post'); ?>
        <?php elseif (get_post_type() === 'works') : ?>
            <?php get_template_part('components/contents/archive/works'); ?>
        <?php endif; ?>
    </article>
<?php endif; ?>