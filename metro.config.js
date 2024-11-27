// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

// Retrieve the default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Add additional file extensions to the resolver
defaultConfig.resolver.assetExts.push("cjs");

// Export the updated configuration
module.exports = defaultConfig;

/**
 * @type {import('expo/metro-config').MetroConfig}
 * This type definition ensures proper typing for the configuration.
 */
