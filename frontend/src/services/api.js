export const classifyWaste = async (item, timeout = 10000) => {
  const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
  const url = `${base}/api/waste/classify`;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item }),
      signal: controller.signal,
    });

    const text = await response.text();
    clearTimeout(id);

    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      // backend may return { result: "{...}" }
      try {
        const wrapped = JSON.parse(text || "{}");
        if (wrapped.result) data = JSON.parse(wrapped.result);
        else data = wrapped;
      } catch (e2) {
        throw new Error("Invalid JSON from server");
      }
    }

    if (!response.ok) {
      throw new Error(data.message || `Request failed (${response.status})`);
    }

    return data;
  } catch (err) {
    if (err.name === "AbortError") throw new Error("Request timed out");
    throw err;
  }
};
