<!-- ↓出力結果↓ ※タグ数は配列の要素数により動的に生成 -->
<ul class="ul_p_class">
  <li class="li_p_class">
    <ul class="ul_c_class">
      <li class="li_p_class"></li>
    </ul>
  </li>
</ul>
<!-- ↑出力結果↑ -->


<?php

function usa_create_list_block($arr, $ul_p_class, $ul_c_class, $li_p_class, $li_c_class) {
  $parents = array_filter($arr, function ($item) { return !$item['parent'];});
?>
    <ul class="<?php echo $ul_p_class;?>">

      <?php
        foreach ($parents as $parent) {
          create_li_tag($arr, $parent, $ul_c_class, $li_p_class, $li_c_class);
        }
      ?>

    </ul>
<?php
};


// liタグ生成
function create_li_tag($arr, $item, $ul_c_class, $li_p_class, $li_c_class) {
  if ($item['parent'] === "") {
    $li_class = $li_p_class;  // 親li
    ?>

    <li class="<?php echo $li_class;?> <?php echo $item['class'];?>">
      <h3><?php echo $item['text'];?></h3>
      
  <?php
  } else {
    $li_class = $li_c_class;  // 子li
  ?>

    <li class="<?php echo $li_class;?> <?php echo $item['class'];?>">
      <a href="<?php echo $item['url'];?>"><?php echo $item['text'];?></a>
  <?php
  };
  
  // 子のul
  $children = array_filter($arr, function ($i) use ($item) { return $i['parent'] == $item['id']; });
  if (!empty($children)) {
  ?>
    <ul class="<?php echo $ul_c_class;?>">

      <?php
        foreach ($children as $child) {
          create_li_tag($arr, $child, $ul_c_class, $li_p_class, $li_c_class);
        }
      ?>

      </li>
    </ul>

<?php
  }
}

