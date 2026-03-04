
export default function Preview({data}){

  return(
    <div style={{
      display:"grid",
      gridTemplateColumns:"2fr 1fr",
      width:"100%",
      aspectRatio:"1/1",
      overflow:"hidden",
      fontFamily:"Arial"
    }}>

      <div>
        <img
          src={data.img}
          alt={data.alt}
          style={{width:"100%",height:"100%",objectFit:"cover"}}
        />
      </div>

      <div style={{
        background:data.panelBg||"#0b7f2e",
        color:"#fff",
        display:"flex",
        alignItems:"center",
        padding:"6cqw"
      }}>

        <ul style={{
          listStyle:"none",
          margin:0,
          padding:0,
          display:"flex",
          flexDirection:"column",
          gap:"6cqw"
        }}>

          <li>
            <span>{data.label1}</span>
            <strong>{data.value1}</strong>
          </li>

          <li>
            <span>{data.label2}</span>
            <strong>{data.value2}</strong>
          </li>

        </ul>

      </div>

    </div>
  );
}
