<?php get_header(); ?>

<main class="l-main">
    <article class="p-post">
        <?php if (have_posts()) : ?>
            <?php
            if (isset($_GET['s']) && empty($_GET['s'])) {
                echo '<h2>もういちど検索してください</h2>';
                echo '<p>ごめんなさい、見つかりませんでした。<br><br>以下、全商品を掲載しておきます。</p>';
            } else {
                echo '<h2>' . $_GET['s'] . '：' . $wp_query->found_posts . '件 見つかりました</h2>';
                echo '<p>写真をクリックすると、詳しく見ることができます。</p>';
            }
            ?>
    </article>

    <article class="l-contents">
        <ul class="l-contents--wrap">
            <?php while (have_posts()) : the_post(); ?>
                <li class="p-contents">
                    <a href="<?php the_permalink(); ?>" class="l-contents--wrap__item">
                        <figure class="l-contents--wrap__item--bg">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="p-contents__post-bg"><?php the_post_thumbnail(); ?></div>
                            <?php else : ?>
                                <img class="p-contents__default-bg" src="<?php echo do_shortcode('[uri]'); ?>/images/card.png" srcset="<?php echo do_shortcode('[uri]'); ?>/images/card.png 379w,
                                <?php echo do_shortcode('[uri]'); ?>/images/card_pc.png 677w" sizes="(max-width:640px) 379px, 100vw" alt="">
                            <?php endif; ?>
                        </figure>

                        <div class="l-contents--wrap__item--cat">
                            <h2><?php the_title(); ?></h2>
                            <ul class="">
                                <li class="c-font--card-ttl"></li><!-- h2の取得 -->
                                <li class="c-font--card-txt"></li><!-- 抜粋の取得 -->
                            </ul>
                            <button class="c-btn--miru-btn">詳しく見る</button>
                        </div>
                    </a>
                </li>
            <?php endwhile; ?>
    </article>

    <?php else : ?>ごめんなさい、お探しのワードでは見つかりませんでした。<br>もういちどやり直してください。
<?php endif; ?>

</main>

<?php get_sidebar(); ?>
<?php get_footer(); ?>

</body>

</html>