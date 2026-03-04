
export default function Preview({data}){

  return(
    <div style={{position:"relative",width:"100%"}}>

      <img src={data.img} alt={data.alt} style={{width:"100%"}}/>

      <div style={{
        position:"absolute",
        top:"2%",
        right:"2%",
        width:"45%",
        background:"rgba(0,0,0,0.95)",
        padding:"5cqw"
      }}>

        <dl style={{
          margin:0,
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"2cqw",
          color:"#fff"
        }}>

          <dt>Length</dt>
          <dd>{data.length}</dd>

          <dt>Width</dt>
          <dd>{data.width}</dd>

          <dt>Thickness</dt>
          <dd>{data.thickness}</dd>

          <dt>Coverage</dt>
          <dd>{data.coverage}</dd>

        </dl>

      </div>

    </div>
  );
}
