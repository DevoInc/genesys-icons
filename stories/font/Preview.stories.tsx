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

const styles: { [key: string]: React.CSSProperties } = {
  t: {
    textAlign: 'left',
    padding: '0 15px 0 15px',
  },
  glyph: {
    fontFamily: 'genesys-icon-font',
    fontSize: '32px',
    color: '#000',
  },
};

export const Preview: Story = {
  render: () => {
    const fontToReactRegex = new RegExp(/(?:^|_)([a-z])/g);
    return (
      <table>
        <thead>
          <tr>
            <th style={styles.t}>Variable</th>
            <th style={styles.t}>Value</th>
            <th style={styles.t}>Font Glyph</th>
            <th style={styles.t}>React SVG</th>
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
                <tr key={key}>
                  <td style={styles.t}>{key}</td>
                  <td style={styles.t}>{value}</td>
                  <td style={styles.t}>
                    <span style={styles.glyph} className={`gi-${key}`} />
                  </td>
                  <td style={styles.t}>{<ReactIcon />}</td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    );
  },
};
