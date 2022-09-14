<?php
$main_class = 'p-related-contents';
$ex_class = 'p-related-contents--ex';
$main_inner_class = $main_class . '__inner';
$ex_inner_class = $ex_class . '__inner';
// $bg_class = 'c-bg--gradient-transparent';
$bg_class = 'c-bg--before-footer';
?>

<?php if (is_single()) : ?>
  <section class="<?php echo $main_class; ?> <?php echo $bg_class; ?>">
  <?php else : ?>
    <section class="<?php echo $ex_class; ?> <?php echo $bg_class; ?>">
    <?php endif; ?>

    <?php if (is_single()) : ?>
      <article class="<?php echo $main_inner_class; ?>">
        <?php get_template_part('components/bg/cosmos/crystal'); ?>
        <?php get_template_part('components/text/list-ttl'); ?>
        <?php get_template_part('components/template/loop/sub'); ?>

      <?php elseif (is_post_type_archive('works')) : ?>
        <article class="<?php echo $ex_inner_class; ?>">
        <?php endif; ?>

        <?php get_template_part('components/text/offset-title'); ?>
        </article>
    </section>