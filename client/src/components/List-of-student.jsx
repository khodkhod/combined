import axios from "axios"

const ListOfStudent = () => {

    let url = "http://localhost:5000/"

    const getData = () => {
        axios
        .get(url)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };
  return (
    <div>

    <button className="bg-blue-200 rounded-lg p-4 text-white" onClick={getData}>Get Student</button>

    </div>
  )
}

export default ListOfStudent