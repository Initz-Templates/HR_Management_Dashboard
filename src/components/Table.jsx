/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Table({ data, thList, children }) {
  return (
    <table>
      <tr>
        {thList.map((el) => (
          <th key={el}>{el}</th>
        ))}
      </tr>
      {/* {data.map((el) => (
        <tr key={el.id}>{children}</tr>
      ))} */}
    </table>
  );
}

export default Table;
