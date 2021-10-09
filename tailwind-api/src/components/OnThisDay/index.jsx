import { React, useCallback, useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Index() {
  let [responseData, setResponseData] = useState("");

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "fc59749277msh5739753a05bb4c3p1fe10cjsn564de6700695",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetching Data with React Hooks</h1>
        <button type="button" onClick={fetchData}>
          Click for Data
        </button>
      </header>
      <main>
        {responseData && (
          <blockquote>
            "{responseData && responseData.content}"
            <small>
              {responseData &&
                responseData.originator &&
                responseData.originator.name}
            </small>
          </blockquote>
        )}
      </main>
      <pre>
        {/* <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code> */}
      </pre>
    </div>
  );
}

export default Index;