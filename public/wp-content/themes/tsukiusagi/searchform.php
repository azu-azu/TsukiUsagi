<article class="p-searchform">
    <form class="c-searchform" id="searchform" method="get" action="<?php echo esc_url(home_url('/')); ?>">
        <label class="screen-reader-text" for="s">検索:</label>
        <input type="text" id="s" name="s" size="20" placeholder="<?php if (!is_search()) echo 'サイト内検索'; ?>" value="<?php if (is_search()) echo get_search_query(); ?>" /><!-- 検索後も文字を残す -->
        <button type="submit">
            <i class="c-searchform__icon fas fa-search"></i>
        </button>
    </form>
</article>