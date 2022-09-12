<?php
include 'my-functions.php';

include '../a_common/header.php';

// データの送信先
$action_up = ""; // 空で自分

// アップ先のパス
$upload_dir = "";

$up_lists = array(
    "text" =>
    array(
        "アップロードファイル１" => "a_yyyymmddhhmmss.html",
        "アップロードファイル２" => "b_yyyymmddhhmmss.html",
    ),
    "text_class" => "",
    "name" => "upload_file", // 複数の場合は名前の最後に必ず [] をつける
    "accept" => ".html", // 複数の場合はカンマ区切り
    "type" => "file",
    "value" => "アップロード",
    "submit_name" => "submit_btn",
);

// html生成
demo_echo_tag($up_lists, $action_up);

include '../a_common/footer.php';


// actionされた後の実行プログラム
// $name = $up_lists['name'];
// $submit_name = $up_lists['submit_name'];

// if (isset($_POST[$submit_name])) {
//     $tmpFile = $_FILES[$name]['tmp_name'];
//     var_dump($tmpFile);
//     hdn_upload($upload_dir, $name);
// };
