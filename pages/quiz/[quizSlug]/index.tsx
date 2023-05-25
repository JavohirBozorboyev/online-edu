
import useSWR from 'swr'
import {useRouter} from "next/router"
import {Text} from "@mantine/core"

const QuizSlugPage = ()=>{
	const router = useRouter()
	const { quizSlug} = router.query
	const {
    data: quiz,
    error,
    isLoading
  } = useSWR(`https://onlineedu.pythonanywhere.com/api/examp/free-category/${quizSlug}/`);

  

  if(error){
    return(
      <>
        <Text size="xl" ta="center">Server Error</Text>
      </>
    )
  }

	return (
		<></>
	)
}

export default QuizSlugPage