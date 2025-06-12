import { useAuthStore } from "@/stores/auth"

export const BASE_URL = 'http://localhost:8000'

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const auth = useAuthStore()
    let headers = options.headers || {}
    if (auth.isAuthenticated) {
        headers = {
            Authorization: `Bearer ${auth.token}`,
            ...headers
        }
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: headers,
    })

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
}