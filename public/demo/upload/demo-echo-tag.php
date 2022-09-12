<?php

/**
 * 機能    アップロードボタンの生成・出力
 * @param array $arr 出力するデータ配列
 * @param array $class 共通クラス名
 * @param array $action 情報の送信先URL
 *
 * 【 出力結果 】
 * <article>
 *     <form>
 *         <div class=upload-area">
 *             <i class="fas fa-cloud-upload-alt"></i>
 *             <p>Drag and drop a file or click</p>
 *             <input type="file" name="upload_file">
 *         </div>
 *         <input type="submit">
 *     </form>
 * </article>
 */


function demo_echo_tag($arr, $action) {
    $type = $arr['type'];
    $value = $arr['value'];
    $accept = $arr['accept'];
    $name = $arr['name'];
    $input_attr = 'type="' . $type . '" accept="' . $accept . '" name="' . $name . '"';
    $submit_name = $arr['submit_name'];

    // アップ可能数が複数の場合はmultipleを追加する
    if (substr($name, -2) == '[]') {
        $input_class = substr($name, 0, -2);
        $input_attr = $input_attr . ' ' . 'multiple';
    } else {
        $input_class = $name;
    }

    $input_class = "'dd-input {$input_class} c-shadow--blur js-add-file'";
    $elms = $arr['text'];
    $text = demo_output_array_foreach($elms);
?>

    <article class="p-load-box c-bg-color--sub">
        <div class="c-text-box">
            <ol><?php echo $text; ?></ol>
        </div>

        <div class="p-cancel-container">
            <div class="c-tooltip--right">
                <button class="cancel-btn c-button--rounded c-shadow--blur js-cancel-button">キャンセル</button>
                <span class="c-tooltip--right__text c-fs--small">ファイルをリセットし、<br>初期化します</span>
            </div>
        </div>
        <form class="p-form--dd" method="post" enctype="multipart/form-data" action="<?php echo $action; ?>">
            <div class="c-upload-area c-shadow--blur js-dd-area">
                <i class="fas fa-cloud-upload-alt"></i>
                <p class="before-msg">ここにドラッグ&ドロップ<br>あるいは、<br>クリックで選択してください</p>
                <p class="after-msg">【黒エリアでドロップ】<br>この中で指を離してください</p>
                <input type="hidden" name="MAX_FILE_SIZE" value="600000">
                <input class=<?php echo $input_class; ?> <?php echo $input_attr; ?>>
                <input type="submit" value="<?php echo $value; ?>" class="c-button--submit c-button--rounded c-shadow--blur c-bg-color--yellow js-submit-ok" name="<?php echo $submit_name; ?>" disabled>
            </div>
            <div class="p-preview-area">
                <p>ファイルの中身</p>
                <textarea id='js-preview-area' rows='10' cols='80'></textarea>
            </div>
            <p>【 選択済のファイル 】</p>
            <textarea class="js-name-area">※未選択です</textarea>
        </form>

    </article>


<?php
};

function demo_output_array_foreach($elms) {
    $tmp = "";
    foreach ($elms as $key => $value) {
        $tmp = $tmp . '<li>' . $key . '：<span class="necessary-file-name c-fc--red">' . $value . '</span></li>';
    }
    return $tmp;
};
