jQuery(document).ready(function ($) {
	var custom_uploader;
	/*##############################*/
	/* 画像選択ボタンがクリックされた場合の処理 */
	/*##############################*/
	$('#js-media-btn').click(function (e) {
		e.preventDefault();
		if (custom_uploader) {
			custom_uploader.open();
			return;
		}
		custom_uploader = wp.media({
			title: 'Choose Image',

			// ライブラリの一覧を画像のみにする
			library: {
				type: 'image',
			},

			button: {
				text: 'Choose Image',
			},

			// 複数選択：falseにすると画像を1つしか選択できない
			multiple: false,
		});
		custom_uploader.on('select', function () {
			var images = custom_uploader.state().get('selection');

			// file の中に選択された画像の各種情報が格納されている
			images.each(function (file) {
				// テキストフォームと表示されたサムネイル画像があればクリア
				$('#upload_image').val('');
				$('#thumbnail').empty();

				// テキストフォームに画像の url を表示
				// idを表示する場合は.val(file.id)
				$('#upload_image').val(file.attributes.sizes.full.url);

				// プレビュー用に選択されたサムネイル画像を表示;
				$('#thumbnail').append(
					'<img src="' + file.attributes.sizes.full.url + '" />'
				);
			});
		});
		custom_uploader.open();
	});
	/*##############################*/
	/* 削除がクリックされた場合の処理 */
	/*##############################*/
	$('#js-media-remove-btn').click(function () {
		e.preventDefault();
		e.stopPropagation();

		$('#upload_image').val('');
		$('#thumbnail').empty();
	});
});
