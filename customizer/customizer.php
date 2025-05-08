<?php

/**
 * カスタマイザー
 */
function usa_customize_register($wp_customize) {
    include(get_template_directory() . '/customizer/components/basic.php');
}
add_action('customize_register', 'usa_customize_register');
