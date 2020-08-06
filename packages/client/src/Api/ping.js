import api from "Api"

export const ping = () => api.get("/api/ping")
