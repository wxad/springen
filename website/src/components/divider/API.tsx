const props = [
  {
    name: 'dividerClassName',
    type: 'string',
    default: 'undefined',
    description: 'The className of the divider',
    enDescription: 'The className of the divider',
  },
  {
    name: 'dividerStyle',
    type: 'React.CSSProperties',
    default: 'undefined',
    description: 'The style of the divider',
    enDescription: 'The style of the divider',
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
