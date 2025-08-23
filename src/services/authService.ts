const API_BASE_URL = "http://localhost:5001/api";

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Đăng nhập thất bại");
  }

  return res.json(); // { token, user }
};
