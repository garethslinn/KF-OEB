export default function DownloadButton({ html, filename = "template.html" }) {

    const download = () => {

        const blob = new Blob([html], { type: "text/html" });

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = filename;

        link.click();
    };

    return (
        <button onClick={download}>
            Download HTML
        </button>
    );
}