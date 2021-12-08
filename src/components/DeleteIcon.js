import React from 'react';







const DeleteIcon = () => {
  const [deleteIcon, setDeleteIcon] = React.useState("🔲")

  function changeDeleteIcon(){
    setDeleteIcon("🔳")
  }

    return <div className="deleteIcon" onMouseEnter={changeDeleteIcon}>{deleteIcon}</div>;
  };
  
  export default DeleteIcon;