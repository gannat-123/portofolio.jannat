"use client";

import { useEffect, useState } from "react";

const GoogleSheetPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRc2NxBeDQq4P66p1Suw340mL89XNA-3qHXCP8wY0OiJ5VkxKXCL8iiYDFlYYvBadmhCFKajdWOC2Or/pub?output=tsv"
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text.trim().split("\n");
        const parsedData = rows.map((row) => row.split("\t"));
        setData(parsedData);
      })
      .catch((err) => {
        console.error("Error fetching Google Sheet:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1
       
      
        style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}
      >
        بيانات من Google Sheet
      </h1>
      <table border="1" cellPadding="8" cellSpacing="0">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSheetPage;
