import './App.css';
import catalog from './utils/catalog.js';
import classess from "./app.module.css"
import { useEffect, useState } from 'react';
const App = () => {
  const [searchValue, getSearchValue] = useState("")
  const [jobCatalog, getJobCatalog] = useState(catalog)
  const [jdIndex, setJdIndex] = useState(0)
  useEffect(() => {
    let value = catalog.filter((data) => data.Name.toLowerCase().includes(searchValue.toLowerCase()))
    getJobCatalog(value)
  }, [searchValue])

  const setSearchValue = (e) => {
    getSearchValue(e.target.value)
  }
  return <div>
    <div className={classess.header}>
      JD Catalog

    </div>
    <div className={classess.catalogHolder}>
      <div className={classess.listHolder}>
        <center>

          <input type='text' value={searchValue} onChange={setSearchValue} className={classess.searchField} placeholder="Search Job" />
        </center>
        {
          jobCatalog && jobCatalog.map((data, key) => {
            return <div key={key} className={classess.catalogElement} onClick={() => setJdIndex(key)}>
              <a href={`#${key}`}>
                {data.Name}
              </a>
            </div>
          })
        }
      </div>
      <div className={classess.catalogSearchList}>
       <input list ="catalog" className={classess.datalistInput} onChange={setSearchValue}/>
              <datalist id="catalog">
              {
          jobCatalog && jobCatalog.map((data, key) => {
            return <option key={key} >
                {data.Name}
              </option>
          })
        }
              </datalist>
      </div>
 

      {
        jobCatalog[jdIndex] && <div className={classess.descriptionHolder}>
          <div className={classess.catalogDetail} id={jdIndex}>
            <h2>
              {jobCatalog[jdIndex].Name}
            </h2>
            <h3>
              Responsibilities
            </h3>
            <ul>
              {
                jobCatalog[jdIndex].Responsibilities.map((resp, key1) => {
                  return <li key={key1}>{resp}</li>
                })
              }
            </ul>
            <h3>
              Education and/or Work Experience Requirements
            </h3>
            <ul>
              {
                jobCatalog[jdIndex]["Education and/or Work Experience Requirements"].map((exp, key2) => {
                  return <li key={key2}>{exp}</li>
                })
              }
            </ul>
          </div>
        </div>
      }

    </div>

  </div>
}

export default App;
