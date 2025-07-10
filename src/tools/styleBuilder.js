import { styleOptions, colors, styleUtils } from "./stylesCfg";

function autoPalette(audience, category) {
  const accent = audience?.accent;
  const secondary = audience?.secondary;
  const tertiary = category?.accent;
  const quaternary = category?.secondary;
  return [accent, secondary, tertiary, quaternary];
}

export default function generateTheme(
  styleKey,
  categoryKey,
  audienceKey,
  typographyKey,
  iconKey
) {
  const category = colors?.[categoryKey];
  const audience = category?.[audienceKey];
  const style = styleOptions?.[styleKey];
  const utils = styleUtils?.[categoryKey];

  const palette = autoPalette(audience, category);

  return {
    typography: style.typography?.[typographyKey],
    icons: style.icons?.[iconKey],
    palette,
    background: category.background,
    styleUtils: utils,
  };
}
