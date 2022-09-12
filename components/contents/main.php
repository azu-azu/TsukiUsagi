<?php

if (is_single()) {
  get_template_part('components/contents/single');
} elseif (is_archive()) {
  get_template_part('components/contents/archive');
}
