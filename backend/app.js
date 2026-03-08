const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());

// MySQLへの接続設定
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "CouRage_81",
  database: "db_Nursary",
});

// 保育園一覧表示
app.get("/api/nurseries/grouped", (req, res) => {
  const sql = "SELECT * FROM nurseries";

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);

    const visited = results.filter((n) => n.visited === 1);
    const unvisited = results.filter((n) => n.visited === 0);

    res.json({ visited, unvisited });
  });
});

const safeParse = (value) => {
  try {
    return value ? JSON.parse(value) : [];
  } catch (e) {
    return [];
  }
};

// 保育園詳細表示
app.get("/api/nurseries/:id", (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM nurseries WHERE id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "Nursery not found" });
    }

    const n = results[0];

    const nursery = {
      ...n,
      visited: n.visited === 1, // 数値を boolean に変換
      good_points: safeParse(n.good_points),
      bad_points: safeParse(n.bad_points),
      memo: safeParse(n.memo),
    };

    res.json(nursery);
  });
});

// 保育園の新規登録
app.post("/api/nurseries", (req, res) => {
  const data = req.body;

  const sql = `
  INSERT INTO nurseries (
    name,
    distance,
    type,
    visited,
    rating,
    post,
    address,
    time,
    holidays,
    phone,
    email,
    good_points,
    bad_points,
    memo
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    sql,
    [
      data.name,
      data.distance,
      data.type,
      data.visited ? 1 : 0,
      data.rating,
      data.post,
      data.address,
      data.time,
      data.holidays,
      data.phone,
      data.email,
      JSON.stringify(data.good_points || []),
      JSON.stringify(data.bad_points || []),
      JSON.stringify(data.memo || []),
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "created",
        id: result.insertId,
      });
    },
  );
});

// 保育園削除
app.delete("/api/nurseries/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM nurseries WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Nursery not found" });

    res.json({ message: "deleted", id: id });
  });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
