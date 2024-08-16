import { useHead } from '#app'

export default function usePageTitle(title: string) {
  useHead({
    title: `${title} | Practice makes perfect`
  })
}