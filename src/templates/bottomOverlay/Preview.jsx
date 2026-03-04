export default function Preview({ data }) {

  return (

      <div
          style={{
            border: "2px dashed #ccc",
            padding: "20px",
            display: "flex",
            justifyContent: "center"
          }}
      >

        <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              fontFamily: "Arial",
              overflow: "hidden",
              containerType: "inline-size",
              boxSizing: "border-box",
              lineHeight: 0
            }}
        >

          <img
              src={data.img}
              alt={data.alt}
              style={{
                width: "100%",
                height: "auto",
                display: "block"
              }}
          />

          <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "#333",
                padding: "12px 0",
                display: "flex",
                alignItems: "center"
              }}
          >

            <p
                style={{
                  color: "#fff",
                  fontSize: "5cqw",
                  margin: 0,
                  padding: "0 5%",
                  lineHeight: 1.15
                }}
            >
              {data.text}
            </p>

          </div>

        </div>

      </div>

  );

}