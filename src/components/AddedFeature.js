import React from "react";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className='button'
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
      {console.log(props.feature.name)}
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     [car.feature]: state.car.feature
//   };
// };

// export default connect(mapStateToProps, { addFeature })(AddedFeature);

export default AddedFeature;
