<?php
$title = 'WordPressテーマ開発';
$url = '';
?>

<article class="p-related-contents">
    <article class="p-related-contents__inner">
        <?php echo usa_set_heading_linear_show('h2', $title, 'list', $url); ?>
        <?php get_template_part('components/template/loop/sub'); ?>
    </article>
</article>