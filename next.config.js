/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, {isServer}) => {
    if (isServer) {
      config.externals = [
        ...config.externals,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        function ({context, request}, callback) {
          if (request === 'pg-hstore') {
            return callback(null, 'commonjs ' + request);
          }
          callback();
        },
      ];
    }
    config.ignoreWarnings = [
      {
        module: /sequelize/,
        message:
          /Critical dependency: the request of a dependency is an expression/,
      },
    ];
    return config;
  },
};
