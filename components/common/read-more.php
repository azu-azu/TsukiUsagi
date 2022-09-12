<article class="p-jump-button">
  <button class="c-read-more c-anim-box--scaleup js-scroll-show">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>/blog">
      <?php
        $text = 'ブログ一覧へ';
        $finger = false;
        echo usa_set_jump_btn_contents($text, $finger);
      ?>
    </a>
  </button>
</article>