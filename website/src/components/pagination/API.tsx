const props = [
  {
    name: 'value',
    enDescription: 'The current page number',
    type: 'number',
    default: 'undefined',
  },
  {
    name: 'onChange',
    enDescription: 'The callback function when the page number changes',
    type: '(e: React.MouseEvent<HTMLDivElement>, value: number, pageSize: number) => void',
    default: 'undefined',
  },
  {
    name: 'totalSize',
    enDescription: 'The total number of items',
    type: 'number',
    default: 'undefined',
  },
  {
    name: 'pageSize',
    enDescription: 'The number of items per page',
    type: 'number',
    default: '10',
  },  
  {
    name: 'showPrevNext', 
    enDescription: 'Whether to show the previous and next page buttons',
    type: 'boolean',
    default: 'true',
  }
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
