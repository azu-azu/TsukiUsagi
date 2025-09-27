<?php get_template_part('components/common/train'); ?>
<?php get_template_part('components/parts/floating-stars'); ?>

<main class="l-main p-contents--top c-bg--gradient-sub">
    <?php get_template_part('components/section/moon'); ?>
    <?php get_template_part('components/parts/milky-way'); ?>
    <?php get_template_part('components/parts/playing-box'); ?>

    <div class="c-anim-box--down js-scroll-show">
        <?php usa_set_extra_sub_loop_post(10); ?>
    </div>

    <?php get_template_part('components/contents/side'); ?>
</main>