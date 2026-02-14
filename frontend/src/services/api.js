export const classifyWaste = async (item) => {
  const response = await fetch("http://localhost:5000/api/waste/classify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ item }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  // 🔥 If backend sends { result: "json string" }
  if (data.result) {
    return JSON.parse(data.result);
  }

  // 🔥 If backend already sends parsed JSON
  return data;
};
