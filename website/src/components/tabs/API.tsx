const props = [
  {
    name: 'indicatorClassName',
    enDescription: 'The class name of the indicator',
    type: 'string',
    default: '""',
  },
  {
    name: 'indicatorStyle',
    enDescription: 'The style of the indicator',
    type: 'React.CSSProperties',
    default: '{}',
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
