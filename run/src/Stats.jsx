import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from "recharts";

import "./Stats.css";

function Stats() {
  const [data, setData] = useState([]);
  const [pieData, setPieData] = useState([]);

  async function fetchData() {
    const res = await fetch(
      "https://692d6606e5f67cd80a4b5759.mockapi.io/blog"
    );
    const json = await res.json();

    const withStats = json.map((item) => ({
      title: item.myTitle,
      views: Math.floor(Math.random() * 1000),
      reads: Math.floor(Math.random() * 500),
      likes: Math.floor(Math.random() * 200),
      date: item.createdAt?.split("T")[0] || "2025-01-01",
    }));

    setData(withStats);

    const totalBlogs = json.length;
    const addedToday = json.filter(
      (b) => b.createdAt?.split("T")[0] === new Date().toISOString().split("T")[0]
    ).length;

    setPieData([
      { name: "Total Blogs", value: totalBlogs },
      { name: "Blogs Added Today", value: addedToday },
    ]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="stats-wrapper">
      <h1 className="stats-heading">Your Stats</h1>

      {/* PIE + BAR CHART SIDE BY SIDE */}
      <div className="chart-row">
        <div className="chart-box">
          <h3>Library Overview (Pie)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Views Per Blog (Bar)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LINE CHARTS */}
      <div className="charts-container">
        <div className="chart-box">
          <h3>Views Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#000" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Reads Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="reads" stroke="#0a7" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Likes Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="likes" stroke="#c00" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TABLE */}
      <h2 className="table-heading">Article Performance</h2>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Views</th>
            <th>Reads</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.title}</td>
              <td>{row.views}</td>
              <td>{row.reads}</td>
              <td>{row.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stats;
