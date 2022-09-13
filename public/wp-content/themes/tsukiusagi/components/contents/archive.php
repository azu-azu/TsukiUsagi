<?php
$main_class = 'l-topic';
$main_container_class = $main_class . '__container';
$main_inner_class = $main_class . '__inner';
?>

<main class="<?php echo $main_class; ?> list-contents">
    <?php get_template_part('components/text/page-ttl'); ?>

    <?php if (is_category()) : ?>
        <?php get_template_part('components/contents/category'); ?>

    <?php else : ?>
        <article class="<?php echo $main_container_class; ?>">
            <?php if (get_post_type() === 'post') : ?>
                <?php get_template_part('components/contents/post'); ?>

            <?php elseif (get_post_type() === 'works') : ?>
                <?php $title = 'WordPressテーマ開発'; ?>
                <?php echo usa_set_heading_linear_show('h2', $title, 'list'); ?>
                <article class="p-related-contents">
                    <article class="p-related-contents__inner">
                        <?php get_template_part('components/template/loop/sub'); ?>
                    </article>
                </article>
            <?php endif; ?>
        </article>
    <?php endif; ?>
    <?php get_template_part('components/contents/after'); ?>
</main>