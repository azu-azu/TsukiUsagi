<?php get_header(); ?>

<?php
$term = wp_get_object_terms($post->ID, 'カスタムタクソノミー名');
$args = array( 
    'post_type' => 'works',
    'taxonomy' => 'カスタムタクソノミー名',
    'term' => $term[0]->name,
    'posts_per_page' => 10,
);
$custom_query = new WP_Query( $args );
if ( $custom_query->have_posts() ) : 
    while ( $custom_query->have_posts() ) : 
        $custom_query->the_post(); 
?>

<?php if (get_post_type() === 'works'): ?>
  <?php get_template_part('components/template/loop/sub'); ?>
<?php endif; ?>

<?php endwhile;
endif;
wp_reset_postdata();
?>

<?php get_footer(); ?>