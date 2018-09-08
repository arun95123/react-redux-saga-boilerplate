import { connect } from 'react-redux';
import { getData } from '../../actions';

const mapStateToProps = (state) => {
  return {
    content: state.data.content
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
