import { createContentlayerPlugin } from 'next-contentlayer';

const withContentLayer = createContentlayerPlugin({})

/** @type {import('next').NextConfig} */
const nextConfig = {};

// moglibyśmy skorzystać z jakiejś funkcji `pipe` gdybyśmy mieli dużo pluginów
// teraz zostaniemy przy takiej wersji

export default withContentLayer(nextConfig);
