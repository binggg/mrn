/**
 * Icon icon set component.
 * Usage: <Icon name="icon-name" size={20} color="#4F8EF7" />
 *
 * @providesModule Icon
 */
'use strict';

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import {
  GLYPH_MAP,
  FONT_NAME,
  FONT_FILE
} from './config'

/**
 * Icon Component
 * @example
 * <Icon name="google" size={24} color={COLOR[`${primary}500`].color} />
 */
export default class Icon extends createIconSet(GLYPH_MAP, FONT_NAME, FONT_FILE) {
  /**
   * @param {object} prop
   * @param {string} prop.name - Icon name
   * @param {number} [prop.size=12] - Icon size
   * @param {string} [prop.color] - Icon color
   */
  constructor(props) {
    super(props);
  }
}