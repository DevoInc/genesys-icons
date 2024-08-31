import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import iconVariables from '../../dist/icon-variables';

import '../../dist/gi-styles.css';

const meta: Meta = {
  title: 'Font',
};

export default meta;
type Story = StoryObj;

const styles: { [key: string]: React.CSSProperties } = {
  table: {
    color: '#48545c',
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
  glyph: {
    fontFamily: 'genesys-icon-font',
    fontSize: '28px',
  },
};

export const Preview: Story = {
  render: () => (
    <table style={styles.table}>
      <thead>
        <tr style={styles.tr}>
          <th style={{ ...styles.t, ...styles.th }}>Variable</th>
          <th style={{ ...styles.t, ...styles.th }}>Value</th>
          <th style={{ ...styles.t, ...styles.th }}>Font Glyph</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries<string>(iconVariables).map(([key, value]) => (
          <tr style={styles.tr} key={key}>
            <td style={styles.t}>{key}</td>
            <td style={styles.t}>{value}</td>
            <td style={styles.t}>
              <span
                style={styles.glyph}
                className={key.replace('gi_', 'gi-')}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
