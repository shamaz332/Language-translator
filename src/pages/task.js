// import React, { useState } from "react";

// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { TextField } from "@mui/material";

// function Task() {
//   // boolean state to know if we are editing (this will let us display
//   const [isEditing, setIsEditing] = useState(false);
//   // object state to set so we know which todo item we are editing
//   const [currentUser, setCurrentUser] = useState({});
//   const [users, setUsers] = useState([
//     { id: 1, name: "shamaz", city: "sahiwal", country: "Pakistan" },

//     {
//       id: 2,
//       name: "shamaz",
//       city: "sahiwal",
//       country: "Pakistan",
//     },
//   ]);

//   function handleEditInputChange(e) {
//     setCurrentUser({ ...currentUser, name: e.target.value });
//   }

//   function handleEditClick(user) {
//     setIsEditing(true);
//     setCurrentUser({ ...user });
//   }

//   function handleUpdateUser(id, updatedUser) {
//     const updatedObject = users.map((user) =>
//       user.id === id ? updatedUser : user
//     );
//     setIsEditing(false);
//     setUsers(updatedObject);
//   }

//   function handleEditFormSubmit(e) {
//     e.preventDefault();

//     handleUpdateUser(currentUser.id, currentUser);
//   }

//   return (
//     <div>
//       <h1>Task</h1>
//       {currentUser.id && isEditing && (
//         <form onSubmit={handleEditFormSubmit}>
//           <TextField
//             id="outlined-basic"
//             label="Edit"
//             placeholder="Edit todo"
//             value={currentUser.name}
//             onChange={handleEditInputChange}
//             variant="outlined"
//           />
//           <br /> <br />
//           <Button color="success" variant="contained" type="submit">
//             Update
//           </Button>
//           <Button
//             color="error"
//             variant="contained"
//             onClick={() => setIsEditing(false)}
//           >
//             Cancel
//           </Button>
//         </form>
//       )}
//       <TableContainer>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell align="right">City</TableCell>
//               <TableCell align="right">Country</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((row) => (
//               <TableRow
//                 key={row.id}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.city}</TableCell>
//                 <TableCell align="right">{row.country}</TableCell>
//                 <Button
//                   variant="contained"
//                   onClick={() => handleEditClick(row)}
//                 >
//                   Edit this field
//                 </Button>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default Task;
