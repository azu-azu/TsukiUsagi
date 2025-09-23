<?php
get_header();
?>

<div class="p-main-wrapper c-bg--night">
    <?php get_template_part('components/parts/first-view'); ?>

    <main class="l-main p-contents--archive">
        <?php echo usa_set_heading_linear_show('h1', 'VBA', 'main'); ?>

        <?php get_template_part('components/archive/tag'); ?>
    </main>

    <?php get_template_part('components/contents/side'); ?>
</div>

<?php
get_footer();
?>
