import React from 'react';

const EditExpansePage = (props) => {
  console.log('props', props)
  return (
    <div>
      Editing {props.match.params.id}
    </div>
  );
}

export default EditExpansePage;