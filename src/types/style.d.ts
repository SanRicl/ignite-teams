import "styled-components";
import theme from "@theme/index";

//tipagem para definir o tema
declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
