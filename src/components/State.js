import { useHistory } from 'react-router-dom';
import { useUserLocationContext } from '../contexts';
import PropTypes from 'prop-types';

State.propTypes = {
  state: PropTypes.object.isRequired,
};

export default function State(props) {
  const { geoPol, areas, name } = props.state;
  const history = useHistory();
  const { setState } = useUserLocationContext();

  const handleSelectState = (stateName) => {
    setState(stateName);
    history.push('/areas');
  };

  return (
    <button
      onClick={(e) => handleSelectState(name)}
      className="m-2 text-left transition-colors duration-200 ease-in-out delay-75 border border-gray-300 rounded-sm cursor-pointer focus:outline-none focus:border-black hover:border-black"
    >
      <div className="flex items-center h-full p-4 ">
        <div className="flex-grow">
          <p className="text-lg font-medium text-black">{name}</p>
          <div className="text-sm text-left text-gray-800">
            <span className="inline-block">{geoPol}</span>
            <span className="inline-block mx-2">⦁</span>
            <span className="inline-block">{areas.length} areas available</span>
          </div>
        </div>
      </div>
    </button>
  );
}
