import type { PostProps } from "../types/postprops";
import { useQuery } from "@tanstack/react-query";
export const FetchPosts = async (): Promise<PostProps[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const useFetchPosts = () => {
 const { data, isLoading, error } = useQuery<PostProps[]>({
    queryKey: ['posts'],
    queryFn: FetchPosts,
    staleTime: 1000 * 60 * 5,
  })
  return { data, isLoading, error }
}