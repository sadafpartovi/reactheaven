import { useState, useEffect } from "react";

const Table = ({ data }) => {
  const [sorted, setSort] = useState({ header: "default", mode: "default" });
  const [dataToShow, SetDataToShow] = useState(data);
  const [defaultData, setDefaultData] = useState(data);
  // const [searchInput, setSearchInput] = useState();

  let header;
  if (data.length) header = Object.keys(data[0]);

  const handleClickHeader = (headerItem) => {
    let newSort = { ...sorted };
    if (sorted.header === headerItem) {
      if (sorted.mode === "default") newSort.mode = "ascending";
      else if (sorted.mode === "ascending") newSort.mode = "descending";
      else newSort.mode = "default";
    } else {
      newSort.mode = "ascending";
      newSort.header = headerItem;
    }
    setSort(newSort);
  };

  const handleAscendingSort = () => {
    let data = defaultData.sort((a, b) => {
      return a[sorted.header].localeCompare(b[sorted.header]);
    });
    SetDataToShow(data);
  };
  const handleDescendingSort = () => {
    let data = defaultData.sort((a, b) => {
      return b[sorted.header].localeCompare(a[sorted.header]);
    });
    SetDataToShow(data);
  };

  const handleSearch = (input) => {

    const data = defaultData.filter((item) => {
      return item.name.includes(input) || item.city.includes(input);
    });
    SetDataToShow(data);

  };

  useEffect(() => {
    console.log("-------", sorted);
    if (sorted.mode === "default") SetDataToShow(defaultData);
    else if (sorted.mode === "ascending") handleAscendingSort();
    else handleDescendingSort();
  }, [sorted]);



  return (
    <div>

        <input onChange={(e) => handleSearch(e.target.value)} />



      <table>
        <tr>
          {header?.map((item, key) => (
            <th onClick={() => handleClickHeader(item)} key={key}>
              {item}
            </th>
          ))}
        </tr>
        {dataToShow?.map((item) => (
          <tr>
            {header.map((h, key) => (
              <td key={key}>{item[h]}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Table;
