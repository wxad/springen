const props = [
  {
    name: 'hoverColor',
    enDescription: 'The color of the hover',
    type: 'string',
    default: '""',
  },
  {
    name: 'activeColor',
    enDescription: 'The color of the active',
    type: 'string',
    default: '""',
  },
  {
    name: 'bgClassName',
    enDescription: 'The class name of the background',
    type: 'string',
    default: '""',
  },
  {
    name: 'bgStyle',
    enDescription: 'The style of the background',
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
