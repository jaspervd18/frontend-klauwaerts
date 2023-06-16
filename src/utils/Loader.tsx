import PropTypes from "prop-types";

interface LoaderProps {
  loading: boolean;
}

function Loader({ loading }: LoaderProps) {
  if (loading) {
    return (
      <>
        <div>
          <span>Loading...</span>
        </div>
        <p>Loading...</p>
      </>
    );
  }

  return null;
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
