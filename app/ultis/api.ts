export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export async function apiFetch<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {}),
            },
        });
        if (!response.ok) {
            const errorText = await response.text();
            return { success: false, error: errorText };
        }

        const data: T = await response.json();
        return { success: true, data };
    } catch (error: any) {
        return { success: false, error: error.message || 'Unknown error occurred' };
    }
}
