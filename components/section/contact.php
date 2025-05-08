<?php
$sec_class = 'p-sec-contact';
$bg_class = 'p-layer--f4 c-bg--gradient-f4';

$title = 'Contact';
?>

<section class="<?php echo $sec_class . ' ' . $bg_class; ?>" id="contact">
  <?php echo usa_set_heading_linear_show('h2', $title, 'sec'); ?>

  <article class="p-sec-contact__container">
    <article class="p-sec-contact__inner">
      <?php echo do_shortcode('[contact-form-7 id="18" title="コンタクトフォーム 1"]'); ?>
      <?php get_template_part('components/parts/ball'); ?>
    </article>

  </article>
  <?php get_template_part('components/text/offset-title'); ?>
</section>