import axios from 'axios'
import { useEffect, useState} from 'react'
const Home = () => {
    const [listOfRepo, setListOfRepo] = useState([])
    useEffect(() => {

    let url = "https://api.github.com/search/repositories?q=XXX"
        // const home =()=>
        axios
        .get(url)
        .then((res) => {
            console.log(res.data.items)
            setListOfRepo(res.data.items)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
  return (
    <>
    {/* <div>
        <button onClick={home}>Home</button>
    </div> */}
    <div className='flex flex-row flex-wrap space-y-4 ms-32'>
    {
                    listOfRepo.map((details) => (
                        <div key={details.id} style={{ width: '300px' }} className='flex flex-col ms-10 my-5 shadow-lg py-5 text-center'>
                            <img src={details.owner.avatar_url} alt="" className='w-16 h-16 mx-auto rounded-full' />
                            <h1>
                                {details.name}
                            </h1>
                            <h1>
                                {details.owner.login}
                            </h1>
                            <h1>
                                {details.private ? 'Private' : 'Public'}
                            </h1>
                        </div>
                    ))
                }
    </div>
    </>
  )
}
// let URL ="http://localhost:5000/"
// const Home = () => {
//    axios
//    .get(URL)
//    .then((res) => {
//        console.log(res.data);
//    }) 
// }
// };

export default Home;