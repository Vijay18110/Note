
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card'
import Form from './components/from'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css';
import axios from 'axios';
function App() {
  const [allproducts, setAllproducts] = useState([]);
  useEffect(() => {
    dataset
    axios.get('https://fakestoreapi.com/products').then((data) => setAllproducts(data.data)
    )
    console.log(allproducts)

  }, [])
  const initialdata = [
    {
      id: 1,
      title: "the book",
      desc: "this is the best gook for joks Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque saepe ducimus ut laboriosam incidunt necessitatibus animi, dolore vitae itaque maxime laudantium quisquam iure, sequi laborum corporis, hic fugiat ratione repellat."
    }, {
      id: 2,
      title: "the book",
      desc: "this is the best gook for joks"
    }, {
      id: 3,
      title: "the book",
      desc: "this is the best gook for joks"
    }
  ]
  const [allnotes, setAllNotes] = useState(initialdata)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [selid, setSelectedId] = useState("");
  const [utitle, setUTitle] = useState("")
  const [udesc, setUDesc] = useState("")
  const Updateongetdata = (e) => {
    setUTitle(e.target.value)
  }
  const Updateongetdatadesc = (e) => {
    setUDesc(e.target.value)
  }
  const ongetdatadesc = (e) => {
    setDesc(e.target.value)
  }
  const ongetdata = (e) => {
    setTitle(e.target.value)
  }
  const save = () => {
    const id = Math.floor(Math.random() * 10000000000)
    if (title === "") {
      toast.error("fill title field", {
        position: "top-left",
        pauseOnHover: 5000,
        pauseOnHover: true,
      })
    }
    else if (desc === "") {
      toast.error("fill descprition field", {
        position: "top-left",
        pauseOnHover: 5000,
        pauseOnHover: true,
      })
    }
    else {
      setAllNotes(() => [...allnotes, { title, desc, id }])
    }
  }
  const ondelete = (id) => {
    const filltereddata = setAllproducts.filter((data) => data.id !== id);
    setAllproducts(filltereddata);
  }
  const onUpdate = (id, t, d) => {
    setUDesc(d)
    setUTitle(t)
    setSelectedId(id)

  }
  const update = (data) => {
    setAllNotes([...allnotes, data.title = utitle, data.desc = udesc])
    setSelectedId('');
    const filltereddata = allnotes.filter((x) => x.id !== "update")
    setAllNotes(filltereddata)
    setUDesc("")
    setUTitle("")
  }
  const dataset = (data) => {
    alert(data.title)
    setUDesc(data.desc)
    setUTitle(data.title)
  }
  return (
    <>
      <Form btnname="Save" title={title} desc={desc} type="text" save={save} ongetdata={ongetdata} ongetdatadesc={ongetdatadesc}> </Form>
      <div className='cardcont'>
        {


          allproducts.length > 0 ?
            allnotes.map((data) => {
              return (
                <>
                  {
                    selid == data.id ? <Form title={utitle} desc={udesc} ongetdata={Updateongetdata} save={() => update(data)} ongetdatadesc={Updateongetdatadesc} btnname="Update"></Form> :
                      <Card cat={data.category} price={data.price} description={data.description} img={data.image} onUpdate={onUpdate} ondelete={ondelete} title={data.title} desc={data.desc} id={data.id} ></Card>
                  }
                </>
              )
            }) : <p className='p'> No Results!</p>
        }
      </div>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
