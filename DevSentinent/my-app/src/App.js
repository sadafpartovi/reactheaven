import { useState } from "react";

function App() {
  const [form1, setForm1] = useState({
    parent: false,
    child1: false,
    child2: false,
  });

  const [form2, setForm2] = useState({
    parent: false,
    child1: false,
    child2: false,
  });

  const handleParentCheck = (e) => {
    setForm1({
      parent: e.target.checked,
      child1: e.target.checked,
      child2: e.target.checked
    });
  };

  const handleChild1Check = (e, form) => {
    if (form === 'form1') {
      setForm1({
        parent: false,
        child1: false,
        child2: false,
        [e.target.name] : true
      })
    } else {
      setForm2({
        parent: false,
        child1: false,
        child2: false,
        [e.target.name] : true
      })
    }

  }


  const handleParent2Check = (e) => {
    setForm1({
      parent: false,
      child1: false,
      child2: false,
    })
    setForm2({
      parent: e.target.checked,
      child1: e.target.checked,
      child2: e.target.checked
    });
  }

  return (
    <>
      <label>Parent 1</label>
      <input onChange={(e) => handleParentCheck(e)} type="checkbox" checked={form1.parent}/>

      <label>child1</label>
      <input name='child1' onChange={(e) => handleChild1Check(e, 'form1')}type="checkbox" checked={form1.child1}/>

      <label>child2</label>
      <input  onChange={(e) => handleChild1Check(e, 'form1')} name='child2' type="checkbox" checked={form1.child2}/>





      <label>Parent 2</label>
      <input onChange={(e) => handleParent2Check(e)} type="checkbox" checked={form2.parent}/>

      <label>child1</label>
      <input name='child1' onChange={(e) => handleChild1Check(e, 'form2')}type="checkbox" checked={form2.child1}/>

      <label>child2</label>
      <input  onChange={(e) => handleChild1Check(e, 'form2')} name='child2' type="checkbox" checked={form2.child2}/>
    </>
  );
}

export default App;


