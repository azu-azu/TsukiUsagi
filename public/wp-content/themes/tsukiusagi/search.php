<?php get_header(); ?>

<main class="l-topic list-contents c-bg--gradient-main">
    <article class="l-topic__container">
        <?php if (have_posts()) { ?>
            <?php if (isset($_GET['s']) && empty($_GET['s'])) {; ?>
                <h2>もういちど検索してください</h2>
                <p>ごめんなさい、見つかりませんでした。<br><br>以下、全商品を掲載しておきます。</p>
            <?php } else {; ?>
                <h2><?php echo $_GET['s']; ?>：<?php echo $wp_query->found_posts; ?>件 見つかりました</h2>
            <?php }; ?>
    </article>

    <section class="p-related-contents">
        <article class="p-related-contents__inner">
            <ul class="post-sub-loop">
                <?php while (have_posts()) : the_post(); ?>
                    <li class="c-anim-box--down js-scroll-show show">
                        <a href="<?php the_permalink(); ?>" class="l-contents--wrap__item">
                            <?php echo usa_set_the_post_thumbnail('medium', 'sub'); ?>
                        </a>
                    </li>
                <?php endwhile; ?>
            </ul>
        </article>
    </section>

<?php } else {; ?>
    ごめんなさい、お探しのワードでは見つかりませんでした。<br>もういちどやり直してください。
<?php }; ?>
</main>

<?php get_sidebar(); ?>
<?php get_footer(); ?>