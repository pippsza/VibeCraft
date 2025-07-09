import { styleOptions, colors, styleUtils } from "./stylesCfg";

function autoPalette(audience, category) {
  // Получаем базовые цвета
  const accent = audience?.accent || category.accent;
  const secondary = audience?.secondary || category.secondary;
  // Если есть, берём, если нет — дублируем/генерируем
  const tertiary = audience?.tertiary || category.tertiary || secondary;
  const quaternary = audience?.quaternary || category.quaternary || accent;
  return [accent, secondary, tertiary, quaternary];
}

export default function generateTheme(
  styleKey,
  categoryKey,
  audienceKey,
  typographyKey,
  iconKey
) {
  const category = colors[categoryKey];
  const audience = category?.[audienceKey];
  const style = styleOptions[styleKey];
  const utils = styleUtils[categoryKey];

  const palette = autoPalette(audience, category);

  const obj = {
    typography: style.typography[typographyKey],
    icons: style.icons[iconKey],
    palette,
    background: category.background,
    styleUtils: utils,
  };
  console.log(obj);
  return obj;
}
