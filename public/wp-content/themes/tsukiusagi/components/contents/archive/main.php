<?php
$main_class = 'l-main';
$main_container_class = $main_class . '__container';
$main_inner_class = $main_class . '__inner';

?>

<?php if (is_category() || is_tag()) : ?>
    <?php get_template_part('components/contents/archive/taxonomy'); ?>
<?php else : ?>
    <?php get_template_part('components/text/page-ttl'); ?>
    <article class="<?php echo $main_container_class; ?>">
        <?php if (get_post_type() === 'post') : ?>
            <?php get_template_part('components/contents/archive/post'); ?>
        <?php elseif (get_post_type() === 'works') : ?>
            <?php get_template_part('components/contents/archive/works'); ?>
        <?php endif; ?>
    </article>
<?php endif; ?>