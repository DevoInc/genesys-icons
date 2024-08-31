export const getIconComponent = (
  name: string, // GIAbacus
  tags: string, // "tag1,tag2"
  content: string,
  viewBox: string = '0 0 32 32',
) =>
  `(props) => <IconBase data-name="${name}" data-tags="${tags}" title="${name}" viewBox="${viewBox}" {...props}>${content}</IconBase>`;
