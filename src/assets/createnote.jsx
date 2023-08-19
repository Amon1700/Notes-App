import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useState } from 'react';
function createnote(props) {

  const [flag ,setflag] = useState(false)

  function click() {
    setflag(true)
  }
  return (
    <div>
      <div className="createnote">
        {flag &&<input name="title" onChange={props.change} value={props.value.title} placeholder="Title" />}
        <textarea  onClick={click} name="content" onChange={props.change} value={props.value.content} placeholder="Take a note..." rows={flag? 3: 1} />
        <Zoom in={flag}> 
        <Fab onClick={props.add} ><AddIcon/></Fab>
        </Zoom>
      </div>
    </div>
  );
}
export default createnote;