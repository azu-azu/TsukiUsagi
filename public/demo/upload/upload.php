<?php

/**
 * 機能    サーバーへ選択したファイルをアップロードする
 * @param string $upload_dir アップするパス
 * @param string $name mimeタイプを指定したい場合（省略可）
 */

// ファイル名取得にはbasenameを使うことでファイルシステムトラバーサル攻撃を防げる
function hdn_upload($upload_dir, $name) {
    $upload_file = $upload_dir . basename($_FILES[$name]['name']);

    echo '<pre>';
    if (move_uploaded_file($_FILES[$name]['tmp_name'], $upload_file)) {
        echo "ok";
    } else {
        echo 'ng';
    };

    // print_r($_FILES);
    echo '</pre>';
    header('Content-Type: text/html; charset=UTF-8');

    foreach ($_FILES[$name]['error'] as $key => $error) {
        if ($error == UPLOAD_ERR_OK) {
            $tmp_name = $_FILES[$name]['tmp_name'][$key];
            move_uploaded_file($tmp_name, 'data/$name');
        }
    }
};
