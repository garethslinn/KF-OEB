import { useState } from "react";
import Tabs from "./components/Tabs";
import "./styles/app.css";
import { templateDefaults } from "./templates/defaults";

import OverlayEditor from "./templates/bottomOverlay/Editor";
import OverlayPreview from "./templates/bottomOverlay/Preview";

import SpecsEditor from "./templates/specsOverlay/Editor";
import SpecsPreview from "./templates/specsOverlay/Preview";

import SplitEditor from "./templates/splitSquare/Editor";
import SplitPreview from "./templates/splitSquare/Preview";

export default function App(){

    const [template,setTemplate] = useState("overlay");
    const [data,setData] = useState(templateDefaults.overlay);

    const changeTemplate = (name) => {
        setTemplate(name);
        setData(templateDefaults[name]);
    };

    return (

        <div className="app">

            <h1>Marketing Template Builder</h1>

            <Tabs active={template} setActive={changeTemplate} />

            <div className="workspace">

                {template === "overlay" && (
                    <>
                        <OverlayEditor data={data} setData={setData}/>
                        <OverlayPreview data={data}/>
                    </>
                )}

                {template === "specs" && (
                    <>
                        <SpecsEditor data={data} setData={setData}/>
                        <SpecsPreview data={data}/>
                    </>
                )}

                {template === "split" && (
                    <>
                        <SplitEditor data={data} setData={setData}/>
                        <SplitPreview data={data}/>
                    </>
                )}

            </div>

        </div>

    );

}