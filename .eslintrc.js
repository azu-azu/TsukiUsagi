module.exports = {
	env: {
		browser: true, // document や console にエラーが出ないようにする
		// es6: true, // es6から使える let や const にエラーがでないようにする
		// es2021: true,
		jquery: true, // jQueryを使えるようにする
		node: true,
		type: module, // esmエラー回避
	},
	// 'eslint:recommended', // ESLintの推奨設定をベースにする場合
	// WordPressのコーディング規約をベースにする場合
	extends: ['wordpress', 'plugin:prettier/recommended'],
	plugins: ['react'], // React関係のルールを指定するのに必要
	parser: 'babel-eslint', // JSXとかでエラー出るのを回避。env の es6:true もこれにより不要になる
	parserOptions: {
		// sourceType: 'module', // import などを使うときに必要
		// ecmaVersion: 12,
		ecmaFeatures: {
			experimentalObjectRestSpread: true, // 非推奨項目も注意してくれる？（あんまよくわかってない）
			jsx: true, // JSX を使うときに必要（ reactプラグインいれてるからいらないかも...？ ）
		},
	},

	rules: {
		'no-var': 'error', //varを許可しない
		'block-spacing': ['error', 'always'], // {}内の半角スペースを入れる
		'array-bracket-spacing': ['error', 'always'],
		'space-in-parens': ['error', 'always'],
		'no-console': 'off', // console.logがあってもエラーにしない
		'require-jsdoc': 'off', // Docコメントなくてもエラーにしない
		'valid-jsdoc': 'off', // Docコメントの書き方についてとやかくいわせない
		camelcase: ['warn', { properties: 'never' }], // オブジェクトのキーはキャメルじゃなくてよい
		'react/jsx-uses-vars': 1, // これを使うとJSXで使ってる変数がno-useとして認識されるのを防げた
	},
};
