
export default function Tabs({active,setActive}){

  const tabs=[
    {id:"overlay",label:"Bottom Overlay"},
    {id:"specs",label:"Specs Panel"},
    {id:"split",label:"Split Panel"}
  ];

  return(
    <div className="tabs">
      {tabs.map(t=>(
        <button
          key={t.id}
          className={active===t.id?"active":""}
          onClick={()=>setActive(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
