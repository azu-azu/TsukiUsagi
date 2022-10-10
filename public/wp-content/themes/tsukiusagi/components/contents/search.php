<article class="l-main__container">
    <?php if (have_posts()) { ?>
        <?php if (isset($_GET['s']) && empty($_GET['s'])) {; ?>
            <h2>もういちど検索してください</h2>
            <p>ごめんなさい、お探しのワードでは見つかりませんでした。</p>
        <?php } else {; ?>
            <h2><?php echo $_GET['s']; ?>：<?php echo $wp_query->found_posts; ?>件 見つかりました</h2>
        <?php }; ?>
</article>

<section class="p-frame">
    <article class="p-loop">
        <ul class="p-posts-list post-sub-loop">
            <?php while (have_posts()) : the_post(); ?>
                <li class="p-posts-list__item">
                    <a href="<?php the_permalink(); ?>">
                        <?php echo usa_set_the_post_thumbnail('medium', 'sub'); ?>
                    </a>
                </li>
            <?php endwhile; ?>
        </ul>
    </article>
</section>

<?php } else {; ?>
    ごめんなさい、お探しのワードでは見つかりませんでした。<br>もういちど検索し直してください。
<?php }; ?>