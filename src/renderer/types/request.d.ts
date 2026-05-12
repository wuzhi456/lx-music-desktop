declare module '@renderer/utils/request' {
  export interface HttpFetchResponse<T = unknown> {
    statusCode?: number
    headers?: Record<string, string | string[] | undefined>
    raw?: Buffer | string
    body?: T
  }

  export interface HttpFetchResult<T = unknown> {
    isCancelled: boolean
    cancelHttp: () => void
    promise: Promise<HttpFetchResponse<T>>
  }

  export interface HttpFetchOptions {
    method?: string
    timeout?: number
    format?: string
    [key: string]: unknown
  }

  export const httpFetch: <T = unknown>(url: string, options?: HttpFetchOptions) => HttpFetchResult<T>
  export const cancelHttp: (requestObj: { abort?: () => void } | null | undefined) => void
}
