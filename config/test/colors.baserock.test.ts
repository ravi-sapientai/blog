import { colors, getColorByName, socialColors } from '../../config/colors';
import type { SocialColor } from '../../config/colors';

describe('Colors Module', () => {
  describe('colors object', () => {
    it('should contain all social colors', () => {
      Object.entries(socialColors).forEach(([key, value]) => {
        expect(colors).toHaveProperty(key, value);
      });
    });

    it('should contain all palette colors', () => {
      const paletteColors = {
        red: '#f03e3e',
        pink: '#d7336c',
        grape: '#ae3ec9',
        violet: '#7048e8',
        indigo: '#4263eb',
        blue: '#1677ff',
        cyan: '#1098ad',
        teal: '#0ca678',
        green: '#37b24d',
        lime: '#74b816',
        yellow: '#f59f00',
        orange: '#f76707',
      };
      Object.entries(paletteColors).forEach(([key, value]) => {
        expect(colors).toHaveProperty(key, value);
      });
    });

    it('should not have any duplicate colors', () => {
      const uniqueColors = new Set(Object.values(colors));
      expect(uniqueColors.size).toBe(Object.keys(colors).length);
    });
  });

  describe('getColorByName function', () => {
    it('should return a valid color for any input string', () => {
      const testCases = ['test', 'another', 'longstringhere', ''];
      testCases.forEach(testCase => {
        const result = getColorByName(testCase);
        expect(Object.values(colors)).toContain(result);
      });
    });

    it('should return consistent colors for the same input', () => {
      const testString = 'consistentTest';
      const firstResult = getColorByName(testString);
      const secondResult = getColorByName(testString);
      expect(firstResult).toBe(secondResult);
    });

    it('should handle empty string input', () => {
      const result = getColorByName('');
      expect(Object.values(colors)).toContain(result);
    });

    it('should return different colors for different string lengths', () => {
      const color1 = getColorByName('a');
      const color2 = getColorByName('ab');
      const color3 = getColorByName('abc');
      expect(color1).not.toBe(color2);
      expect(color2).not.toBe(color3);
      expect(color3).not.toBe(color1);
    });
  });

  describe('Type safety', () => {
    it('should allow accessing valid social colors', () => {
      const socialColor: SocialColor = 'github';
      expect(socialColors[socialColor]).toBe('#181717');
    });

    it('should not allow accessing invalid social colors', () => {
      // @ts-expect-error
      const invalidColor: SocialColor = 'invalidColor';
      expect(socialColors[invalidColor]).toBeUndefined();
    });

    it('should ensure all keys in socialColors are of type SocialColor', () => {
      Object.keys(socialColors).forEach(key => {
        const typedKey = key as SocialColor;
        expect(socialColors[typedKey]).toBeDefined();
      });
    });
  });
});