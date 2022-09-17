<?php
$main_class = 'l-topic';
$main_container_class = $main_class . '__container';
$main_inner_class = $main_class . '__inner';
?>


<?php get_template_part('components/bg/cosmos/ornament'); ?>

<?php if (get_post_type() === 'post') : ?>
    <div class="c-separator-cloud__container">
        <?php get_template_part('components/parts/separator'); ?>
    </div>

    <section class="<?php echo $main_inner_class; ?> c-bg--post-container">';
        <article class="<?php echo $main_container_class; ?>">
            <?php get_template_part('components/template/loop/main'); ?>
            <?php get_template_part('components/parts/author'); ?>
        </article>
    </section>

    <div class="c-separator-cloud--bottom">';
        <?php get_template_part('components/parts/separator'); ?>
    </div>

<?php elseif (get_post_type() === 'works') : ?>
    <section class="<?php echo $main_container_class; ?>">
        <?php get_template_part('components/template/loop/main'); ?>
        <?php get_template_part('components/parts/falling-box'); ?>
    </section>
<?php endif; ?>

<section class="p-related-contents">
    <article class="p-related-contents__inner">
        <?php get_template_part('components/bg/cosmos/crystal'); ?>
        <?php get_template_part('components/text/list-ttl'); ?>
        <?php get_template_part('components/template/loop/sub'); ?>
    </article>
</section>