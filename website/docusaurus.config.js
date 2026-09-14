import {themes as prismThemes} from 'prism-react-renderer';
import { createConfig } from './.shared-config/index.js';
import { providerName, providerTitle } from './provider.js';

const config = createConfig({
  providerName,
  providerTitle,
  prismThemes,
  overrides: {
    // Docusaurus Faster (rspack + swc, via @docusaurus/faster) - kept for
    // build speed and consistency with the other provider microsites.
    future: {
      v4: true,
      faster: true,
    },
  },
});

// This provider's website lives at website/ within the canonical
// stackql-registry/stackql-provider-sumologic repo, so the "Edit this page"
// links point at that subdirectory (the shared config default omits the
// website/ path).
config.projectName = 'stackql-provider-sumologic';
config.presets[0][1].docs.editUrl =
  'https://github.com/stackql-registry/stackql-provider-sumologic/edit/main/website/';

// Use the locally vendored registry-branded logos (STACKQL>> | REGISTRY)
// instead of the shared config's hotlinked main-site wordmark -
// self-contained assets, no cross-origin fetch. global.css swaps in the
// -mobile variants below 996px.
const registryLogo = {
  alt: 'StackQL',
  href: '/',
  src: 'img/stackql-registry-logo.svg',
  srcDark: 'img/stackql-registry-logo-white.svg',
};
config.themeConfig.navbar.logo = { ...registryLogo };
config.themeConfig.footer.logo = { ...registryLogo };

// Date-stamp every doc page ("Last updated on ..."), matching the main
// stackql.io site. The shared config ships showLastUpdateTime: false, and
// .shared-config is wiped and re-cloned on every build (vendor-config), so
// the flip must live here post-createConfig. Timestamps come from git
// history; the docs tree is committed after every regen, so pages stamp
// with their last regeneration date.
config.presets[0][1].docs.showLastUpdateTime = true;

export default config;
