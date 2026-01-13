import { WordRotate } from "@/components/ui/word-rotate"

interface wordNames {
    words: string[]
}

const TextFlip = ({words}: wordNames) => {
  return (
    <WordRotate
      className="font-bold text-black dark:text-gray-400"
      words={words}
    />
  )
}

export default TextFlip

