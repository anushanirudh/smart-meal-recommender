export async function generateDiet(formData) {
  const response = await fetch("http://127.0.0.1:8000/recommend", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to generate diet");
  }

  return response.json();
}
