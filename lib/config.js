import { typography,color } from 'react-native-material-design-styles';
import { glyphMap } from './Icon';

/**
 * @type {object}
 */
export const COLOR = color;

/**
 *
 */
export const TYPO = typography;

/**
 *
 * @type {string}
 */
export const PRIMARY = 'paperOrange';

/**
 *
 * @type {string[]}
 */
export const COLOR_NAME = ["googleBlue", "googleGreen", "googleGrey", "googleRed", "googleYellow", "paperAmber",
    "paperBlue", "paperBlueGrey", "paperBrown", "paperCyan", "paperDeepOrange", "paperDeepPurple", "paperGreen",
    "paperGrey", "paperIndigo", "paperLightBlue", "paperLightGreen", "paperLime", "paperOrange", "paperPink",
    "paperPurple", "paperRed", "paperTeal", "paperYellow"];

/**
 *
 * @type {string[]}
 */
export const THEME_NAME = ['light', 'dark'];

/**
 *
 * @type {Array}
 */
export const ICON_NAME = Object.keys(glyphMap);