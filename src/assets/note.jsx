import RemoveIcon from '@mui/icons-material/Remove';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function note(props) {

  function click() {
    props.delete(props.id)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in="true">
        <Fab onClick={click}>
        <RemoveIcon/>
        </Fab>
      </Zoom>
    </div>
  );
}

export default note; 