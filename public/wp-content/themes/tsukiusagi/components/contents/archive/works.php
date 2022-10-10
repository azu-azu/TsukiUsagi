<?php
$title = 'WordPressテーマ開発';
$url = '';
?>

<article class="p-frame">
    <article class="p-loop">
        <?php echo usa_set_heading_linear_show('h2', $title, 'inline', $url); ?>
        <?php get_template_part('components/template/loop/sub'); ?>
    </article>
</article>