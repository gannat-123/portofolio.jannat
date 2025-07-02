import { useEffect, useState } from "react";

const GoogleSheetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/16Bdn3c-xP11KuXT9r3-9DJDmd6d6uxZMBWxR-7E0GBE/edit?gid=0#gid=0"
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text
          .trim()
          .split("\n")
          .map((row) => row.split("\t"));
        const headers = rows[0];
        const items = rows.slice(1).map((row) => {
          const obj = {};
          headers.forEach((header, i) => {
            obj[header] = row[i];
          });
          return obj;
        });
        setData(items);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">البيانات من Google Sheet:</h2>
      <ul className="space-y-2">
        {data.map((item, idx) => (
          <li key={idx} className="border p-2 rounded shadow">
            <strong>{item.name}</strong>
            <br />
            {item.description}
            <br />
            <a
              href={item.link}
              className="text-blue-500 underline"
              target="_blank"
            >
              رابط
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSheetData;
