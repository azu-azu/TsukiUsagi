<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '5PGobiGkkPGwwrXXaWYLYSbhj2G+ZTcyfOABPVogki8RSMI9e8E1xnnk41JjI/o6VkTAG/IcVU7rWufyqvijzA==');
define('SECURE_AUTH_KEY',  'JOeTZgC66/JGK3mDb72r2h9p9JQ+onUHutiCYie3pW/hxWnYmBaEspuN40UAa+SU7zevKcezpwbZlCcSQ6+Fhg==');
define('LOGGED_IN_KEY',    'RptcLW/VUhHwJ4XUtjPtDyslk8UdH8HWyQrxSbByj/hkKmncyPyf+HTju9aCFxPIP9dnvKsguqrq9guEBpodmQ==');
define('NONCE_KEY',        '1qdIn9jaCswXHfDG+aq2u2De6Xl+TkmYV+SCYUIgL/A/KUZ4WNtoeR2DMGgpCutRHU2sl/svDVZWd1HgFhuJJw==');
define('AUTH_SALT',        'D8YJGg+Clxhy4p33NBqofzCgu+JDROcdGX7FXhzr4RRREQaN7bPdRsGKg2j5UcYZAAhr/qUGaut/NunUgxtySw==');
define('SECURE_AUTH_SALT', 'yaCYZxV1Hu62K+necSMUMrvA6IvuFMGS8sKIXHzmfjENXwj02c+Z6idSe+xWg7DAzT85MgETGcHWC7v/SkY5LQ==');
define('LOGGED_IN_SALT',   '8Eh4rnxnlSVLeiaHYDCnwMr1w7I9HV2rThT7dp+tXekxRYdTTkKSUFLZem/raXXt1DYfsU71BX3vt+02bwh5YQ==');
define('NONCE_SALT',       'FLr92OwZOl/BV4nuWehRMgxWC7pMJelKiVaDaPMVaDPGnCHfwPBE10jb26MRjVKEQaipQybnhDWTA//xxfN/KQ==');
define('WP_DEBUG',false);

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
