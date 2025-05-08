<?php if (have_posts()) : ?>
    <?php if (isset($_GET['s']) && empty($_GET['s'])) {; ?>
        <h2>もういちど検索してください</h2>
        <p>ごめんなさい、お探しのワードでは見つかりませんでした。</p>
    <?php } else {; ?>
        <h2><?php echo $_GET['s']; ?>：<?php echo $wp_query->found_posts; ?>件 見つかりました</h2>
    <?php }; ?>

    <section class="p-frame">
        <article class="p-loop">
            <ul class="p-posts-list p-post-sub-loop">
                <?php while (have_posts()) : the_post(); ?>
                    <li class="p-posts-list__item">
                        <?php echo usa_set_the_post_thumbnail('medium', 'sub'); ?>
                    </li>
                <?php endwhile; ?>
            </ul>
        </article>
    </section>

<?php else : ?>
    ごめんなさい、お探しのワードでは見つかりませんでした。<br>もういちど検索し直してください。
<?php endif; ?>