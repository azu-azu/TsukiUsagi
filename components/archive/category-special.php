<?php
/**
 * 特別なカテゴリテンプレート（VBA、PowerShell等）
 * 使用例: get_template_part('components/archive/category-special', null, ['title' => 'VBA']);
 */
$title = get_query_var('title') ?: 'カテゴリ';
?>

<div class="p-main-wrapper c-bg--night">
    <?php get_template_part('components/parts/first-view'); ?>

    <main class="l-main p-contents--archive">
        <?php echo usa_set_heading_linear_show('h1', $title, 'main'); ?>

        <?php get_template_part('components/archive/tag'); ?>
    </main>

    <?php get_template_part('components/contents/side'); ?>
</div>
