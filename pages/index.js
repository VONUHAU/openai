import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [productDes, setProductDescription] = useState("");
  const [maxLength, setMaxLength] = useState(260);
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productDes, max: maxLength}),
    });
    const data = await response.json();
    setResult(data.result);
    setProductDescription(result);
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
       
        <h3>Copy Suggestion</h3>
        <form onSubmit={onSubmit}>
          <textarea
            rows = {6}
            type="text"
            name="productDes"
            placeholder="Describe your product/service"
            value={productDes}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        <p style={{marginTop: 0}}> Maximum length</p>

          <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
            
            <input type="range" name="max"
            min="50" max="400"
            class="slider"
            value={maxLength}
            style={{marginBottom: "24px", width: "90%"}}
            onChange={(e) => setMaxLength(e.target.value)}/>
            <label > {maxLength}</label>
          </div>
          
         
          <input type="submit" value="Generate copy" />
        </form>
        <div style={{width: "520px"}}>
            <h4 style={{textAlign: "left"}}> Result </h4>
            <div className={styles.result}>{result}</div>
        </div>
        
      </main>
    </div>
  );
}
