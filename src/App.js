import './App.css';
import catalog from './utils/catalog.js';
import classess from "./app.module.css"
import { useEffect, useState } from 'react';
const App = () =>{
  const [searchValue,getSearchValue] = useState("")
  const [jobCatalog,getJobCatalog] = useState(catalog)
  useEffect(()=>{
    let value = catalog.filter((data)=>data.Name.includes(searchValue))
    getJobCatalog(value)
  },[searchValue])
  return <div className={classess.mainContainer}>
    <h1>
      JD Catalog
    </h1>
    <input type='text' value= {searchValue} onChange={(e)=>getSearchValue(e.target.value)} className={classess.searchField} placeholder="Search Job"/>
    <div className={classess.catalogList}>
    {
      jobCatalog&&jobCatalog.map((data,key)=>{
       return <div key={key}  className={classess.catalogElement}>
        <a href={`#${key}`}>

        {data.Name}
        </a>
       </div>
      })
    }
    </div>
    {
      jobCatalog&&jobCatalog.map((data,key)=>{
        return <div className={classess.catalogDetail} id={key} key={key}>
          <h2>
            {data.Name}
          </h2>
          <h3>
            Responsibilities
          </h3>
          <ul>
          {
            data.Responsibilities.map((resp,key1)=>{
              return <li key={key1}>{resp}</li>
            })
          }
          </ul>
        <h3>
        Education and/or Work Experience Requirements
        </h3>
        <ul>
          {
            data["Education and/or Work Experience Requirements"].map((exp,key2)=>{
              return <li key={key2}>{exp}</li>
            })
          }
          </ul>
        </div>
      })
    }
  
    </div>
}

export default App;
