const props = [
  {
    name: 'gap',
    type: 'number',
    default: 'differs from component to component',
    description: 'The gap between the items',
    enDescription: 'The gap between the items',
  },
  {
    name: 'activeColor',
    type: 'string',
    default: 'var(--springen-active-color)',
    description: 'The color of the active item',
    enDescription: 'The color of the active item',
  },
  {
    name: 'color',
    type: 'string',
    default: 'differs from component to component',
    description: 'The color of the item',
    enDescription: 'The color of the item',
  },
  {
    name: 'items',
    type: 'SpringenItem[]',
    default: 'undefined',
    description: 'The items of the component',
    enDescription: 'The items of the component',
  },
  {
    name: 'value',
    type: 'string',
    default: 'undefined',
    description: 'The value of the component',
    enDescription: 'The value of the component',
  },
  {
    name: 'onChange',
    type: '(e: React.MouseEvent<HTMLDivElement>, value: T) => void',
    default: 'undefined',
    description: 'The onChange of the component',
    enDescription: 'The onChange of the component',
  },
  {
    name: 'itemClassName',
    type: 'string | ((item: SpringenItem<T>, index: number) => string)',
    default: 'undefined',
    description: 'The className of the item',
    enDescription: 'The className of the item',
  },
  {
    name: 'itemStyle',
    type: 'React.CSSProperties | ((item: SpringenItem<T>, index: number) => React.CSSProperties)',
    default: 'undefined',
    description: 'The style of the item',
    enDescription: 'The style of the item',
  },
  {
    name: 'activeItemClassName',
    type: 'string | ((item: SpringenItem<T>, index: number) => string)',
    default: 'undefined',
    description: 'The className of the active item',
    enDescription: 'The className of the active item',
  },
  {
    name: 'activeItemStyle',
    type: 'React.CSSProperties | ((item: SpringenItem<T>, index: number) => React.CSSProperties)',
    default: 'undefined',
    description: 'The style of the active item',
    enDescription: 'The style of the active item',
  },
];

const API = () => {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Props</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td>{prop.name}</td>
              <td>{prop.enDescription}</td>
              <td>{prop.type}</td>
              <td>{prop.default}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default API;
