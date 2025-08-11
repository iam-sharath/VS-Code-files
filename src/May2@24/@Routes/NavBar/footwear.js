import React from "react";

const Footwear = () => {
  return (
    <center>
      <h1>FOOTWEAR</h1>
    </center>
  );
};

export default Footwear;
// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { datacontext } from "../routes";
// // import { useLocation } from 'react-router-dom'

// const Mainhome = () => {
//   // const location = useLocation();
//   // console.log(location)
//   // const {name} = location.state || {};

//   const [data, setData] = useState([]);
//   const [title, setTitle] = useState("");
//   const [views, setViews] = useState(100);
//   const [isUpdate,setIsUpdate] = useState(false);
//   const [updateid,setUpdateid] = useState('')
//   const {count} = useContext(datacontext)
 

//   const handledata = () => {
//     axios
//       .get("http://localhost:3001/posts")
//       .then((responce) => {
//         setData(responce?.data);
//       })
//       .catch((error) => {
//         console.log(error.massage);
//         setData([]);
//       });
//   };

//   useEffect(() => {
//     handledata();
//   }, []);

//   const handlenewPost = (e) => {
//     e.preventDefault();

//     if (title && views) {
//       const newData = {
//         title: title,
//         views: views,
//       };
//       axios
//         .post("http://localhost:3001/posts", newData)
//         .then((res) => {
//           if (res?.status === 201) {
//             handledata();
//             setTitle("");
//             setViews(100);
//           }
//         })
//         .catch((error) => console.log(error));
//     } else {
//       alert("fill the form");
//     }
//   };
// const handleDelete=(id)=>{
// axios.delete(`http://localhost:3001/posts/${id}`)
// .then((res)=>{
//  handledata();
// })
// .catch((error)=>console.log(error))
// }
// const handleUpdate =(id,title,views)=>{
//   setTitle(title);
//   setViews(views);
//   setIsUpdate(true);
//   setUpdateid(id);

// }
// const handleNewUpdate=()=>{
//   const updateddata ={title,views}
// axios.put(`http://localhost:3001/posts/${updateid}`,updateddata)
// .then((res)=>{
//   handledata();
//   setTitle("");
//   setViews(100);
//   setIsUpdate(false)

// })
// .catch((err)=>console.log(err))
// }

//   return (
//     <center>
//       <form > 
//         <input
//         className="m-3"
//           type="text"
//           name="title"
//           placeholder="Enter Title Name"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="number"
//           name="views"
//           value={views}
//           onChange={(e) => setViews(e.target.value)}
//         />
//         {/* <button className="btn btn-primary m-3" onClick={handlenewPost}>
//           ADD NEW
//         </button> */}
//       </form>


//          {isUpdate ? (
//          <spam>
//           <button className="btn btn-primary m-3" onClick={handleNewUpdate}>Update</button>
//           <button className="btn btn-secondary" onClick={()=>
//           {
//             setIsUpdate(false)
//             setTitle('')
//             setViews(100)
//           }
//             }>cancel</button>

//          </spam>):
//          (<button className="btn btn-primary m-3" onClick={handlenewPost}>
//           ADD NEW
//         </button>)}

//       <table className="table table-success table-striped">
//         <tbody>

//           <tr>
//           <th>Id</th>
//           <th>Titile</th>
//           <th>Viewws</th>
//           <th></th>
//           <th></th>
//           </tr>
//         {data?.map(({ id, views, title }) => (
//           <tr key={id}>
//             <td>{id}</td>
//             <td>{title}</td>
//             <td>{views}</td>
//             <td><button className="btn btn-warning" onClick={()=>handleUpdate(id,title,views)}>Update</button></td>
//             <td><button className="btn btn-danger" onClick={()=>handleDelete(id)}>Delete</button></td>
          
//           </tr>
//         ))}
//         </tbody>
//       </table>

//       {/* <h1>HOME</h1>
//         {name&& <h2>welcome... {name}!</h2>} */}
//     </center>
//   );
// };

// export default Mainhome;
