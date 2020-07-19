export interface PM2Config {
	apps?: PM2AppOptions[];
	deploy?: { [index: string]: PM2DeployOptions };
}

export interface PM2AppOptions {
	/**
	 * Path of the script to launch, required field
	 */
	script: string;

	// Process name in the process list
	name?: string;

	/**
	 * Current working directory to start the process with
	 */
	cwd?: string;

	/**
	 * Arguments to pass to the script
	 */
	args?: string[] | string;

	/**
	 * Interpreter absolute path
	 */

	interpreter?: string;

	/**
	 * Arguments to pass to the interpreter
	 */
	node_args?: string | string[];

	/**
	 * File path for stdout (each line is appended to this file)
	 */
	output?: string;

	/**
	 * File path for stderr (each line is appended to this file)
	 */
	error?: string;

	/**
	 * File path for combined stdout and stderr (each line is appended to this file)
	 */
	log?: boolean | string;

	/**
	 * Disable all logs storage
	 */
	disable_logs?: boolean;

	/**
	 * Define a specific log output type, possible value?: json
	 */
	log_types?: string;

	/**
	 * Format for log timestamps in moment.js format (eg YYYY-MM-DD HH?:mm Z)
	 */
	log_date_format?: string;

	/**
	 * Specify environment variables to be injected
	 * */
	env?: string | {};

	/**
	 * Restart the app if an amount of memory is exceeded (format: /0-9?/ K for KB, ‘M’ for MB, ‘G’ for GB, default to B)
	 */
	max_memory_restart?: string | number;

	/**
	 * File path where the pid of the started process is written by pm2
	 */
	pid_file?: string;

	/**
	 * Time in ms to wait before restarting a crashing app
	 */
	restartDelay?: number;

	/**
	 * source_map_support 	Enable or disable the source map support
	 */
	source_map_support?: boolean;

	/**
	 * Enable or disable the source map support
	 */
	disable_source_map_support?: boolean;

	/**
	 * Make the process wait for a process.send(‘ready’)
	 */
	wait_ready?: boolean;

	/**
	 * Number of instances to be started in cluster mode
	 */
	instances?: number;

	/**
	 * Time in ms before sending the final SIGKILL signal after SIGINT
	 */
	kill_timeout?: number;

	/**
	 * Time in ms before forcing a reload if app is still not listening/has still not sent ready
	 */
	listen_timeout?: number;

	/**
	 * A cron pattern to restart your app
	 */
	cron_restart?: string;

	/**
	 * In cluster mode, merge each type of logs into a single file (instead of having one for each cluster)
	 */
	merge_logs?: string;

	/**
	 * Enable or disable the versioning metadatas (vizion library)
	 */
	vizion?: boolean;

	/**
	 * Enable or disable auto restart after process failure
	 */
	autorestart?: boolean;

	/**
	 * Enable or disable the watch mode
	 */
	watch?: string | string[];

	/**
	 * List of paths to ignore (regex)
	 */
	ignore_watch?: string | string[];

	/**
	 * Object that will be used as an options with chokidar (refer to chokidar documentation)
	 */
	watch_options?: {};

	/**
	 * Minimum uptime of the app to be considered started (format is /[0-9]+(h|m|s)?/, for hours, minutes, seconds, default to ms)
	 */
	min_uptime?: number | string;

	/**
	 * Number of times a script is restarted when it exits in less than min_uptime
	 */
	maxRestarts?: number;

	/**
	 * Set the execution mode, possible values: fork|cluster
	 */
	exec_mode?: string;

	/**
	 * Start a script even if it is already running (only the script path is considered)
	 */
	force?: boolean;

	/**
	 * Append the environment name to the app name
	 */
	append_env_to_name?: boolean;

	/**
	 * List of commands executed after a pull/upgrade operation performed from Keymetrics dashboard
	 */
	post_update?: string[];

	/**
	 * Enable or disable the transaction tracing
	 */
	trace?: boolean;

	/**
	 * Enable or disable the transaction tracing
	 */
	disable_trace?: boolean;

	/**
	 * Specify the name of an environnement variable to inject which increments for each cluster
	 */
	increment_var?: string;

	/**
	 * Rename the NODE_APP_INSTANCE environment variable
	 */
	instance_var?: string;

	/**
	 * Enable or disable apm wrapping
	 */
	pmx?: boolean;

	/**
	 * Enable or disable apm wrapping
	 */
	automation?: boolean;

	/**
	 * Only kill the main process, not detached children
	 */
	treekill?: boolean;

	/**
	 * Shortcut to inject a PORT environment variable
	 */
	port?: number;

	/**
	 * Set user id
	 */
	uid?: string;

	/**
	 * Set group id
	 */
	gid?: string;
}

export interface PM2DeployOptions {
	/**
	 *  SSH key path
	 */
	key?: string;

	/**
	 *  SSH user
	 */
	user?: string;

	/**
	 * SSH host
	 */
	host?: string[];

	/**
	 * SSH options with no command-line flag, see ‘man ssh’
	 */
	shh_options?: string | string[];

	/**
	 * GIT remote/branch
	 */
	ref?: string;

	/**
	 * GIT remote
	 */
	repo?: string;

	/**
	 * path in the server
	 */
	path?: string;

	/**
	 * Pre-setup command or path to a script on your local machine
	 */
	'pre-setup'?: string;

	/**
	 * Post-setup commands or path to a script on the host machine
	 */
	'post-setup'?: string;

	/**
	 * pre-deploy action
	 */
	'pre-deploy-local'?: string;

	/**
	 * post-deploy action
	 */
	'post-deploy'?: string;
}
