import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import * as ReactIcons from '../../dist';
import iconVariables from '../../dist/icon-variables';

import '../../dist/gi-styles.css';

const meta: Meta = {
  title: 'Font',
};

export default meta;
type Story = StoryObj;

const bodyColor = '#48545c';
const styles: { [key: string]: React.CSSProperties } = {
  table: {
    color: bodyColor,
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    fontSize: '14px',
  },
  t: {
    textAlign: 'left',
    padding: '4px 16px',
    verticalAlign: 'middle',
    borderBottom: 'solid 1px #ddd',
  },
  th: {
    fontWeight: 'bold',
    color: '#182026',
    minWidth: '200px',
    padding: '16px',
  },
  svg: {
    color: '#48545c',
  },
  glyph: {
    fontFamily: 'genesys-icon-font',
    fontSize: '28px',
  },
};

export const Preview: Story = {
  render: () => {
    const fontToReactRegex = new RegExp(/(?:^|_)([a-z])/g);
    return (
      <table style={styles.table}>
        <thead>
          <tr style={styles.tr}>
            <th style={{...styles.t,...styles.th}}>Variable</th>
            <th style={{...styles.t,...styles.th}}>Value</th>
            <th style={{...styles.t,...styles.th}}>Font Glyph</th>
            <th style={{...styles.t,...styles.th}}>React SVG</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries<[string, string]>(iconVariables).map(
            ([key, value]) => {
              // Adds Gi prefix to the key and replace _ with PascalCase (a_hand_finger -> GiAHandFinger)
              const SVGComponentName = `GI${key.replace(
                fontToReactRegex,
                (_, g) => g.toUpperCase(),
              )}`;
              const ReactIcon = ReactIcons[SVGComponentName];
              if (ReactIcon === undefined) {
                throw new Error(`${SVGComponentName} icon not found.`);
              }
              return (
                <tr style={styles.tr} key={key}>
                  <td style={styles.t}>{key}</td>
                  <td style={styles.t}>{value}</td>
                  <td style={styles.t}>
                    <span style={styles.glyph} className={`gi-${key}`} />
                  </td>
                  <td style={styles.t}>{<ReactIcon color={bodyColor}/>}</td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    );
  },
};
