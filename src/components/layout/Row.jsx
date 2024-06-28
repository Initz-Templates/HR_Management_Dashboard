/* eslint-disable react/prop-types */
function Row({ split = "2-2", children }) {
  return <div className={`row-${split}`}>{children}</div>;
}

export default Row;
