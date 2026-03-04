
export default function Editor({data,setData}){

  const update=(k,v)=>setData({...data,[k]:v});

  return(
    <div className="editor">

      <label>Image</label>
      <input value={data.img||""} onChange={e=>update("img",e.target.value)}/>

      <label>Alt</label>
      <input value={data.alt||""} onChange={e=>update("alt",e.target.value)}/>

      <label>Length</label>
      <input value={data.length||""} onChange={e=>update("length",e.target.value)}/>

      <label>Width</label>
      <input value={data.width||""} onChange={e=>update("width",e.target.value)}/>

      <label>Thickness</label>
      <input value={data.thickness||""} onChange={e=>update("thickness",e.target.value)}/>

      <label>Coverage</label>
      <input value={data.coverage||""} onChange={e=>update("coverage",e.target.value)}/>

    </div>
  );
}
