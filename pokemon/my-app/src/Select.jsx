const Select = ({list, setActivePok}) => {


  const handleChange = (e) => {
    const selected = e.target.value;
    const active = list.find(item => item.name === selected);
    setActivePok(active)
  }
  return (
    <div>

      <select onChange={(e) => handleChange(e)}>
      <option value='Pokemon'>Choose!</option>
    {list.map(item => (
      <option value={item.name}>{item.name}</option>
    ))}
      </select>

    </div>
  )
}

export default Select;