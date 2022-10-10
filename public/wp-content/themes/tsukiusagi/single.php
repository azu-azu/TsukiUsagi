<?php
if (!is_user_logged_in() && !is_robots() && !is_bot()) {
    usa_set_post_views();
}

get_template_part('components/contents/all');
