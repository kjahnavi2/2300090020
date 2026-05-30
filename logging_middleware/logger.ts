const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";

export async function Log(
  stack: string,
  level: string,
  packageName: string,
  message: string,
  token: string
) {
  try {
    const response = await fetch(LOG_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    const data = await response.json();

    console.log("Log Response:", data);

    return data;
  } catch (error) {
    console.error("Logging failed:", error);
  }
}