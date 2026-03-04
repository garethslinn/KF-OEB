
export default function Editor({data,setData}){

  const update=(k,v)=>setData({...data,[k]:v});

  return(
    <div className="editor">

      <label>Image</label>
      <input value={data.img||""} onChange={e=>update("img",e.target.value)}/>

      <label>Alt</label>
      <input value={data.alt||""} onChange={e=>update("alt",e.target.value)}/>

      <label>Panel Background</label>
      <input value={data.panelBg||"#0b7f2e"} onChange={e=>update("panelBg",e.target.value)}/>

      <label>Label 1</label>
      <input value={data.label1||""} onChange={e=>update("label1",e.target.value)}/>

      <label>Value 1</label>
      <input value={data.value1||""} onChange={e=>update("value1",e.target.value)}/>

      <label>Label 2</label>
      <input value={data.label2||""} onChange={e=>update("label2",e.target.value)}/>

      <label>Value 2</label>
      <input value={data.value2||""} onChange={e=>update("value2",e.target.value)}/>

    </div>
  );
}
