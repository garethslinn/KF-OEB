import DownloadButton from "../../components/DownloadButton";

export default function Editor({ data, setData }) {

    const update = (k, v) => setData({ ...data, [k]: v });

    const html = `
<!--
ACCESSIBLE IMAGE + TEXT BLOCK COMPONENT
---------------------------------------
ONLY EDIT VALUES IN THE TOKEN SECTION.
DO NOT EDIT STRUCTURE BELOW.
-->

<div
  style="
    /* ===== EDITABLE TOKENS ===== */
    --component-width:100%;
    --overlay-height:${data.overlayHeight || 22}%;

    /* ===== STRUCTURE (DO NOT EDIT) ===== */
    position:relative;
    width:var(--component-width);
    aspect-ratio:1 / 1;
    font-family:Arial,sans-serif;
    overflow:hidden;
    container-type:inline-size;
    box-sizing:border-box;
  "
>

<img
  src="${data.img}"
  alt="${data.alt}"
  style="
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
  "
/>

<div
  style="
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:var(--overlay-height);
    background:#333333;
    display:flex;
    align-items:center;
    overflow:hidden;
    box-sizing:border-box;
  "
>

<p
  style="
    color:#FFFFFF;
    font-size:5cqw;
    margin:0;
    padding:0 5%;
    text-align:left;
    line-height:1.15;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    overflow:hidden;
  "
>
${data.text}
</p>

</div>

</div>
`;

    return (

        <div className="editor">

            <label>Image</label>
            <input
                value={data.img || ""}
                onChange={(e) => update("img", e.target.value)}
            />

            <label>Alt</label>
            <input
                value={data.alt || ""}
                onChange={(e) => update("alt", e.target.value)}
            />

            <label>Overlay Text</label>
            <textarea
                value={data.text || ""}
                onChange={(e) => update("text", e.target.value)}
            />

            <DownloadButton html={html} />

        </div>

    );
}