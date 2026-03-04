
export default function Template1Preview({data}){

  return(
    <div style={{border:"2px dashed #ccc",padding:2,background:"#fff"}}>

      <div style={{
        position:"relative",
        width:data.width + "%",
        aspectRatio:"1/1",
        overflow:"hidden",
        containerType:"inline-size"
      }}>

        <img
          src={data.img}
          alt={data.alt}
          style={{width:"100%",height:"100%",objectFit:"cover"}}
        />

        <div style={{
          position:"absolute",
          bottom:0,
          left:0,
          width:"100%",
          height:"22%",
          background:"#333",
          display:"flex",
          alignItems:"center"
        }}>

          <p style={{
            color:"#fff",
            fontSize:"5cqw",
            margin:0,
            padding:"0 5%",
            lineHeight:1.15
          }}>
            {data.text}
          </p>

        </div>

      </div>

    </div>
  );
}
