const props = [
  {
    name: 'indicatorClassName',
    type: 'string',
    default: 'undefined',
    description: 'The className of the indicator',
    enDescription: 'The className of the indicator',
  },
  {
    name: 'indicatorStyle',
    type: 'React.CSSProperties',
    default: 'undefined',
    description: 'The style of the indicator',
    enDescription: 'The style of the indicator',
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
