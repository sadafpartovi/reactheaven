function InformationTable({ list }) {
  return (
    <table className="informationTable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Lastname</th>
          <th>Phone</th>
        </tr>
          {list &&
            list.map((item) => (
              <tr>
                <th>{item[0]}</th>
                <th>{item[1]}</th>
                <th>{item[2]}</th>
              </tr>
            ))}

      </thead>
    </table>
  );
}

export default InformationTable;
