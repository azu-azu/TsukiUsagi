<article class="p-searchform">
    <form class="c-searchform" id="searchform" method="get" action="<?php echo esc_url(home_url('/')); ?>">
        <label class="screen-reader-text" for="s">検索:</label>
        <input type="text" placeholder="" id="s" name="s" size="20" placeholder="
        <?php if (!is_search()) echo 'SEARCH'; ?>" value="<?php if (is_search()) echo get_search_query(); ?>" /><!-- 検索後も文字を残す -->
        <label class="place-holder" for="s">記事内検索</label>
        <button type="submit">
            <i class="c-searchform__icon fas fa-search"></i>
        </button>
    </form>
</article>