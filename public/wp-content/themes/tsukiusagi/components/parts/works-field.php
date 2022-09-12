<section class="field-part">
  <?php
    echo product_name_used();
    echo product_url_used();
    echo product_date_used();

    echo '<article class="field-part__contents">';
    echo usa_set_tax_terms_links('works-tag', true);
    echo '</article>';

    echo product_environment_used();
    echo product_page_used();
  ?>
</section>