import type { Nursery } from "../data";

const BASE_URL = "http://localhost:3000/api/nurseries";

// 保育園一覧
export const getNurseries = async (): Promise<{
  visited: Nursery[];
  unvisited: Nursery[];
}> => {
  const res = await fetch(`${BASE_URL}/grouped`);
  return res.json();
};

// 保育園詳細
export const getNurseryDetail = async (id: number): Promise<Nursery> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

// 保育園新規登録
export const createNursery = async (data: any): Promise<{ id: number }> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// 保育園削除
export const deleteNursery = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
