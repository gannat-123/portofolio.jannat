"use client";

import { useEffect, useState } from "react";

export default function SheetPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/16Bdn3c-xP11KuXT9r3-9DJDmd6d6uxZMBWxR-7E0GBE/edit?gid=0#gid=0"
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text.trim().split("\n");
        const parsed = rows.map((row) => row.split("\t"));
        setData(parsed);
      })
      .catch((error) => {
        console.error("خطأ أثناء تحميل الشيت:", error);
      });
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
        بيانات من Google Sheet
      </h1>
      {data.length === 0 ? (
        <p>جاري التحميل...</p>
      ) : (
        <table
          border="1"
          cellPadding="8"
          cellSpacing="0"
          style={{ marginTop: "20px" }}
        >
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
