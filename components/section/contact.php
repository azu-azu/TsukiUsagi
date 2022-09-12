<section class="p-sec-contact c-bg--gradient-f4" id="contact">
  <?php echo usa_set_heading_linear_show('h2', 'Contact', 'sec'); ?>

  <article class="p-sec-contact__container">
    <article class="p-sec-contact__inner">
      <?php echo do_shortcode('[contact-form-7 id="18" title="コンタクトフォーム 1"]'); ?>
      <?php get_template_part('components/parts/ball'); ?>
    </article>

  </article>
  <?php get_template_part('components/text/offset-title'); ?>
</section>