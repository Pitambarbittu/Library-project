import React, {useState, useRef} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './style.css';
import DarkExample from '../Components/Table'
import Lottie from 'react-lottie';
import LibLottie from "../Lotties/Magician.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// export const Bookdata = createContext();
const Home = () => {
  if(JSON.parse(localStorage.getItem('data'))== null ){
    //check if data exists
   console.log('Local storage is empty brother')
   localStorage.setItem('data', JSON.stringify([]))
  }else {
    //if not put atleast [] empty array
    console.log('Local storage has some data brother');
  }
   

  const bookname = useRef("")
  const author = useRef("")
  const Hufflepuff = useRef("Hufflepuff")
  const Gryffindors = useRef("Gryffindors")
  const Ravenclaw = useRef("Ravenclaw")
  const Slytherin = useRef("Slytherin")
  // const [bookdata, setbookdata]=useState([])

  const [bookdata, setbookdata] = useState(JSON.parse(localStorage.getItem('data')));

  let type= ''

 


  // const [data,setData]= useState({});

   const formsubmit =(e)=>{
    if (Gryffindors.current.checked){
      type="Gryffindors"
      }
    else if (Hufflepuff.current.checked){
      type="Hufflepuff"
    }
   else if(Ravenclaw.current.checked){
      type="Ravenclaw"
   }
   else if(Slytherin.current.checked){
    type="Slytherin"
 }
   else{
      e.target.reset()
     }

    e.preventDefault();
    if(bookname.current.value.length>2 && author.current.value.length>2){
      toast.success("🎉Book Added Successfully!🎉",{
        position: "top-center",
      })
    }
    else{
      toast.error("Please fill all the Inputs!☠️🚫", {
        autoClose: 2000,
        position: "top-center",
      });
      console.log("input filleds")
    };

    
    e.preventDefault();
    if(bookname.current.value.length>2 && author.current.value.length>2)
    
     {
      //  setData({
      //    bookname: bookname.current.value,
      //    author: author.current.value,
      //    type: type

      //  })
       setbookdata([...bookdata, {
        
          bookname: bookname.current.value,
          author: author.current.value,
          type: type
 
        
       }])
       localStorage.setItem('data', JSON.stringify([...JSON.parse(localStorage.getItem('data')), {
        bookname: bookname.current.value,
        author: author.current.value,
        type: type
    } ]))
     }
     else {
       console.log("enter.values");

     }
console.log(bookdata);
     e.target.reset();
   }
  //console.log(data)

 

  //Lottiefile Animation Gif
    const MyLibLottie = {
        loop: true,
        autoplay: true,
        animationData: LibLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

//Toastify Animation Success
    // const toasty =()=>{
    //   toast.success("Book Added Successfully!",{
    //     position: "top-center",
    //   })
      

    // }

  return (
    //  <Bookdata.Provider value={data}>
    <div  className='container'>
        <h1 className='text-center text-secondary' >Hogwarts School of Witchcraft and Wizardry</h1>
        <hr />
        <div className='w-100 formshare'>
        <Form className='w-50' onSubmit={(e)=>{formsubmit(e)}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="type" placeholder="Harry Potter" ref={bookname} />
        <Form.Text className="text-muted">
          We'll never share your Books with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="J. K. Rowling " ref={author}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
     


      <div className="btn-group">
  <input type="radio"  className="btn-check" name="options" id="option1" autocomplete="off" ref={Gryffindors}  />
  <label className="btn btn-primary" htmlFor="option1">Gryffindors</label>

  <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off" ref={Hufflepuff}  />
  <label className="btn btn-info" htmlFor="option2">Hufflepuff</label>

  <input type="radio" className="btn-check" name="options" id="option3" autocomplete="off" ref={Ravenclaw} />
  <label className="btn btn-warning" htmlFor="option3">Ravenclaw</label>

  <input type="radio" className="btn-check" name="options" id="option4" autocomplete="off" ref={Slytherin} />
  <label className="btn btn-danger" htmlFor="option4">Slytherin</label>
</div>
    <br /> <br />
  
 

      <Button variant="success" type="submit"
      // onClick={toasty}
      
      >
        Submit
      </Button>
   
      
   
      
  

  

     <img className='hogwarts'  src='https://i.pinimg.com/736x/d3/de/2d/d3de2d626c552b1294f172712937c0e5.jpg' height='245px' alt="" />
   
<div className='lottie'>
<Lottie 
	    options={MyLibLottie}
        height={400}
        width={350}
        
      />
</div>
  

     {/* <DarkExample data={ bookdata }/> */}
  
   
        <ToastContainer />
          
      </Form>
   
        </div>
        <DarkExample data={ bookdata }/>
    </div>
  
    // </Bookdata.Provider>
  )

}

export default Home